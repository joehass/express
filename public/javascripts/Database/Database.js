export class Database {

    constructor(){
        this.config = {
            user : 'sa',
            password : 'ecology',
            server : '192.168.7.107:1433',
            database : 'ecology20180518'
        }
        this.sql = require('mssql');
    }

    static getInstance(){
        if (!Database.instance){
            Database.instance = new Database();
        }
        return  Database.instance;
    }

    testConnection(){
        this.sql.connect(this.config).then(function(){
            new sql.Request().query('select * from ofID').then(function(recordset) {
                console.log(recordset);
            }).catch(function(err) {
                console.log(err);
            });
            // Stored Procedure
        }).catch(function(err) {
            console.log(err);
        });
    }
}
