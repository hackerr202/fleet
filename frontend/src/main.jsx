import React from 'react';
import { createRoot } from 'react-dom/client';
import './animated-button.css';

// AnimatedButton component with CSS animation
function AnimatedButton({ children, onClick }) {
  return (
    <button className="animated-btn" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Fleet Management System Frontend</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
        <AnimatedButton onClick={() => alert('Viewing Vehicles!')}>View Vehicles</AnimatedButton>
        <AnimatedButton onClick={() => alert('Add a new Vehicle!')}>Add Vehicle</AnimatedButton>
        <AnimatedButton onClick={() => alert('Manage Drivers!')}>Manage Drivers</AnimatedButton>
        <AnimatedButton onClick={() => alert('Generating Reports!')}>Generate Reports</AnimatedButton>
        <AnimatedButton onClick={() => alert('Settings!')}>Settings</AnimatedButton>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />); 