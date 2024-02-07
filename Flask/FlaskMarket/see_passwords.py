from app import create_app, db
from app.models.user import User


def query_user_password(username):
    app = create_app()

    with app.app_context():
        user_to_query = User.query.filter_by(username=username).first()

        if not user_to_query:
            print(f"{username} is not a registered User.")
            return

        else:
            user_password = user_to_query.password
            print(f"The password for {username} is {user_password}")


if __name__ == "__main__":
    username = "Servin99"

    query_user_password(username=username)
