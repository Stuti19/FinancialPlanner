import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={sidebarStyles}>
        <h3 style={headingStyles}>Financial Planner</h3>
        <ul style={ulStyles}>
          <li style={liStyles}><Link to="/" style={linkStyles}>Dashboard</Link></li>
          <li style={liStyles}><Link to="/investment" style={linkStyles}>Investment Plan</Link></li>
          <li style={liStyles}><Link to="/expense-tracker" style={linkStyles}>Expense Tracker</Link></li>
          <li style={liStyles}><Link to="/savings-goal" style={linkStyles}>Savings Goal Tracker</Link></li>
          <li style={liStyles}><Link to="/tax-calculator" style={linkStyles}>Tax Calculator</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={mainContentStyles}>
        {children}
      </div>
    </div>
  );
}

// Inline styles
const sidebarStyles = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  position: 'fixed',
  top: '0',
  left: '0',
};

const headingStyles = {
  fontSize: '22px',
  marginBottom: '20px',
};

const ulStyles = {
  listStyleType: 'none',
  padding: 0,
};

const liStyles = {
  marginBottom: '20px',
};

const linkStyles = {
  color: 'white',
  textDecoration: 'none',
};

const mainContentStyles = {
  marginLeft: '300px',
  padding: '20px',
  width: '100%',
};

export default Layout;
