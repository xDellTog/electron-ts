import State from "../../core/state";
import Application from "./../../core/application";

export default class Detail extends State {
    private btnDetalhes = document.getElementById("btnDetalhes");

    protected onLoad() {
        console.log("load Detail");
        this.btnDetalhes.addEventListener("click", () => {
            console.log("Detalhes minuciosos! kk");
        });
    }

}

Application.createState(new Detail());
