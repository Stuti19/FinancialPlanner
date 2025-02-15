import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import InputForm from './components/InputForm';
import InvestmentCalculator from './components/InvestmentCalculator';
import ExpenseTracker from './components/ExpenseTracker';
import SavingsGoalTracker from './components/SavingsGoalTracker';
import TaxCalculator from './components/TaxCalculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard /></Layout>} />
      <Route path="/investment" element={<Layout><InputForm /></Layout>} />
      <Route path="/expense-tracker" element={<Layout><ExpenseTracker /></Layout>} />
      <Route path="/savings-goal" element={<Layout><SavingsGoalTracker /></Layout>} />
      <Route path="/tax-calculator" element={<Layout><TaxCalculator /></Layout>} />
      <Route path="/investment-calculator" element={<Layout><InvestmentCalculator /></Layout>} />
    </Routes>
  );
}

export default App;
