const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
require('dotenv').config({path:'.env'})
const port = process.env.PORT;

app.use(cors())
app.use((req, res, next) => { next() })
app.use('/',require('./routes/routes'))
app.listen(port,() => { console.log(`server is running on port ${port}`) })