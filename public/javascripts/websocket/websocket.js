//websocket链接
export class Websocket {

    constructor(){
        this.W3CWebSocket = require('websocket').w3cwebsocket;
        this.client = new this.W3CWebSocket('ws://localhost:7076/ws');
    }

    static getInstance(){
        if (!Websocket.instance){
            Websocket.instance = new Websocket();
        }
        return  Websocket.instance;
    }

    myConnection(){
        this.client.onopen =() =>{
            if (this.client.readyState === this.client.OPEN){
                //第一次连接发送
                this.client.send("<open xmlns='urn:ietf:params:xml:ns:xmpp-framing' to='127.0.0.1:7070' version='1.0'/>");
            }
        };
        this.client.onclose=() =>{
        };
        this.client.onmessage=(e) =>{
            console.log(e.data);
            this.receiveIMMsg(e.data);
        }
    }

    sendMsg(){
    }

    receiveIMMsg(data){
        let parser;
        let xmlDoc;
        if (window.DOMParser)
        {
            parser=new DOMParser();
            xmlDoc=parser.parseFromString(data,"text/xml");
            parser.parse;
        }
        else // Internet Explorer
        {
            xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async="false";
            xmlDoc.loadXML(data);
        }

        // document.getElementById("title").innerHTML=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // document.getElementById("author").innerHTML=xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue;
        // document.getElementById("content").innerHTML=xmlDoc.getElementsByTagName("content")[0].childNodes[0].nodeValue;
        if (xmlDoc.getElementsByTagName('open')[0].tagName == 'open'){
            
        }
        //选择对应的验证方式
        if (xmlDoc.getElementsByTagName('mechanisms')[0].attributes[0].value == 'urn:ietf:params:xml:ns:xmpp-sasl'){

        }
    }
    run(){

    }
}