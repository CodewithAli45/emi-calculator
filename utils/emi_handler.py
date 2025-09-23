def calculate_emi(p, r, t, tenure_unit):
    """
    Calculates EMI, total payment, and total interest.
    p: Principal Loan Amount
    r: Annual Interest Rate (%)
    t: Loan Tenure
    tenure_unit: 'month' or 'year'
    """
    if tenure_unit == 'year':
        n = t * 12
    else:
        n = t

    if n <= 0:
        raise ValueError("Loan tenure must be greater than zero.")
        
    monthly_rate = r / (12 * 100)

    if monthly_rate == 0:
        emi = p / n
    else:
        emi = p * monthly_rate * (pow(1 + monthly_rate, n)) / (pow(1 + monthly_rate, n) - 1)
    
    total_payment = emi * n
    total_interest = total_payment - p

    return emi, total_payment, total_interest