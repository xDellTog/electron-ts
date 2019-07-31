export default class State {
    constructor() {
        window.addEventListener("load", () => this.onLoad());
    }

    protected onLoad() {
        console.log("onLoad");
    }
}
