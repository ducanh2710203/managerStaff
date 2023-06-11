const staff = require('../model/staff.model')
const express = require('express')

class homeController {
    static async getHomePage(req, res) {
        try {
            let result = await staff.getAllStaff();
            res.render('home', {data: result})
        } catch (err) {
            console.log(err)
        }
    }

    static async deleteHomePage(req, res) {
        try {
            let id = req.params.id
            let result = await staff.deleteStaff(id)
            res.redirect("/")
        }catch (err) {
            console.log(err.message)
        }
    }
    static async getEditHomePage(req, res) {
        try {
            let id = req.params.id
            let result = await staff.selectStaff(id)
            res.render(`edit`,{staff:result[0]})
        }catch (err) {
            console.log(err.message)
        }
    }
    static async postEditHomePage(req, res) {
        try {
            let id = req.params.id
            let{name, age, position,wage} = req.body
            let result = await staff.updateStaff(id,name,age,position,wage)
            res.redirect("/")
        }catch (err) {
            console.log(err.message)
        }
    }
    static async getAddPage(req, res) {
        try {
            res.render('add')
        } catch (err) {
            console.log(err)
        }
    }
    static async postAddPage(req, res) {
        try {
            let{name, age, position,wage} = req.body
            let result = await staff.addStaff(name,age,position,wage)
            res.redirect("/")
        }catch (err) {
            console.log(err.message)
        }
    }
    static async getStaff(req, res) {
        try {
            let id = req.params.id
            let result = await staff.selectStaff(id)
            res.render(`edit`,{staff:result[0]})
        }catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = homeController;