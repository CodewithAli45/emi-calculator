from flask import Flask
from routes.main_routes import main
import os

app = Flask(__name__)
def create_app():
    
    app.config['SECRET_KEY'] = 'your_secret_key_here' # For security, change this
    app.register_blueprint(main)
    return app

if __name__ == '__main__':
    app = create_app()
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)