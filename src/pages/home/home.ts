import Application from "./../../core/application";
import State from "./../../core/state";
import Navigator from "./../../core/navigator";

export default class Home extends State {
    private socket: WebSocket;

    private btnConnect = document.getElementById("btnConnect");
    private btnDesconnect = document.getElementById("btnDesconnect");
    private btnPrint = document.getElementById("btnPrint");

    protected onLoad() {
        console.log("load HomePage");
        this.btnConnect.addEventListener("click", () => {
            this.createSocket();
        });
        this.btnDesconnect.addEventListener("click", () => {
            this.destroySocket();
        });
        this.btnPrint.addEventListener("click", () => {
            Navigator.push("detail/detail.html");
            this.socket.send(JSON.stringify({
                action: "print",
                data: {
                    fileName: "C:\\Users\\LTCloud\\Documents\\java\\Printer\\test.txt",
                    printerName: "Microsoft Print to PDF",
                },
            }));
        });
    }

    private createSocket() {
        this.socket = new WebSocket("ws://localhost:8080");
        this.socket.addEventListener("open", () => {
            console.log("On open...");
        });
        this.socket.addEventListener("error", () => {
            console.log("On error...");
        });
        this.socket.addEventListener("message", (evt) => {
            console.log("On message...");
            console.log(JSON.parse(evt.data));
        });
        this.socket.addEventListener("close", () => {
            console.log("On close...");
        });
    }

    private destroySocket() {
        this.socket.close();
        this.socket = null;
    }

}

Application.createState(new Home());
