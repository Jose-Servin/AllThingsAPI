from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.models import Item
from app import db
from flask_login import login_required, current_user
from app.forms import PurchaseForm, SellItemForm

market_bp = Blueprint("market", __name__)


@market_bp.route("/market", methods=["GET", "POST"])
# decorators are functions that execute before our defined function
@login_required
def market_page():
    purchase_form = PurchaseForm()
    selling_form = SellItemForm()
    # This avoids us seeing the javascript refresh message on the browser
    # This acts as .validate_on_submit()
    if request.method == "POST":
        # Purchase Item Logic
        purchased_item_name = request.form.get("purchased_item")
        # To view more info about the form use the __dict__ dunder method.
        # .get() looks at the name attribute and returns the value
        print(request.form.get("purchased_item"))
        purchased_item = Item.query.filter_by(name=purchased_item_name).first()
        if purchased_item:
            if current_user.can_purchase(purchased_item):
                purchased_item.set_owner(current_user)
                flash(
                    f"Congratulations! You purchased {purchased_item.name} for ${purchased_item.price}",
                    category="success",
                )
            else:
                flash(
                    f"Unfortunately, you don't have enough money to purchase {purchased_item.name}!",
                    category="danger",
                )

        # Sell Item Logic
        sold_item_name = request.form.get("sold_item")
        sold_item = Item.query.filter_by(name=sold_item_name).first()
        if sold_item:
            if current_user.can_sell(sold_item):
                sold_item.remove_owner(current_user)
                flash(f"Congratulations! You sold {sold_item.name} back to market!", category='success')
            else:
                flash(f"Something went wrong with selling {sold_item.name}", category='danger')

        # This redirect will allow user to continue purchasing items
        return redirect(url_for("market.market_page"))

    if request.method == "GET":
        # Query items from the Item table that do not have an owner
        items = Item.query.filter_by(owner=None)
        # Convert the SQLAlchemy objects to a list of dictionaries
        items_data = [
            {
                "id": item.id,
                "name": item.name,
                "barcode": item.barcode,
                "price": item.price,
            }
            for item in items
        ]

        # Query items owned by the current user
        owned_items = Item.query.filter_by(owner=current_user.id)

        # This redirect runs when we click Market or refresh; we server the market.html page
        return render_template(
            "market.html", items=items_data, purchase_form=purchase_form, owned_items=owned_items, selling_form=selling_form
        )


@market_bp.route("/add_item", methods=["GET", "POST"])
def add_item():
    if request.method == "POST":
        # Get data from the form
        name = request.form.get("name")
        barcode = request.form.get("barcode")
        price = request.form.get("price")
        description = request.form.get("description")

        # Create a new Item instance
        new_item = Item(
            name=name, barcode=barcode, price=price, description=description
        )

        # Add the new item to the database
        db.session.add(new_item)
        db.session.commit()

        return redirect(url_for("market.market_page"))

    # You should create an add_item.html template for the form
    return render_template("add_item.html")
