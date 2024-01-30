from flask import Blueprint, render_template, request, redirect, url_for
from app import db
from app.forms import RegisterForm
from app.models import User

register_bp = Blueprint("register",  __name__)


@register_bp.route("/register", methods=["GET", "POST"])
def register_page():
    register_form = RegisterForm()
    if request.method == 'POST' and register_form.validate():
        user_to_create = User(username=register_form.username.data,
                              email_address=register_form.email_address.data,
                              password_hash=register_form.password1.data)

        # Add the new User to the database
        db.session.add(user_to_create)
        db.session.commit()

        print("New User successfully created.")
        return redirect(url_for('market.market_page'))

    return render_template("register.html", form=register_form)
