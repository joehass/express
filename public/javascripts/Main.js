import {Websocket} from "./websocket/websocket.js";

export class Main {

    constructor(){
        this.websocket =  Websocket.getInstance();
        this.websocket.myConnection();
        this.init();
    }

    init(){
        this.websocket.sendMsg();
    }
}