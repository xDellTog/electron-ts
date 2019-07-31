import { BrowserWindow } from "electron";
import * as path from "path";
import { CONSTANTS } from "./constants";

export default class Main {

  public static runApp(app: Electron.App) {
    Main.application = app;
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
  }

  private static mainWindow: Electron.BrowserWindow;
  private static application: Electron.App;

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static onClose() {
    Main.mainWindow = null;
  }

  private static onReady() {
    Main.mainWindow = new BrowserWindow({ width: 800, height: 600 });
    Main.mainWindow.loadFile(path.join(CONSTANTS.PAGES, "home", "home.html"));
    Main.mainWindow.on("closed", Main.onClose);
    Main.mainWindow.webContents.openDevTools();
  }
}
