from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
from backend.db import db
from flask_cors import CORS
from flasgger import Swagger, swag_from 
#for app to read swagg and create yaml files for desribing specs



def create_app(config_name):
    app= Flask(__name__)
    app.config.from_object(config[config_name])
    app.config.from_pyfile("../config.py")

    db.init_app(app)
    CORS(app)
    

    # importing the blueprints
    from backend.users.controller import  users
    # from backend.addresses.controller import addresses
    # from backend.categories.controller import categories
    # from backend.districts.controller import districts
    # from backend.products.controller import products
    # from backend.orders.controller import orders
    # from backend.auth.controller import auth
    # from backend.regions.controller import regions    
    # registering the blueprints
    app.register_blueprint(users)
    # app.register_blueprint(products)
    # app.register_blueprint(orders)
    # app.register_blueprint(categories)
    # app.register_blueprint(addresses)
    # app.register_blueprint(districts)
    # app.register_blueprint(auth)
    # app.register_blueprint(regions)

    # Swagger(app, config=swagger_config, template=template)

    
    return app