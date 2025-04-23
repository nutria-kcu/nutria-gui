/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import nutria from './assets/nutria.png';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import LoadView from './components/LoadView/LoadView';
import CompletionView from './components/CompletionView/CompletionView';
import EasterButton from './components/Button/EasterButton';
import { Button } from '@heroui/react';
import { checkAppVersion } from './utils/VersionCheck';


function App() {
  const [aimbotDisabled, setAimbotDisabled] = useState(true);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [versionStatus, setVersionStatus] = useState<string>("");
  const { ipcRenderer } = window.require ? window.require("electron") : { ipcRenderer: null };

  const handleHpHack = async (hpInput: number) => {
    await ipcRenderer?.invoke('sendMessage', 1, hpInput)
  };

  const handleAmmoHack = async (ammoInput: number) => {
    await ipcRenderer?.invoke('sendMessage', 2, ammoInput)
  };

  const handleArmorHack = async (armorInput: number) => {
    await ipcRenderer?.invoke('sendMessage', 3, armorInput)
  };

  const handleRecoilHack = async (recoilOption: number) => {
    await ipcRenderer?.invoke('sendMessage', 4, recoilOption)
  };

  const handleSendMSG = async (cmd: number, option: number) => {
    await ipcRenderer?.invoke('sendMessage', cmd, option)
  };

  const handleESPHack = async (activate: number) => {
    activate = -1 * activate + 1;
    await ipcRenderer?.invoke('sendMessage', 5, activate)
  }

  const handleAimHack = async (option: number) => {
    await ipcRenderer?.invoke('sendMessage', 6, option)
  }

  const handleCheckAC = async () => {
    if (ipcRenderer) {
      return await ipcRenderer?.invoke('checkAC')
    }
  }

  const setHP = (hp: number) => {
    console.log("setHP " + hp);
    handleSendMSG(1,hp);
  }
  const setAmmo = (ammo: number) => {
    console.log("setAmmo " + ammo);
    handleSendMSG(2,ammo)
  }
  const setAmmor = (ammor: number) => {
    console.log("setAmmor " + ammor);
    handleSendMSG(3,ammor)
  }
  const setRecoil = (activate: number) => {
    console.log("setRecoid " + activate);
    handleSendMSG(4, activate)
  }

  const sendMSG = (cmd: number, option: number) => {
    console.log("test");
    handleSendMSG(cmd, option);
  }

  const setESP = (activate: number) => {
    console.log("ESP");
    handleESPHack(activate);
  }

  const setAimHack = (option: number) => {
    console.log("AIMHACK");
    handleAimHack(option);
  }

  const toggleAimHack = () => {
    console.log("toggle")
    if (aimbotDisabled) {
      setAimbotDisabled(false);
      setAimHack(0);
    } else {
      setAimbotDisabled(true);
      setAimHack(-1);
    }
  }

  useEffect(() => {
    console.log("test");
  })

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

  useEffect(() => {
    checkAppVersion().then(result => {
      if (result.isLatest) {
        setVersionStatus('latest');
      } else {
        setVersionStatus('outdated');
      }
    }).catch((err) => {
      console.log(err)
      setVersionStatus('error');
    });
  }, [])

  const sliderConfigs = [
    { label: "HP", min: 100, max: 300, color: "primary" as ColorType, onPress: setHP },
    { label: "Ammo", min: 20, max: 200, color: "secondary" as ColorType, onPress: setAmmo },
    { label: "Armor", min: 0, max: 50, color: "success" as ColorType, onPress: setAmmor },
    { label: "AimBot", min: 0, max: 100, color: "warning" as ColorType, onPress: setAimHack, disabled: aimbotDisabled },
  ];

  const EasterConfig = { label: "HP", min: 100, max: 300, color: "primary" as ColorType, onPress: sendMSG }

  const toggleConfigs = [
    { onSet: setRecoil, title: "Enable No Recoil", subtitle: "no more recoil!" },
    { onSet: setESP, title: "Enable ESP", subtitle: "noone can hide from you" },
  ]

  return (
    <div className="flex items-center justify-center h-screen App-header">
      <div className="absolute top-4 text-sm px-4 py-2 rounded-full bg-white/10 backdrop-blur-md shadow text-white">
        {versionStatus === 'checking' && '🔄 checking version'}
        {versionStatus === 'latest' && '✅ up to date'} 
        {versionStatus === 'outdated' && '⚠️ new update available!'}
        {versionStatus === 'error' && '❌ failed to check version'}
      </div>
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


{/* <Button onPress={() => {sendMSG(10,10)}}>
        test
      </Button>
      <Button onPress={() => {sendMSG(0,10)}}>
        test 
      </Button> */}