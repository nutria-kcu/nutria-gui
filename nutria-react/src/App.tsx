import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import SlidableSet from './components/SlidableSet';

function App() {
  const test = (value: number) => {
    console.log("d" + value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SlidableSet/>        
      </header>
    </div>
  );
}

export default App;
