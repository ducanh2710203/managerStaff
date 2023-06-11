const mysql = require('mysql')

class Database  {
    constructor() {
        this.host = 'localhost';
        this.port = 3306;
        this.database = "dbtest";
        this.user = "root";
        this.password = "123456";
    }

    connect() {
        return mysql.createConnection({
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.user,
            password: this.password
        })
    }
}
module.exports = new Database