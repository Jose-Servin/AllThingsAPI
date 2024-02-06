from app import db


class Item(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(length=30), nullable=False, unique=True)
    price = db.Column(db.Integer(), nullable=False)
    barcode = db.Column(db.String(length=12), nullable=False, unique=True)
    description = db.Column(db.String(length=1024),
                            nullable=False, unique=True)
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
