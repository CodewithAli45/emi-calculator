from flask import Blueprint, render_template, request, jsonify
from utils.emi_handler import calculate_emi

main = Blueprint('main', __name__)

@main.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        try:
            p = float(request.form['principal'])
            r = float(request.form['rate'])
            t = float(request.form['tenure'])
            tenure_unit = request.form['tenure_unit']
            
            emi, total_payment, total_interest = calculate_emi(p, r, t, tenure_unit)
            
            # This part handles AJAX requests from the frontend (index.js)
            return jsonify({
                'emi': f'{emi:.2f}',
                'total_interest': f'{total_interest:.2f}',
                'total_payment': f'{total_payment:.2f}'
            })

        except (ValueError, KeyError, ZeroDivisionError) as e:
            return jsonify({'error': str(e)}), 400
    
    return render_template('index.html')