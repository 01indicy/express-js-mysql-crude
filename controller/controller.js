const controller = () => { }

controller.createNewUser = (req,res) => { res.send({msg:'create new user from controller'}) }
controller.getAllUsers = (req,res) => { res.send({msg:'fetch all users from controller'}) }
controller.getSingleUser = (req,res) => { res.send({msg:'get single user from controller'}) }
controller.updateUser = (req,res) => { res.send({msg:'update user from controller'}) }
controller.deleteUser = (req,res) => { res.send({msg:'remove user from controller'}) }

module.exports = controller