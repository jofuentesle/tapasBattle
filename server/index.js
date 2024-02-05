const express = require('express');
//crear servidor
const app = express();

//Rutas

app.get( '/', (req, res) => {

    res.json({
        ok:true,
        msg: "Hola mundo"
    })

});

app.listen(3000, ()=> {
    console.log('Server corriendo en puerto ' + 3000);
})