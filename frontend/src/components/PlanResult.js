import React from 'react';

function PlanResult({ plan }) {
  return (
    <div>
      <h2>Investment Plan</h2>
      <p><strong>Goal: </strong>{plan.goal}</p>
      <p><strong>Projected Value: </strong>Rs.{plan.totalProjectedValue}</p>
      <p><strong>Breakdown:</strong></p>
      <ul>
        {Object.entries(plan.breakdown).map(([key, value]) => (
          <li key={key}>{key}: Rs.{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlanResult;
