
import React, { useState } from 'react';
import './emicalculator.css';
import CircularEMICalculator from './CircularEMICalculator';
import EMIInputs from './EMIInputs';

function calculateEMI(P, R, N) {
  const monthlyRate = R / 12 / 100;
  if (monthlyRate === 0) return P / N;
  return (
    P * monthlyRate * Math.pow(1 + monthlyRate, N) /
    (Math.pow(1 + monthlyRate, N) - 1)
  );
}

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(25000);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(14);
  // const [uiType, setUiType] = useState('default'); // 'default' or 'circular'
  const uiType = 'default'; // Disable switch for testing

  const emi = calculateEMI(principal, rate, tenure);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - principal;

  // Format principal for INR display
  const formatINR = (value) => {
    return value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Remove leading zeros
  const handlePrincipalChange = (val) => {
    const num = String(val).replace(/^0+/, '');
    setPrincipal(num === '' ? 0 : Number(num));
  };

  // Format principal on blur
  const handlePrincipalBlur = () => {
    setPrincipal(prev => Number(prev)); // Ensures no leading zeros
  };

  return (
    <div className="emi-calc-container">
      <div className="emi-calc-card">
        {uiType === 'default' ? (
          <div className="emi-calc-header">
            {/* Switch button disabled for testing */}
            <div className="emi-calc-emi-label">Your EMI is</div>
            <div className="emi-calc-emi-value" id='text3d'>₹ {emi.toFixed(2)}</div>
            <div className="emi-calc-emi-month">per month</div>
            <div className="emi-calc-summary">
              <div>
                <span>Principal Amount</span>
                <div className="emi-calc-summary-value">₹ {formatINR(principal)}</div>
              </div>
              <div>
                <span>Interest Payable</span>
                <div className="emi-calc-summary-value">₹ {formatINR(totalInterest)}</div>
              </div>
            </div>
            <div className="emi-calc-total-label">Total Payment</div>
            <div className="emi-calc-total-value">₹ {formatINR(totalPayment)}</div>
            <div className="emi-calc-breakdown">View EMI Breakdown</div>
          </div>
        ) : (
          <CircularEMICalculator
            principal={principal}
            rate={rate}
            tenure={tenure}
            emi={emi}
            totalPayment={totalPayment}
            totalInterest={totalInterest}
          />
        )}
        <EMIInputs
          principal={principal}
          setPrincipal={handlePrincipalChange}
          rate={rate}
          setRate={setRate}
          tenure={tenure}
          setTenure={setTenure}
          onPrincipalBlur={handlePrincipalBlur}
        />
      </div>
    </div>
  );
}
