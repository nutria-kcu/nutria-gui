import React, { useEffect, useState } from 'react';
import nutria from './assets/nutria.png';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import LoadView from './components/LoadView/LoadView';
import CompletionView from './components/CompletionView/CompletionView';
import EasterButton from './components/Button/EasterButton';

function App() {

  const [isActivated, setIsActivated] = useState<boolean>(false);

  const detectAC = () => {
    console.log("detectAC");
  }

  const setHP = (hp: number) => {
    console.log("setHP "+ hp);
  }
  const setAmmo = (ammo: number) => {
    console.log("setAmmo "+ ammo);
  }
  const setAmmor = (ammor: number) => {
    console.log("setAmmor "+ ammor);
  }
  const setRecoil = (activate: number) => {
    console.log("setRecoid " + activate);
  }

  useEffect(() => {
    if (!isActivated) {
      const intervalId = setInterval(() => {
        detectAC();
      }, 8000);

      return () => clearInterval(intervalId);
    } else {
      const intervalId = setInterval(() => {
        detectAC();
      }, 8000);

      return () => clearInterval(intervalId);
    }
  }, [isActivated]);

  const sliderConfigs = [
    { label: "HP", min: 100, max: 300, color: "primary" as ColorType, onPress: setHP },
    { label: "Ammo", min: 20, max: 200, color: "secondary" as ColorType, onPress: setAmmo },
    { label: "Armor", min: 0, max: 50, color: "success" as ColorType, onPress: setAmmor},
  ];

  const toggleConfigs = [
    {onSet: setRecoil}
  ]

  return (
    <div className="flex items-center justify-center h-screen App-header">
      <div className="flex w-4/5  justify-center gap-12"> {/* Ensure full width and horizontal centering */}
        <div className="w-1/4 h-full flex flex-col justify-center items-center"> {/* Image section with vertical stacking */}
          <img src={nutria} className="App-logo" alt="logo" />
          {isActivated ? <CompletionView /> : <LoadView />}
        </div>
        <div className="w-3/4 h-full flex justify-center items-center"> {/* Main content */}
          <MainPage slider={sliderConfigs} toggle={toggleConfigs} />
        </div>
      </div>
      <EasterButton/>
    </div>
  );
}

export default App;


