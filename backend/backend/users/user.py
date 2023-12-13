
        

from flask import Flask, render_template, request, redirect, url_for, session
from backend.db import db  # Assuming this is where you import your SQLAlchemy instance
from dataclasses import dataclass
from datetime import datetime

app = Flask(__name__)
app.secret_key = '1212'  # Set your secret key

@dataclass
class User(db.Model):
    __tablename__ = 'users'

    id: int
    first_name: str
    last_name: str
    nick_name: str
    business_name: str
    email: str
    contact: str
    password: str
    user_type: str
    quantity: int
    price: int
    region: str
    district: str

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    nick_name = db.Column(db.String(150))
    business_name = db.Column(db.String(150))
    email = db.Column(db.String(150))
    contact = db.Column(db.String(150))
    password = db.Column(db.Text)
    user_type = db.Column(db.String(150))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Integer)
    region = db.Column(db.String(150))
    district = db.Column(db.String(150))

    created_at = db.Column(db.String(150), default=datetime.now())
    updated_at = db.Column(db.String(150), onupdate=datetime.now())

    def __init__(self, first_name, last_name, nick_name, business_name, email, contact, password, user_type, quantity,
                 price, region, district):
        self.first_name = first_name
        self.last_name = last_name
        self.nick_name = nick_name
        self.business_name = business_name
        self.email = email
        self.contact = contact
        self.password = password
        self.user_type = user_type
        self.quantity = quantity
        self.price = price
        self.region = region
        self.district = district

    def __repr__(self):
        return f"<User {self.name}>"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Your login logic goes here
        # Example: Check credentials and set user_id in session
        session['user_id'] = 1  # Replace with your actual user ID
        return redirect(url_for('dashboard'))

    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Your signup logic goes here
        # Example: Create a new user and set user_id in session
        session['user_id'] = 1  # Replace with your actual user ID
        return redirect(url_for('dashboard'))

    return render_template('signup.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']
    user = User.query.get(user_id)
    return render_template('dashboard.html', user=user)

if __name__ == '__main__':
    app.run(debug=True)
