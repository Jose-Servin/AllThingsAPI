from app.models import Item, User
from app import create_app, db


def add_user_to_item(item_name, username):
    app = create_app()

    with app.app_context():
        # Query the Item based on its name
        item = Item.query.filter_by(name=item_name).first()

        if not item:
            print(f"Item with name '{item_name}' not found.")
            return

        # Query the User based on the username
        user = User.query.filter_by(username=username).first()

        if not user:
            print(f"User with username '{username}' not found.")
            return

        # Add the user to the item
        item.owner = user.id
        db.session.commit()

        print(f"User '{username}' added to the item '{item_name}'.")


if __name__ == "__main__":
    item_name_to_update = "Mac Book Pro"
    username_to_add = "Baker"

    add_user_to_item(item_name_to_update, username_to_add)
