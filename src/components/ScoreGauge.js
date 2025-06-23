import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const ScoreGauge = () => {
  const { score } = useContext(DashboardContext);

  // Calculate degrees for the gauge (100% equals 360 degrees).
  const degrees = score * 3.6;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: `conic-gradient(#4caf50 ${degrees}deg, #e0e0e0 ${degrees}deg)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        {score}%
      </div>
    </div>
  );
};

export default ScoreGauge;