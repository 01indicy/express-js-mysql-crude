const router = require('express').Router()
const controller = require('../controller/controller')

router.get('/',(req, res) => { res.send({msg:'default route'}) })
router.post('/createUser',controller.createNewUser)
router.get('/getUsers',controller.getAllUsers)
router.get('/getUser/:id',controller.getSingleUser)
router.patch('/updateUser',controller.updateUser)
router.delete('/deleteUser/:id',controller.deleteUser)

module.exports = router