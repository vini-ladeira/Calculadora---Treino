const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 320,
    height: 550,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
