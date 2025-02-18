import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';


let mainWindow: BrowserWindow | null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const startURL = 'http://localhost:3000'
  // mainWindow.loadFile('index.html');
  mainWindow.removeMenu(); // windows: remove menu bar
  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
    
  });
}

app.on('ready', createWindow);

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
