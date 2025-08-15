import React, { useEffect, useState } from 'react';

const UserReports: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);
  
  // this renders in the fallback component successfully because the error is thwon on render
  // throw new Error('User reports failed to load!');

  useEffect(() => {
    if(shouldError) {
      // this does not render the error in the fallback, nor does the orginal code because it is in an event
      throw new Error('User reports failed to load!');
    }
  }, [shouldError]);

  return (
    <div>
      <h2>User Reports</h2>
      <p>This page contains user analytics and reports.</p>

      <button
        onClick={() => setShouldError(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Trigger Error
      </button>

      <div style={{ marginTop: '20px' }}>
        <h3>Report Data</h3>
        <ul>
          <li>Total Users: 1,234</li>
          <li>Active Users: 987</li>
          <li>New Signups This Month: 45</li>
        </ul>
      </div>
    </div>
  );
};

export default UserReports;
