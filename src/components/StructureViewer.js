import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const StructureViewer = () => {
  const { content } = useContext(DashboardContext);
  
  // Naively split the content by periods or newlines.
  // eslint-disable-next-line
  let structure = content.split(/[\.\n]/).filter(sentence => sentence.trim().length > 0);

  return (
    <div style={{ padding: '10px' }}>
      {structure.length > 0 ? (
        <ul>
          {structure.map((item, idx) => (
            <li key={idx}>{item.trim()}.</li>
          ))}
        </ul>
      ) : (
        <p>No content structure to display.</p>
      )}
    </div>
  );
};

export default StructureViewer;