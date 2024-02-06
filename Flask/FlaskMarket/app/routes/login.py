from flask import Blueprint, render_template, redirect, url_for, flash
from app.forms.login_form import LoginForm
from app.models.user import User
from flask_login import login_user

login_bp = Blueprint("login", __name__)


@login_bp.route("/login", methods=["GET", "POST"])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(
            username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(
            attempted_password=form.password.data
        ):
            login_user(attempted_user)
            flash(
                f"Success! You are logged in as: {attempted_user.username}",
                category="success",
            )
            return redirect(url_for("market.market_page"))
        else:
            flash(
                "Username and password do not match! Please try again",
                category="danger",
            )

    return render_template("login.html", form=form)
