import { remote } from "electron";
import { CONSTANTS } from "./../constants";
import * as path from "path";

export default class Navigator {
    public static push(route: string) {
        const mainWindow = remote.getCurrentWindow();
        mainWindow.loadFile(path.join(CONSTANTS.PAGES, route));
    }
}
