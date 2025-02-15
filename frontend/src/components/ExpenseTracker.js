import React, { useState, useEffect } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // Load expenses from localStorage when the component mounts
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever the expenses list changes
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (amount && category) {
      const newExpense = { amount, category };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      setAmount('');
      setCategory('');
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '20px' }}>Expense Tracker</h2>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="amount" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="category" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Category:</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <button 
        onClick={addExpense} 
        style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Add Expense
      </button>

      <h3 style={{ marginTop: '20px' }}>Expense List:</h3>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {expenses.map((expense, index) => (
          <li key={index} style={{ background: '#fff', padding: '10px', marginBottom: '5px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><strong>{expense.category}:</strong> Rs.{expense.amount}</span>
            <button 
              onClick={() => deleteExpense(index)} 
              style={{ background: '#ccc', border: 'none', cursor: 'pointer', color: '#333', fontSize: '16px', padding: '5px 10px', borderRadius: '5px' }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
