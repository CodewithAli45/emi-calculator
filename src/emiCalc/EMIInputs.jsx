
import React from 'react';
import './emiInputs.css';

export default function EMIInputs({ principal, setPrincipal, rate, setRate, tenure, setTenure }) {
  return (
    <div className="emi-calc-form">
      <div className="emi-calc-field">
        <label>Loan Amount</label>
        <input type="number" value={principal} min={0} max={10000000} onChange={e => setPrincipal(Number(e.target.value))} className="no-spinner" />
        <input type="range" min={0} max={10000000} value={principal} onChange={e => setPrincipal(Number(e.target.value))} />
      </div>
      <div className="emi-calc-field">
        <label>Interest Rate</label>
        <input type="number" value={rate} min={0} max={30} step={0.1} onChange={e => setRate(Number(e.target.value))} className="no-spinner" />
        <input type="range" min={0} max={30} step={0.1} value={rate} onChange={e => setRate(Number(e.target.value))} />
      </div>
      <div className="emi-calc-field">
        <label>Loan Tenure (Months)</label>
        <input type="number" value={tenure} min={1} max={360} onChange={e => setTenure(Number(e.target.value))} className="no-spinner" />
        <input type="range" min={1} max={360} value={tenure} onChange={e => setTenure(Number(e.target.value))} />
      </div>
      <button className="emi-calc-apply">Apply Now</button>
    </div>
  );
}
