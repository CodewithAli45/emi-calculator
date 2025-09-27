import React from 'react';
import './circularEmiCalculator.css';

export default function CircularEMICalculator({ principal, rate, tenure, emi, totalPayment, totalInterest }) {
  const principalPercent = ((principal / totalPayment) * 100).toFixed(0);
  const interestPercent = ((totalInterest / totalPayment) * 100).toFixed(0);

  // For circular progress, calculate the stroke-dasharray
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const emiPercent = 100; // Always show full circle for EMI value

  return (
    <div className="emi-calc-card">
      <div className="emi-calc-header">
        <div className="emi-calc-switch">
          {/* This will be the change type icon, handled in parent */}
        </div>
        <svg width="120" height="120" className="emi-calc-circle">
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            fill="none"
            stroke="url(#emiGradient)"
            strokeWidth="10"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference * (1 - emiPercent / 100)}
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
          <defs>
            <linearGradient id="emiGradient" x1="0" y1="0" x2="120" y2="120">
              <stop offset="0%" stopColor="#6a11cb" />
              <stop offset="100%" stopColor="#2575fc" />
            </linearGradient>
          </defs>
        </svg>
        <div className="emi-calc-emi-label">Your EMI is</div>
        <div className="emi-calc-emi-value">₹ {emi.toFixed(2)}</div>
        <div className="emi-calc-emi-month">per month</div>
        <div className="emi-calc-summary">
          <div>
            <span style={{ color: '#2575fc', fontWeight: 500 }}>Principal Amount</span>
            <div className="emi-calc-summary-value">₹ {principal.toLocaleString('en-IN')}</div>
            <div className="emi-calc-summary-percent" style={{ color: '#2575fc' }}>{principalPercent}%</div>
          </div>
          <div>
            <span style={{ color: '#ff9800', fontWeight: 500 }}>Interest Payable</span>
            <div className="emi-calc-summary-value">₹ {totalInterest.toLocaleString('en-IN', {maximumFractionDigits:2})}</div>
            <div className="emi-calc-summary-percent" style={{ color: '#ff9800' }}>{interestPercent}%</div>
          </div>
        </div>
        <div className="emi-calc-total-label">Total Payment</div>
        <div className="emi-calc-total-value">₹ {totalPayment.toLocaleString('en-IN', {maximumFractionDigits:2})}</div>
        <div className="emi-calc-breakdown">View EMI Breakdown</div>
      </div>
    </div>
  );
}
