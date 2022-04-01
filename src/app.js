const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.set('port', process.env.PORT || 4000 )
app.use(morgan('dev'))
app.use(
    bodyParser.json({
        limit: '20mb',
        extended: true
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/api/vehiculos",require('./routes/vehiculos.routes'))
app.use("/api/vendedores",require('./routes/vendedores.routes'))
app.use("/api/clientes",require('./routes/clientes.routes'))

module.exports = app