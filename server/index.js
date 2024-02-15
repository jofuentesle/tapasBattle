require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config');

//crear servidor
const app = express();

//configurar CORS
app.use(cors());

//lectura del body
app.use(express.json())

//Base de datos
dbConnection();

app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));
app.use('/api/recipe', require('./routes/recipe.routes'));
app.use('/api/events', require('./routes/events.routes'))
app.use('/api/vote', require('./routes/vote.routes'))


app.listen( process.env.PORT, ()=> {
    console.log('Server corriendo en puerto ' + process.env.PORT);
})