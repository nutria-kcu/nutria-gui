/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import nutria from './assets/nutria.png';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import LoadView from './components/LoadView/LoadView';
import CompletionView from './components/CompletionView/CompletionView';
import EasterButton from './components/Button/EasterButton';
import { Button } from '@heroui/react';


function App() {
  const [hpInput, setHpInput] = useState('');
  const [ammoInput, setAmmoInput] = useState('');
  const [armorInput, setArmorInput] = useState('');
  const [recoilOption, setRecoilOption] = useState('');
  const [acStatus, setAcStatus] = useState(false);

  const [isActivated, setIsActivated] = useState<boolean>(false);
  const { ipcRenderer } = window.require ? window.require("electron") : { ipcRenderer: null };

  const handleHpHack = async (hpInput: number) => {
    await ipcRenderer?.invoke('callHpHack', hpInput)
  };

  const handleAmmoHack = async (ammoInput: number) => {
    await ipcRenderer?.invoke('callAmmoHack', ammoInput)
  };

  const handleArmorHack = async (armorInput: number) => {
    await ipcRenderer?.invoke('callArmorHack', armorInput)
  };

  const handleRecoilHack = async (recoilOption: number) => {
    await ipcRenderer?.invoke('callRecoilHack', recoilOption)
  };

  const handleSendMSG = async (cmd: number, option: number) => {
    await ipcRenderer?.invoke('sendMessage', cmd, option)
  };

  const handleCheckAC = async () => {
    if(ipcRenderer) {
      return await ipcRenderer?.invoke('checkAC')
    }
  }

  const setHP = (hp: number) => {
    console.log("setHP " + hp);
    handleHpHack(hp);
  }
  const setAmmo = (ammo: number) => {
    console.log("setAmmo " + ammo);
    handleAmmoHack(ammo)
  }
  const setAmmor = (ammor: number) => {
    console.log("setAmmor " + ammor);
    handleArmorHack(ammor)
  }
  const setRecoil = (activate: number) => {
    console.log("setRecoid " + activate);
    handleRecoilHack(activate)
  }

  const sendMSG = (cmd: number, option: number) => {
    console.log("test");
    handleSendMSG(cmd, option);
  }

  useEffect(() => {
    if (!isActivated) {
      const intervalId = setInterval(async () => {
        const result = await handleCheckAC()
        console.log(result)
        setIsActivated(result);
      }, 3000);

      return () => clearInterval(intervalId);
    } else {
      const intervalId = setInterval(async () => {
        const result = await handleCheckAC()
        setIsActivated(result);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isActivated]);

  const sliderConfigs = [
    { label: "HP", min: 100, max: 300, color: "primary" as ColorType, onPress: setHP },
    { label: "Ammo", min: 20, max: 200, color: "secondary" as ColorType, onPress: setAmmo },
    { label: "Armor", min: 0, max: 50, color: "success" as ColorType, onPress: setAmmor },
  ];

  const EasterConfig = {label: "HP", min: 100, max: 300, color: "primary" as ColorType, onPress: sendMSG }

  const toggleConfigs = [
    { onSet: setRecoil }
  ]

  return (
    <div className="flex items-center justify-center h-screen App-header">
      <div className="flex w-4/5  justify-center gap-12 py-8"> {/* Ensure full width and horizontal centering */}
        <div className="w-1/4 h-full flex flex-col justify-center items-center"> {/* Image section with vertical stacking */}
          <img src={nutria} className="App-logo" alt="logo" />
          {isActivated ? <CompletionView /> : <LoadView />}
        </div>
        <div className="w-3/4 h-full flex justify-center items-center"> {/* Main content */}
          <MainPage slider={sliderConfigs} toggle={toggleConfigs} />
        </div>
      </div>
      <EasterButton />
      <Button onPress={() => {sendMSG(10,10)}}>
        test
      </Button>
      <Button onPress={() => {sendMSG(0,10)}}>
        test
      </Button>
    </div>
  );
}

export default App;


