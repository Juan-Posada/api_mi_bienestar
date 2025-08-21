// Enlace al servicio
const eventService = require('../services/eventService')

// Métodos para peticiones HTTP

// GET ALL
const getAllEvents = async(request, response) => {
    const allEvents = await eventService.getAllEvents()
    if(allEvents)
        response.status(200).send( { status: "Ok", data: allEvents } )
    else
        response.status(400).send( { status: "Failed", data: allEvents } )
}

// GET ONE
const getOneEvent = async(request, response) => {
    let id              = request.params.eventId
    const event      = await eventService.getOneEvent(id)
    if(event)
        response.status(200).send( { status: "Ok", data: event } )
    else
        response.status(400).send( { status: "Failed", data: event } )
}

// POST
const createEvent = async(request, response) => {
    const { body }        = request
    const createdEvent = await eventService.createEvent(body.name, body.description, body.startDate, body.endDate, body.categoryId, body.state, body.maxCapacity)
    if(createdEvent)
        response.status(201).send( { status: "Ok", data: createdEvent } )
    else
        response.status(400).send( { status: "Failed", data: createdEvent } )
}

// PUT
const updateEvent = async(request, response) => {
    let id                           = request.params.eventId
    let { name, description, startDate, endDate, categoryId, state, maxCapacity } = request.body
    const updatedEvent            = await eventService.updateEvent(id, name, description, startDate, endDate, categoryId, state, maxCapacity )
    if(updatedEvent)
        response.status(200).send( { status: "Ok", data: updatedEvent } )
    else
        response.status(400).send( { status: "Failed", data: updatedEvent } )
}

// DELETE
const deleteEvent = async(request, response) => {
    let id            = request.params.eventId
    const deletedEvent = await eventService.deleteEvent(id)
    if(deletedEvent)
        response.status(200).send( { status: "Ok", data: deletedEvent } )
    else
        response.status(400).send( { status: "Failed", data: deletedEvent } )
}

module.exports = {
    getAllEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent
}