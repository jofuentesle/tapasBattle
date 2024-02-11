
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

    res.status(200).json({
        ok:true,
        msg:"events create"
    })
}

module.exports = 
{
    getEvents,
    createEvents
}