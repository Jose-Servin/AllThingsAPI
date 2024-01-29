from app import create_app, db
from app.models import Item, User


def query_item_owner(item_name):
    app = create_app()

    with app.app_context():
        item = Item.query.filter_by(name=item_name).first()

        if not item:
            print(f"Item with name '{item_name}' not found.")
            return

        # Check if the item has an owner and print backref User property
        if item.owner:
            print(item.owned_user)

        else:
            print(f"Item '{item_name}' does not have an owner.")


if __name__ == "__main__":
    item_name_to_query = "IPad Air"

    query_item_owner(item_name_to_query)
