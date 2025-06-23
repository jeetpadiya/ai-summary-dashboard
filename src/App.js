import React from 'react';
import ScoreGauge from './components/ScoreGauge';
import ContentEditor from './components/ContentEditor';
import StructureViewer from './components/StructureViewer';
import SuggestionsPanel from './components/SuggestionsPanel';
import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <div className="panel structure-panel">
        <h2>Structure</h2>
        <StructureViewer />
      </div>
      <div className="panel main-panel">
        <h2>Optimization Score</h2>
        <ScoreGauge />
        <h2>Content Editor</h2>
        <ContentEditor />
      </div>
      <div className="panel suggestions-panel">
        <h2>Suggestions</h2>
        <SuggestionsPanel />
      </div>
      
    </div>
  );
};

export default App;