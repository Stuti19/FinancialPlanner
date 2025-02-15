import React, { useState } from 'react';

function InvestmentCalculator() {
  // State variables for user inputs and calculated future value
  const [principal, setPrincipal] = useState(5000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);
  const [futureValue, setFutureValue] = useState(null);

  // Function to calculate future value using compound interest formula
  const calculateInvestment = () => {
    const rateDecimal = rate / 100;
    const value = principal * Math.pow(1 + rateDecimal, years);
    setFutureValue(value);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Investment Calculator</h2>
      <p style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
        Enter the principal amount, expected rate of return, and the investment duration to calculate the future value of your investment.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="principal">Principal Amount ($):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <label htmlFor="rate">Rate of Return (% per year):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <label htmlFor="years">Investment Duration (years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <button 
          onClick={calculateInvestment}
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Calculate Future Value
        </button>
      </div>

      {futureValue !== null && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '5px', textAlign: 'center' }}>
          <strong>Future Value:</strong> ${futureValue.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default InvestmentCalculator;
