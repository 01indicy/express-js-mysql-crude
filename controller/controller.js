const controller = () => { }
const modal = require('../modal/modal')

controller.createNewUser = (req,res) => {
    modal.registerUser(req.body, (err, data) => {
        if (err) console.log(err)
        res.send(data)
    }).catch((err) => {
        console.log(err)
    })
}

controller.getAllUsers = (req,res) => {
    modal.getAllUsers((err,data) => {
        if(err) throw err
        res.send(data)
    })
}
controller.getSingleUser = (req,res) => {
    modal.getSingleUser(req.params.id,(err,data) => {
        if(err) throw err
        if(data.length > 0){
            res.send(data)
        }else{
            res.send({msg:`user with ${req.params.id} not found`})
        }
    })
}

controller.updateUser = (req,res) => {
    modal.updateSingleUserDetails(req.body,(err,data) => {
        if(err) throw err
        res.send(data)
    })
}
controller.deleteUser = (req,res) => {
    modal.deleteUser(req.params.id,(err,data) => {
        if (err) throw err
        res.send(data)
    })
}

module.exports = controller