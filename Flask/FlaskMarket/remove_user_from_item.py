from app import create_app, db
from app.models import Item, User


def remove_user_from_item(item_name, username):
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

        # Check if the user is the owner of the item
        if item.owner == user.id:
            # Remove the user from the item
            item.owner = None
            db.session.commit()

            print(f"User '{username}' removed from the item '{item_name}'.")
        else:
            print(
                f"User '{username}' is not the owner of the item '{item_name}'. No action taken.")


if __name__ == "__main__":
    item_name_to_update = "Mac Book Pro"
    username_to_remove = "Baker"

    remove_user_from_item(item_name_to_update, username_to_remove)
