import React, { useState, useEffect } from 'react';

function SavingsGoalTracker() {
  const [goal, setGoal] = useState(10000); // initial goal is set to 10000
  const [currentSavings, setCurrentSavings] = useState(0); // initial savings start at 0

  // Load the saved savings from localStorage when the component mounts
  useEffect(() => {
    const savedSavings = localStorage.getItem('currentSavings');
    const savedGoal = localStorage.getItem('goal');
    
    if (savedSavings) {
      setCurrentSavings(parseInt(savedSavings));
    }
    
    if (savedGoal) {
      setGoal(parseInt(savedGoal));
    }
  }, []);

  // Save the current savings and goal to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('currentSavings', currentSavings);
    localStorage.setItem('goal', goal);
  }, [currentSavings, goal]);

  const progress = (currentSavings / goal) * 100;

  // Reset function to set savings and goal to 0
  const resetValues = () => {
    setCurrentSavings(0);
    setGoal(10000);  // Reset goal back to the initial value
    localStorage.removeItem('currentSavings');
    localStorage.removeItem('goal');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '20px' }}>Savings Goal Tracker</h2>

      <div style={{ marginBottom: '15px' }}>
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Goal: Rs.{goal}</p>
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Current Savings: Rs.{currentSavings}</p>
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Progress: {progress.toFixed(0)}%</p>
      </div>

      <button 
        onClick={() => setCurrentSavings(currentSavings + 1000)} 
        style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Add Rs.1000 to Savings
      </button>

      <button 
        onClick={resetValues} 
        style={{ width: '100%', padding: '10px', backgroundColor: 'grey', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default SavingsGoalTracker;
