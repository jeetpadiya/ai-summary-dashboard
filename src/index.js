import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DashboardProvider } from './context/DashboardContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DashboardProvider>
    <App />
  </DashboardProvider>
);