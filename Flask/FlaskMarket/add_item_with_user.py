from app import create_app, db
from app.models import Item, User


def add_item_with_owner(item_data, user_data):
    app = create_app()

    with app.app_context():
        # Check if the specified user already exists
        user = User.query.filter_by(username=user_data["username"]).first()

        if not user:
            # If the user doesn't exist, create a new user
            user = User(**user_data)
            db.session.add(user)
            db.session.commit()

        # Add the item to the database with the specified owner
        item = Item(**item_data, owner=user.id)
        db.session.add(item)
        db.session.commit()


if __name__ == "__main__":
    # Example usage
    item_data = {
        "name": "IPad Air",
        "barcode": "4356567",
        "price": 350,
        "description": "10th Gen Ipad",
    }
    user_data = {
        "username": "Baker",
        "email_address": "new_user@example.com",
        "password_hash": "hashed_password",
        "budget": 2000,
    }

    add_item_with_owner(item_data, user_data)
