const router = require('express').Router()

router.get('/',(req, res) => { console.log('default route') })
router.post('/createUser',(req, res) => { res.send({msg:'create new user'}) })
router.get('/getAllUsers',(req, res) => { res.send({msg: 'get all users'}) })
router.get('/getAllUsers:id',(req, res) => { res.send({msg:'get single user'}) })
router.put('/getAllUsers:id',(req, res) => { res.send({msg:'update user'}) })
router.delete('/getAllUsers:id',(req, res) => { res.send({msg:'delete user'}) })

module.exports = router