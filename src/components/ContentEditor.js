import React, { useContext, useEffect } from 'react';
import { DashboardContext } from '../context/DashboardContext';

// Dummy analysis function simulating backend analysis.
const analyzeContent = (text) => {
  // Compute a score (here, as a simple function of text length).
  const score = Math.min(100, Math.floor(text.length / 10));

  // Provide feedback based on text length.
  const suggestions = [];
  if (text.length > 200) {
    suggestions.push("Consider shortening your content for clarity.");
  } else if (text.length < 50) {
    suggestions.push("Add more detail to enhance the overview.");
  } else {
    suggestions.push("Content length is optimal.");
  }
  return { score, suggestions };
};

const ContentEditor = () => {
  const { content, setContent, setScore, setSuggestions } = useContext(DashboardContext);

  // Use an effect to simulate analysis on content change.
  useEffect(() => {
    const timer = setTimeout(() => {
      const { score, suggestions } = analyzeContent(content);
      setScore(score);
      setSuggestions(suggestions);
    }, 500);
    return () => clearTimeout(timer);
  }, [content, setScore, setSuggestions]);

  return (
    <textarea
      style={{ width: '100%', height: '150px', padding: '10px', fontSize: '16px' }}
      placeholder="Type your content summary here..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

export default ContentEditor;