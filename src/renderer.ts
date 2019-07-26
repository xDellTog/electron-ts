let socket: WebSocket;

const btnConnect = document.getElementById("btnConnect");
const btnDesconnect = document.getElementById("btnDesconnect");
const btnPrint = document.getElementById("btnPrint");

btnConnect.addEventListener("click", () => {
    createSocket();
});

btnDesconnect.addEventListener("click", () => {
    destroySocket();
});

btnPrint.addEventListener("click", () => {
    socket.send(JSON.stringify({
        action: "print",
        data: {
            fileName: "C:\\Users\\LTCloud\\Documents\\java\\Printer\\test.txt",
            printerName: "Microsoft Print to PDF",
        },
    }));
});

function createSocket() {
    socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
        console.log("On open...");
    };
    socket.onerror = () => {
        console.log("On error...");
    };
    socket.onmessage = (evt) => {
        console.log("On message...");
        console.log(JSON.parse(evt.data));
    };
    socket.onclose = () => {
        console.log("On close...");
    };
}

function destroySocket() {
    socket.close();
    socket = null;
}
