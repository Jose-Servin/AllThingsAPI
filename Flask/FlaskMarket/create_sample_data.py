from app.models import Item, User
from app import create_app, db


# Create the Flask app
app = create_app()

# Define sample data
sample_items = [
    {'name': 'Sample Item 1', 'barcode': '123456789',
        'price': 50, 'description': 'Description 1'},
    {'name': 'Sample Item 2', 'barcode': '987654321',
        'price': 75, 'description': 'Description 2'}
]

sample_users = [
    {'username': 'sample_user1', 'email_address': 'user1@example.com',
        'password_hash': 'hashed_password1', 'budget': 1000},
    {'username': 'sample_user2', 'email_address': 'user2@example.com',
        'password_hash': 'hashed_password2', 'budget': 1500}
]

with app.app_context():
    for item_data in sample_items:
        item = Item(**item_data)
        db.session.add(item)

    for user_data in sample_users:
        user = User(**user_data)
        db.session.add(user)

    db.session.commit()
