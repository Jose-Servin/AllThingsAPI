from app import db, bcrypt, login_manager
from flask_login import UserMixin


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(length=30), nullable=False, unique=True)
    email_address = db.Column(db.String(length=50), nullable=False, unique=True)
    password_hash = db.Column(db.String(length=60), nullable=False)
    budget = db.Column(db.Integer(), nullable=False, default=1000)
    items = db.relationship("Item", backref="owned_user", lazy=True)

    # Here we are taking the password_hash, converting it to an attribute
    # called password and hashing it
    @property
    def password(self):
        return self.password

    @password.setter
    def password(self, plain_text_password):
        self.password_hash = bcrypt.generate_password_hash(plain_text_password).decode(
            "utf-8"
        )

    def check_password_correction(self, attempted_password):
        return bcrypt.check_password_hash(self.password_hash, attempted_password)

    # Here we define a property so the call becomes current_user.prettier_budget in our HTML
    @property
    def prettier_budget(self):
        """Get a formatted representation of the budget with commas for thousands.

        Returns:
        str: The budget formatted as a string with commas for thousands.
        """
        return "{:,}".format(self.budget)

    def can_purchase(self, item_to_purchase):
        return self.budget >= item_to_purchase.price

    def can_sell(self, item_to_sell):
        return item_to_sell in self.items


class Item(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(length=30), nullable=False, unique=True)
    price = db.Column(db.Integer(), nullable=False)
    barcode = db.Column(db.String(length=12), nullable=False, unique=True)
    description = db.Column(db.String(length=1024), nullable=False, unique=True)
    owner = db.Column(db.Integer(), db.ForeignKey("user.id"))

    def __repr__(self):
        return f"Item {self.name}"

    def set_owner(self, user):
        # assign ownership to the current user who is logged in
        self.owner = user.id
        # decrease current user budget - item price
        user.budget -= self.price
        db.session.commit()

    def remove_owner(self, user):
        # current user is removed as owner of item
        self.owner = None
        # increase current user budget by item price
        user.budget += self.price
        db.session.commit()