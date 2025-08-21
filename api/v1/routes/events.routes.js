const { Router }     = require('express')
const eventController = require('../../../controllers/eventController')

// Router para poder usar las peticiones HTTP
const router = Router()

// Rutas
router.get("/", eventController.getAllEvents)
router.get("/:eventId", eventController.getOneEvent)
router.post("/", eventController.createEvent)
router.put("/:eventId", eventController.updateEvent)
router.delete("/:eventId", eventController.deleteEvent)

// Exportar módulos
module.exports = router