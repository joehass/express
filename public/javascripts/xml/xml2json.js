export class xml2json {

    constructor(){
         this.convert = require('xml-js');
         exports.xml2json=this.xml2json(message);
    }

    static getInstance(){
        if (!xml2json.instance){
            xml2json.instance = new xml2json();
        }
        return  xml2json.instance;
    }
    xml2json(message) {
        let result1 = this.convert.xml2json(message, {compact: true, spaces: 4});
        return result1;
    }
}
