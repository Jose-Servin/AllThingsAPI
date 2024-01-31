from app import create_app, db
from app.models import Item


def create_item(item_data):
    app = create_app()

    with app.app_context():
        # Add the user to the database
        item = Item(**item_data)
        db.session.add(item)
        db.session.commit()


if __name__ == "__main__":
    item_data = {
        "name": "Mac Book Pro",
        "barcode": "12341234",
        "price": 3200,
        "description": "16in M3 Max",
    }
    create_item(item_data)
