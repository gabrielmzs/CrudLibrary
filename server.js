const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')


const app = express()
app.set('port', process.env.PORT || 9000)
const dboptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gabriel123',
    database: 'library'
}

//--------------------------MIDDLEWARES-----------------------

app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json())
app.use(cors())


//-----------------------ROUTES------------------------------

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.use('/api', routes)


//---------------------SERVER RUNNING ------------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port 8800', app.get('port'))
})
