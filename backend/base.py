from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Negato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

@api.route('/contact')
def my_contact():
    response_body = {
        "name": "Contact",
        "about" :"About"
    }

    return response_body
