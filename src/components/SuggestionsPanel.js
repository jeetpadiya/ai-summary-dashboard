import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const SuggestionsPanel = () => {
  const { suggestions } = useContext(DashboardContext);
  return (
    <div style={{ padding: '10px' }}>
      {suggestions.length > 0 ? (
        <ul>
          {suggestions.map((suggestion, idx) => (
            <li key={idx}>{suggestion}</li>
          ))}
        </ul>
      ) : (
        <p>No suggestions yet.</p>
      )}
    </div>
  );
};

export default SuggestionsPanel;