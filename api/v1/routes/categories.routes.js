const { Router }     = require('express')
const categoryController = require('../../../controllers/categoryController')

// Router para poder usar las peticiones HTTP
const router = Router()

// Rutas
router.get("/", categoryController.getAllCategories)
router.get("/:categoryId", categoryController.getOneCategory)
router.post("/", categoryController.createCategory)
router.put("/:categoryId", categoryController.updateCategory)
router.delete("/:categoryId", categoryController.deleteCategory)

// Exportar módulos
module.exports = router