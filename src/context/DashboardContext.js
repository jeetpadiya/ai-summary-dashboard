import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [content, setContent] = useState("");
  const [score, setScore] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  return (
    <DashboardContext.Provider value={{
      content,
      setContent,
      score,
      setScore,
      suggestions,
      setSuggestions
    }}>
      {children}
    </DashboardContext.Provider>
  );
};