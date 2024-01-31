from flask import Blueprint, render_template, request, redirect, url_for, flash
from app import db
from app.forms import RegisterForm
from app.models import User
from flask_login import login_user

register_bp = Blueprint("register",  __name__)


@register_bp.route("/register", methods=["GET", "POST"])
def register_page():
    register_form = RegisterForm()
    if request.method == 'POST' and register_form.validate():
        # Because of the setter method, we call password and not
        # password_hash to create a User
        user_to_create = User(username=register_form.username.data,
                              email_address=register_form.email_address.data,
                              password=register_form.password1.data)
        # Add the new User to the database
        db.session.add(user_to_create)
        db.session.commit()
        # After registering login the user and redirect to market.market_page route
        login_user(user_to_create)
        flash(
            f"Account created successfully! You are now logged in as {user_to_create.username}", category='success')
        return redirect(url_for('market.market_page'))

    # if the form contains validation errors
    if register_form.errors != {}:
        for err_msg in register_form.errors.values():
            flash(
                f'There was an error with creating a user: {err_msg}',
                category='danger')

    return render_template("register.html", form=register_form)
