
const { response } = require('express');
const Events = require('../models/events.model');

//obtener eventos
const getEvents = async (req, res=response ) => {

    const events = await Events.find();

    res.status(200).json({
        ok:true,
        events
    })
}

//crear evento
const createEvents = async ( req, res=response ) => {
    
    const { 

        nombre,
        eventPlanerId,
        fecha,
        guests,
        chefs,
        recipe,
        img
    } = req.body

    try {

        //Creamos evento
        const evento = new Events( req.body );
        evento.eventPlanerId = req.uid;

        //Guardamos evento
        await evento.save();

        res.status(200).json({
            ok:true,
            msg:"Evento creado con éxito"
        });
        
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok:false,
            msg:"Error al crear el evento"
        })
        
    }
}

const updateEvent = async (req, res, next) => {

    const uid = req.params.id

    try {
        
        const eventoBD = await Events.findById(uid);

        if (!eventoBD) {
            return req.status( 404 ).json({
                ok:false,
                msg: "Evento no encontrado"
            });   
        };

        //Actualizamos usuario
        const campos = req.body;

        const eventsUpdate = await Events.findByIdAndUpdate( uid, campos, { new: true});
        
        res.status(200).json({
            ok: true,
            eventoBD
        });

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg:"Error al modificar el evento"
        })
        
    }

}

module.exports = 
{
    getEvents,
    createEvents,
    updateEvent
}