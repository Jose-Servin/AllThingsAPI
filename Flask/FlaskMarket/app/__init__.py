from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    # database_uri = 'sqlite:///' + os.path.join(app.instance_path, 'market.db')
    database_uri = "sqlite:////Users/joseservin/AllThingsFullStack/Flask/FlaskMarket/app/instance/market.db"
    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions, blueprints, etc.
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Import and register blueprints
    from app.routes.home import home_bp
    from app.routes.market import market_bp

    app.register_blueprint(home_bp)
    app.register_blueprint(market_bp)

    return app
