import React, { useState } from 'react';

function TaxCalculator() {
  const [income, setIncome] = useState(1000000);
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    let taxAmount = 0;
    const incomeValue = Number(income); // Convert income to a number

    if (incomeValue <= 250000) {
      taxAmount = 0; // No tax for income up to ₹2.5 lakh
    } else if (incomeValue <= 500000) {
      taxAmount = (incomeValue - 250000) * 0.05; // 5% tax for income between ₹2.5 lakh and ₹5 lakh
    } else if (incomeValue <= 1000000) {
      taxAmount = (incomeValue - 500000) * 0.2 + 12500; // 20% tax for income between ₹5 lakh and ₹10 lakh
    } else {
      taxAmount = (incomeValue - 1000000) * 0.3 + 125000; // 30% tax for income above ₹10 lakh
    }

    setTax(taxAmount);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '20px' }}>Tax Calculator</h2>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="income" style={{ fontSize: '16px' }}>Income: </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={{ width: '99%', padding: '10px', marginBottom: '15px',fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <button 
        onClick={calculateTax} 
        style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Calculate Tax
      </button>

      <p style={{ fontSize: '16px', marginTop: '15px' }}>
        Tax: Rs.{tax} {/* This will show tax even if it's 0 */}
      </p>
    </div>
  );
}

export default TaxCalculator;
