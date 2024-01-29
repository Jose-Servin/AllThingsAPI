from app import create_app, db
from app.models import User


def create_user(user_data):
    app = create_app()

    with app.app_context():
        # Add the user to the database
        user = User(**user_data)
        db.session.add(user)
        db.session.commit()


if __name__ == "__main__":
    # Example usage
    user_data = {'username': 'Baker', 'email_address': 'new_user@example.com',
                 'password_hash': 'hashed_password', 'budget': 2000}
    create_user(user_data)
