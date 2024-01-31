from flask import Blueprint

home_bp = Blueprint("home", __name__)
market_bp = Blueprint("market", __name__)

# Import your route handlers here, e.g., from auth import routes as auth_routes
# Register routes with blueprints, e.g., auth_bp.register_blueprint(auth_routes)
