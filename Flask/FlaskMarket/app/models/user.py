from app import db, login_manager, bcrypt
from flask_login import UserMixin


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(length=30), nullable=False, unique=True)
    email_address = db.Column(db.String(length=50),
                              nullable=False, unique=True)
    # For security reasons, we don't store the password but rather a password_hash
    # We specify a length of 60 because that is the length the hashing algorithm returns.
    password_hash = db.Column(db.String(length=60), nullable=False)
    budget = db.Column(db.Integer(), nullable=False, default=1000)
    # From the relationship we defined, we can view the User if we have an Item
    # by looking at the Item.owned_user
    items = db.relationship("Item", backref="owned_user", lazy=True)

    @property
    def password(self):
        raise AttributeError("Password is not a readable attribute.")

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
