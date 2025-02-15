import React, { useState } from 'react';
import axios from 'axios';
import PlanResult from './PlanResult';

function InputForm() {
  const [goal, setGoal] = useState('Buying a car');
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(5);
  const [risk, setRisk] = useState('medium');
  const [plan, setPlan] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const getInvestmentPlan = async () => {
    const response = await axios.post("http://localhost:5000/api/plan", {
      goal,
      amount,
      years,
      riskLevel: risk,
    });
    setPlan(response.data);
    providePersonalizedAdvice();
  };

  const providePersonalizedAdvice = () => {
    let advice = '';

    // Goal-Based Advice
    if (goal.toLowerCase().includes('car')) {
      advice += "For buying a car, consider saving in a high-yield savings account or short-term bonds. You’ll want easy access to your funds.\n";
    } else if (goal.toLowerCase().includes('retirement')) {
      advice += "For retirement, focus on long-term growth through tax-advantaged accounts like IRAs and 401(k)s. Invest in mutual funds or index funds.\n";
    } else if (goal.toLowerCase().includes('house')) {
      advice += "For buying a house, aim for a mixture of savings and low-risk investments. Consider a Certificate of Deposit (CD) or a bond fund for safety.\n";
    } else if (goal.toLowerCase().includes('vacation')) {
      advice += "For a vacation, prioritize high-liquidity options like a savings account or short-term bond funds.\n";
    }

    // Risk-Based Advice
    if (risk === 'low') {
      advice += "With a low risk tolerance, prioritize safe investments like bonds, CDs, and high-yield savings accounts. Avoid stocks or volatile assets.\n";
    } else if (risk === 'medium') {
      advice += "For medium risk, build a diversified portfolio with a mix of stocks, bonds, and mutual funds. Balanced growth is key.\n";
    } else if (risk === 'high') {
      advice += "With a high risk tolerance, look into high-growth investments such as individual stocks, tech-focused mutual funds, and even cryptocurrencies.\n";
    }

    // Investment Amount-Based Advice
    if (amount < 10000) {
      advice += "For smaller amounts, consider low-cost options like ETFs or index funds. These allow diversification with minimal cost.\n";
    } else if (amount >= 10000 && amount <= 50000) {
      advice += "With moderate investments, you can explore balanced strategies, including a mix of stocks, bonds, and possibly real estate.\n";
    } else {
      advice += "For larger investments, actively managed funds or individual stocks may offer higher returns. Real estate is also an option for higher-value investments.\n";
    }

    // Time Horizon-Based Advice
    if (years < 5) {
      advice += "With a short time frame, focus on low-risk and liquid investments like savings accounts or bonds. Avoid stocks or risky assets.\n";
    } else if (years >= 5 && years <= 10) {
      advice += "For a medium time horizon, you can afford to invest in a mix of growth and stable assets. Consider balanced mutual funds.\n";
    } else {
      advice += "For a long-term goal, invest in growth-focused assets like stocks, real estate, and mutual funds. Take advantage of tax-advantaged retirement accounts.\n";
    }

    // Set the final personalized suggestion
    setSuggestion(advice);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '20px' }}>Investment Planning Form</h2>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="goal" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Goal:</label>
        <input 
          type="text" 
          value={goal} 
          onChange={(e) => setGoal(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="amount" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Investment Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="years" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Years:</label>
        <input 
          type="number" 
          value={years} 
          onChange={(e) => setYears(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="risk" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Risk Level:</label>
        <select 
          value={risk} 
          onChange={(e) => setRisk(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </select>
      </div>

      <button 
        onClick={getInvestmentPlan} 
        style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Get Plan
      </button>

      {/* Personalized Financial Advice */}
      {suggestion && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '8px', border: '1px solid #ccc' }}>
          <h3>Personalized AI Suggestion:</h3>
          <p>{suggestion}</p>
        </div>
      )}

      {plan && <PlanResult plan={plan} />}
    </div>
  );
}

export default InputForm;
