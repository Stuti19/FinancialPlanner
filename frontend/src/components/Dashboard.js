import React from 'react';
import Layout from './Layout';

function Dashboard() {
  return (
    <Layout>
      <div style={{ marginLeft: '-300px', marginTop: '-1px' }}> {/* Added margin for spacing */}
        <h2 style={{ textAlign: 'left' }}>Dashboard</h2>
        <p style={{ textAlign: 'left', maxWidth: '600px', lineHeight: '1.6' }}>
          Welcome to the Financial Planner Dashboard! Here you can track your financial progress and planning.
          Use this space to review your investments, savings goals, and expense tracking.
        </p>
      </div>
    </Layout>
  );
}

export default Dashboard;
