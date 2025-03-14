// import { ipcMain } from 'electron';

// const koffi = require('koffi');

// // Load the DLL (replace with your actual DLL path)
// const myDLL = koffi.load('C:\\Users\\roh51\\Desktop\\projects\\nutria-gui\\bin\\kcu-hack.dll');

// // Define the functions from the DLL
// const dll_hp_hack = myDLL.func('__stdcall', 'dll_hp_hack', 'void', ['int']);
// const dll_recoil_hack = myDLL.func('__stdcall', 'dll_recoil_hack', 'void', ['int']);
// const dll_rifle_ammo_hack = myDLL.func('__stdcall', 'dll_rifle_ammo_hack', 'void', ['int']);
// const dll_armor_hack = myDLL.func('__stdcall', 'dll_armor_hack', 'void', ['int']);
// const dll_check_ac = myDLL.func('__stdcall', 'dll_check_ac', 'bool', []);

// // Listen for calls from the renderer process (React)
// ipcMain.handle('callHpHack', (event, input) => {
//   dll_hp_hack(input); // Call the DLL function
//   console.log('HP Hack called with input:', input);
//   return `HP Hack called with input: ${input}`; // Return the result to React
// });

// ipcMain.handle('callAmmoHack', (event, input) => {
//   dll_rifle_ammo_hack(input); // Call the DLL function
//   console.log('Ammo Hack called with input:', input);
//   return `Ammo Hack called with input: ${input}`;
// });

// ipcMain.handle('callArmorHack', (event, input) => {
//   dll_armor_hack(input); // Call the DLL function
//   console.log('Armor Hack called with input:', input);
//   return `Armor Hack called with input: ${input}`;
// });

// ipcMain.handle('callRecoilHack', (event, option) => {
//   dll_recoil_hack(option);  // Call the DLL function
//   console.log('Recoil Hack called with option:', option);
//   return `Recoil Hack called with option: ${option}`;
// });

// ipcMain.handle('checkAC', (event) => {
//   const result = dll_check_ac(); // Call the DLL function
//   console.log('AC Check Result:', result);
//   return result; // Return the result to React
// });

// ipcMain.handle('callHpHack', (event, input) => {
//   dll_hp_hack(input); // Call the DLL function
//   console.log('HP Hack called with input:', input);
//   return `HP Hack called with input: ${input}`; // Return the result to React
// });