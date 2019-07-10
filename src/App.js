import React from 'react';
import './App.css';
import { CalculationForm } from './CalculationForm/CalculationForm';
import Header from './Header/Header';

function App() {
  const content = 'Welcome to simple calculator';

  return (
  <div>
    <Header content={content}/>
    <div className="container">
      <CalculationForm />
    </div>
  </div>
  );
}

export default App;
