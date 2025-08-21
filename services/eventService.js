const db = require('../models')

// Métodos para el servicio de peticiones HTTP

// GET ALL
const getAllEvents = async () => {
    try {
        let events = await db.Event.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: {
                model: db.Category,
                required: true,
                as: 'Category',
                attributes: ['id', 'name', 'description']
            }
        })
        return events
    } catch (error) {
        return error.message || "Fallo al traer todos los eventos"
    }
}

// GET ONE
const getOneEvent = async (id) => {
    try {
        let event = await db.Event.findByPk(id)
        return event
    } catch (error) {
        return error.message || "Fallo al traer el evento"
    }
}

// POST
const createEvent = async (name, description, startDate, endDate, categoryId, state, maxCapacity) => {
    try {
        let newEvent = await db.Event.create({
            name,
            description,
            startDate,
            endDate,
            categoryId,
            state,
            maxCapacity
        })
        return newEvent
    } catch (error) {
        return error.message || "El evento no pudo ser creado"
    }
}

// PUT
const updateEvent = async (id, name, description, startDate, endDate, categoryId, state, maxCapacity) => {
    try {
        let updatedEvent = await db.Event.update({
            name,
            description,
            startDate,
            endDate,
            categoryId,
            state,
            maxCapacity
        }, {
            where: {
                id,
            }
        })
        return updatedEvent
    } catch (error) {
        return error.message || "El evento no pudo ser actualizado"
    }
}

// DELETE
const deleteEvent = async (id) => {
    try {
        const deletedEvent = await db.Event.destroy({
            where: {
                id,
            }
        })
        return deletedEvent
    } catch (error) {
        return error.message || "El evento no pudo ser eliminado"
    }
}

// Exportación de módulos
module.exports = {
    getAllEvents, 
    getOneEvent, 
    createEvent, 
    updateEvent, 
    deleteEvent
}
