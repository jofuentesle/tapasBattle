
const { response } = require('express');
const Events = require('../models/events.model');

//obtener eventos
const getEvents = async (req, res=response ) => {

    const events = await Events.find();

    res.status(200).json({
        events
    })
}

//obtener evento por id
const getEventById = async (req, res, next) => {

    const uid = req.params.id

    try {
        
        const eventoBD = await Events.findById(uid);
        

        if (!eventoBD) {
            return req.status( 404 ).json({
                ok:false,
                msg: "Evento no encontrado"
            });   
        };

        const eventsById = await Events.findById( uid );
        
        console.log("eventes" );
        res.status(200).json({
            ok: true,
            eventsById
        });

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg:"Error al obtener el evento"
        })
        
    }
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
        const evento = new Events( req.body, req.uid );
        evento.eventPlanerId = req.uid;

        //verificamos al generar events

        //Guardamos evento
        await evento.save();

        res.status(200).json({
            ok:true,
            msg:"Evento creado con éxito",
            evento
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

        if(eventoBD.eventPlanerId!==req.uid) {
            return res.status(401).json({
                ok: false,
                msg:"No tienes privilegios para modificar este evento"
            });
        }

        //Actualizamos evento
        const campos = req.body;

        const eventsUpdate = await Events.findByIdAndUpdate( uid, campos, { new: true});
        
        console.log("eventes" );
        res.status(200).json({
            ok: true,
            eventsUpdate
        });

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg:"Error al modificar el evento"
        })
        
    }
}

const deleteEvent = async (req, res, next) => {

    const uid = req.params.id

    try {

        //buscamos evento en BBDD
        const eventoBD = await Events.findById(uid);

        if (!eventoBD) {
            return req.status( 404 ).json({
                ok:false,
                msg: "Evento no encontrado"
            });   
        }

        if(eventoBD.eventPlanerId!==req.uid) {
            return res.status(401).json({
                ok: false,
                msg:"No tienes privilegios para modificar este evento"
            });
        }

        const deleteEvent = await Events.findOneAndDelete(eventoBD._id)
        res.status(200).json({
            ok: true,
            msg: "Mensaje borrado"
        })

        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
                ok:false,
                msg:"Error al borrar el evento"
            })
    }
}    


module.exports = 
{
    getEvents,
    getEventById, 
    createEvents,
    updateEvent,
    deleteEvent 
    
}