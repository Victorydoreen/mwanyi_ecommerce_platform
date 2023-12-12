from flask import jsonify, request, Blueprint
from backend.users.user import User
from backend.db import db
from flask_jwt_extended import create_access_token #to make JSON Web Tokens
from flask import Blueprint,request,jsonify 
from flasgger import swag_from
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
# from werkzeug.security import check_password_hash,generate_password_hash



users = Blueprint('users', __name__, url_prefix='/users')

# getting all users
@users.route('/all')
def all_users():
    users = User.query.all()
    return jsonify ({
        "success": True,
        "data": users,
        "total": len(users) #returns the total number of users
    }), 200





# creating a new user
@users.route('/create', methods= ['POST'])
def creating_user():
    
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    nick_name = request.json['nick_name']
    business_name = request.json['business_name']
    contact = request.json['contact']
    email = request.json['email']
    password = request.json['password']
    user_type =request.json['user_type']
    quantity=request.json['quantity']
    price=request.json['price']
    region=request.json['region']
    district=request.json['district']

    hashed_password =generate_password_hash(password)
    
    
# adding validation on the user

    user = User.query.filter_by(email=email).first()
    if not user:

        if not first_name:
            return jsonify({"message": "Your first_name is required"}),400
        if not last_name:
            return jsonify({"message": "Your last_name is required"}),400
        if not nick_name:
            return jsonify({"message": "Your nick_name is required"}),400
        if not business_name:
            return jsonify({"message": "Your business_name is required"}),400
        # email should be unique, look for a better validation
        if not email:
            return jsonify({"message": "Your email is required"}),400
        if len(password)< 5:
            return jsonify ({"message": "Password must be greater than 5 characters"}),400
        if not user_type:
            return jsonify({"message": "Your user type is required"}),400
        if user_type=="farmer" and not quantity:
            return jsonify({"message": "The coffee quantity is required"}),400
        if user_type=="farmer" and price:
            price = ""
            # return jsonify({"message": "The coffee quantity is required"}),400
        if user_type== "buyer" and quantity:
            quantity = ""
            # return jsonify({"message": "The price is required"}),400
        if user_type== "buyer" and not price:
            return jsonify({"message": "The price is required"}),400
        if not region:
            return jsonify({"message": "Your region is required"}),400
        if not district:
            return jsonify({"message": "Your district is required"}),400
        
    #creating an instance of a user
        new_user = User(first_name=first_name, last_name=last_name, nick_name=nick_name, 
                        business_name=business_name, contact=contact, email=email, password=hashed_password, user_type= user_type,
                        quantity=quantity, price=price,region=region,district=district)

    # creating a user and editing one
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    return jsonify({"message": "User with that email already exists, please login."}),409

#user login
@users.route("/login", methods=["POST"])
@swag_from('..srcapi/docs/users/login.yaml')
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    
    user = User.query.filter_by(email=email).first()

    if not email or not password:
        return jsonify({"message": "Both email and password are required"}),400
  
    
    if user:
      password_hash=check_password_hash(user.password,password)
      
      if password_hash:
          access_token = create_access_token(identity=user.id) #to make JSON Web Tokens for authentication
          return jsonify({
           "message":"Successfully logged in a user",
          "access_token":access_token,
          "user":user}), 200 #to access a token
      else:
        return jsonify({"message": "Invalid password"}),400
    else:
        return jsonify({"message": "email address doesn't exist"}),404 


# getting a user
@users.route ('/user/<int:id>', methods=['GET'])
def viewing_user(id):
    user = User.query.getby(id)

    response = {
            "id": user.id,
            "name":user.name,
            "contact": user.contact,
            "email": user.email,
            "password": user.password
        }
    return jsonify({"message":"User details retrieved", "user": response, "success": True}),200




# updating a user
@users.route ('/user/<int:id>', methods=['PUT'])
def updating_user(id):
    user = User.query.get(id)

    user.name = request.json['name']
    user.contact = request.json['contact']
    user.email = request.json['email']
    user.password = request.json['password']
    
    # inserting  the values 
    db.session.add(user)
    db.session.commit()
    return jsonify({"message":"User details updated", "success": True}),200

 # deleting a user 
@users.route ('/user/<int:id>', methods=['DELETE'])
def deleting_user(id):
    user = User.query.get_or_404(id)

# inserting values
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message":"User details deleted ", "success": True}),200
