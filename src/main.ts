import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

let mainWindow: BrowserWindow | null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Set to false for security
      contextIsolation: false,  // Enable context isolation
      preload: path.join(__dirname, 'preload.js'), // Path to preload.js
    },
    icon: path.join(__dirname, '/assets/icons/win/icon-nutria.ico'),
  });
  //const startURL = 'http://localhost:3000'
  
  mainWindow.removeMenu(); // windows: remove menu bar
  //mainWindow.loadURL(startURL);
  mainWindow.loadFile(path.join(__dirname, "../nutria-react/build/index.html"));

  mainWindow.on('closed', () => {
    mainWindow = null;
    
  });
}

console.log(path.join(__dirname, "../nutria-react/build/index.html"));

import koffi from 'koffi';

// Load the DLL (replace with your actual DLL path)
const myDLL = koffi.load(path.join(__dirname, 'bin', 'kcu-hack.dll') );

// Define the functions from the DLL
const dll_hp_hack = myDLL.func('__stdcall', 'dll_hp_hack', 'void', ['int']);
const dll_recoil_hack = myDLL.func('__stdcall', 'dll_recoil_hack', 'void', ['int']);
const dll_rifle_ammo_hack = myDLL.func('__stdcall', 'dll_rifle_ammo_hack', 'void', ['int']);
const dll_armor_hack = myDLL.func('__stdcall', 'dll_armor_hack', 'void', ['int']);
const dll_check_ac = myDLL.func('__stdcall', 'dll_check_ac', 'bool', []);

// Listen for calls from the renderer process (React)

ipcMain.handle('callAmmoHack', (event, input) => {
  dll_rifle_ammo_hack(input); // Call the DLL function
  console.log('Ammo Hack called with input:', input);
  return `Ammo Hack called with input: ${input}`;
});

ipcMain.handle('callArmorHack', (event, input) => {
  dll_armor_hack(input); // Call the DLL function
  console.log('Armor Hack called with input:', input);
  return `Armor Hack called with input: ${input}`;
});

ipcMain.handle('callRecoilHack', (event, option) => {
  dll_recoil_hack(option);  // Call the DLL function
  console.log('Recoil Hack called with option:', option);
  return `Recoil Hack called with option: ${option}`;
});

ipcMain.handle('checkAC', (event) => {
  const result = dll_check_ac(); // Call the DLL function
  console.log('AC Check Result:', result);
  return result; // Return the result to React
});

app.whenReady().then(() => {
  ipcMain.handle('callHpHack', (event, input) => {
    dll_hp_hack(input);
    console.log('HP Hack called with input:', input);
    return `HP Hack called with input: ${input}`; // Return the result to React
  });
  
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});