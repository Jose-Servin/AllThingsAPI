from flask import Blueprint, render_template, request, redirect, url_for
from app.models import Item
from app import db
from flask_login import login_required

market_bp = Blueprint('market', __name__)


@market_bp.route('/market')
# decorators are functions that execute before our defined function
@login_required
def market_page():
    # Query items from the Item table
    items = Item.query.all()

    # Convert the SQLAlchemy objects to a list of dictionaries
    items_data = [
        {
            'id': item.id,
            'name': item.name,
            'barcode': item.barcode,
            'price': item.price
        }
        for item in items
    ]

    return render_template('market.html', items=items_data)


@market_bp.route('/add_item', methods=['GET', 'POST'])
def add_item():
    if request.method == 'POST':
        # Get data from the form
        name = request.form.get('name')
        barcode = request.form.get('barcode')
        price = request.form.get('price')
        description = request.form.get('description')

        # Create a new Item instance
        new_item = Item(name=name, barcode=barcode,
                        price=price, description=description)

        # Add the new item to the database
        db.session.add(new_item)
        db.session.commit()

        return redirect(url_for('market.market_page'))

    # You should create an add_item.html template for the form
    return render_template('add_item.html')
