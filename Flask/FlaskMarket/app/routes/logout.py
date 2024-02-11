from flask import Blueprint, redirect, url_for, flash
from flask_login import logout_user, login_required

logout_bp = Blueprint("logout", __name__)


@logout_bp.route("/logout")
@login_required
def logout_page():
    logout_user()
    flash("You have been logged out!", category="info")
    # this url_for is calling a route NOT an html template
    return redirect(url_for("home.home_page"))
