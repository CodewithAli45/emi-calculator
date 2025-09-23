from flask import Flask
from routes.main_routes import main

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key_here' # For security, change this
    app.register_blueprint(main)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)