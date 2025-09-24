
from flask import Flask
from routes.main_routes import main
import os

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'change_this_secret')
    app.register_blueprint(main)
    return app

# Expose app for Gunicorn
app = create_app()

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=False)