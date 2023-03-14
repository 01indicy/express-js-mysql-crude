const router = require('express').Router()
const controller = require('../controller/controller')

router.get('/',(req, res) => { console.log('default route') })
router.post('/createUser',controller.createNewUser)
router.get('/getAllUsers',controller.getAllUsers)
router.get('/getUser:id',controller.getSingleUser)
router.put('/updateUser:id',controller.updateUser)
router.delete('/deleteUser:id',controller.deleteUser)

module.exports = router