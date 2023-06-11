const database = require('./database');
class BaseModel{
    constructor(){
        this.comm = database.connect();
    }
    querySql(sql){
        return new Promise((resolve, reject) =>{
            this.comm.query(sql,(err,result) =>{
                if (err) return reject(err.message);
                return resolve(result);
            })
        })
    }
}
module.exports = BaseModel;