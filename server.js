const express    = require('express')
const bodyParser = require('body-parser')
const morgan     = require('morgan')
const app        = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// Configuraciones
app.set('PORT', process.env.PORT || 4000)

// Se inicia el servidor en el puerto configurado
app.listen(app.get('PORT'), () => { 
    console.log(`🚀 Servidor corriendo en el PUERTO: ${app.get('PORT')}`)
})

// Rutas
app.use('/mi-bienestar/v1/categories', require('./api/v1/routes/categories.routes'))
app.use('/mi-bienestar/v1/events', require('./api/v1/routes/events.routes'))