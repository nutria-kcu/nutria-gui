import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import SlidableSet, { ArmorSlider, AmmoSlider } from './components/SlidableSet';
import RecoilButton from './components/RecoilButton'

function App() {
  const test = (value: number) => {
    console.log("d" + value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SlidableSet/>
        <ArmorSlider/>          
        <AmmoSlider/>
        <RecoilButton/>
      </header>
    </div>
  );
}

export default App;
