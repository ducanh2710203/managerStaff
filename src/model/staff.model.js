const baseModel = require("./base.model")
class staff extends baseModel {
    async getAllStaff() {
        const sql = "SELECT * FROM dbtest.staff;"
        return await this.querySql(sql)
    }
    async deleteStaff(id) {
        const sql = `delete from staff where id = ${id}`
        return await this.querySql(sql)
    }
    async selectStaff(id) {
        const sql = `SELECT * FROM dbtest.staff where id = ${id}`
        return await this.querySql(sql)
    }
    async updateStaff(id,name,age,position,wage) {
        const sql = `UPDATE dbtest.staff
SET name = '${name}', age = ${age}, position =' ${position}' , wage =' ${wage}'
WHERE id = ${id};`
        return await this.querySql(sql)
    }
    async addStaff(name,age,wage,position) {
        const sql = `insert into staff (name,age,wage,position)
value ('${name}',${age},${wage},"${position}");`
        return await this.querySql(sql)
    }
    
}
module.exports = new staff