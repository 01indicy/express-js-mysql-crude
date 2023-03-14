const sql = require("../database/config");
const modal = () => {}

modal.registerUser = async (user,result) => {
    const sql = require('../database/config')
    sql.query('SELECT * FROM users WHERE email = ?',[user.email], (err_, result_, fields) => {
        if(result_.length > 0){
            if (err_) throw err_.message
            result(null,{msg:"email address already used",email:user.email})
        }else{
            sql.query('INSERT INTO users (username,email,password) VALUES (?,?,?)',[user.username,user.email,user.password],(err,res) => {
                try{
                    result(null,{id:res.insertId,...user})
                }catch (e) {
                    console.log('error ... '+e.message)
                }
            })
        }
    })
}

modal.getAllUsers = (result) => {
    const sql = require('../database/config')
    sql.query('SELECT * FROM users',[],(err,fields) => {
        if(err) throw err
        result(null,fields)
    })
}

modal.getSingleUser = (userID,result) => {
    const sql = require('../database/config')
    sql.query('SELECT * FROM users WHERE id = ?',[userID], (err_, result_, fields) => {
        if(err_) throw err_
        result(null,result_)
    })
}

modal.updateSingleUserDetails = (user,result) => {
    const sql = require('../database/config')
    const { id,username,email } = user;
    sql.query('SELECT * FROM users WHERE id = ?',[id], (err_, result_, fields) => {
        if(result_.length > 0){
            sql.query('UPDATE users SET username = ?,email = ? WHERE id = ?',[username,email,id],(error,results__) => {
                if(error) throw error
                result(null,{id:id,msg:"user updated successful"})
            })
        }else{
            result(null,{msg:`user with ${id} not found`})
        }
    })
}

modal.deleteUser = (userID,result) => {
    const sql = require('../database/config')
    sql.query('SELECT * FROM users WHERE id = ?',[userID], (err_, result_, fields) => {
        if(result_.length > 0){
            sql.query('DELETE FROM users WHERE id = ? ',[userID],(error,res) => {
                if (error) throw error
                result(null, {msg:`user with id ${userID} is deleted`
            })
            })
        }else{
            result(null,{msg:`user with id ${userID} not found`})
        }
    })
}

module.exports = modal