from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()


def create_app():
    app = Flask(__name__)
    # database_uri = 'sqlite:///' + os.path.join(app.instance_path, 'market.db')
    database_uri = "sqlite:////Users/joseservin/AllThingsFullStack/Flask/FlaskMarket/app/instance/market.db"
    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'ec9439cfc6c796ae2029594d'

    # Initialize extensions
    bcrypt.init_app(app)
    login_manager.init_app(app)
    # Configuring what view to return if login_required decorator fails
    login_manager.login_view = "login.login_page"
    login_manager.login_message_category = "info"
    db.init_app(app)

    with app.app_context():
        db.create_all()

    # Import and register blueprints
    from app.routes.home import home_bp
    from app.routes.market import market_bp
    from app.routes.register import register_bp
    from app.routes.login import login_bp
    from app.routes.logout import logout_bp

    app.register_blueprint(home_bp)
    app.register_blueprint(market_bp)
    app.register_blueprint(register_bp)
    app.register_blueprint(login_bp)
    app.register_blueprint(logout_bp)

    return app
