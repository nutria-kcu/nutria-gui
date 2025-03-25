import { contextBridge, ipcRenderer } from 'electron/renderer';

const preloadInterface = 'electron';

contextBridge.exposeInMainWorld(
    preloadInterface, {
        callHpHack: (input: number) => ipcRenderer.invoke('callHpHack', input),
        callAmmoHack: (input: number) => ipcRenderer.invoke('callAmmoHack', input),
        callArmorHack: (input: number) => ipcRenderer.invoke('callArmorHack', input),
        callRecoilHack: (option: number) => ipcRenderer.invoke('callRecoilHack', option),
        checkAC: () => ipcRenderer.invoke('checkAC'),
        sendMessage: (cmd: number, option: number) => ipcRenderer.invoke('sendMessage',cmd,option)
    }
);