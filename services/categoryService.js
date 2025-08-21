const db = require('../models')

// Métodos para el servicio de peticiones HTTP

// GET ALL
const getAllCategories = async () => {
    try {
        let categories = await db.Category.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        return categories
    } catch (error) {
        return error.message || "Fallo al traer todas las categorias"
    }
}

// GET ONE
const getOneCategory = async (id) => {
    try {
        let category = await db.Category.findByPk(id)
        return category
    } catch (error) {
        return error.message || "Fallo al traer la categoría"
    }
}

// POST
const createCategory = async (name, description, image) => {
    try {
        let newCategory = await db.Category.create({
            name,
            description,
            image
        })
        return newCategory
    } catch (error) {
        return error.message || "La categoría no pudo ser creada"
    }
}

// PUT
const updateCategory = async (id, name, description, image) => {
    try {
        let updatedCategory = await db.Category.update({
            name, 
            description, 
            image
        }, {
            where: {
                id,
            }
        })
        return updatedCategory
    } catch (error) {
        return error.message || "La categoría no pudo ser actualizada"
    }
}

// DELETE
const deleteCategory = async (id) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where: {
                id,
            }
        })
        return deletedCategory
    } catch (error) {
        return error.message || "La categoría no pudo ser eliminada"
    }
}

// Exportación de módulos
module.exports = {
    getAllCategories, 
    getOneCategory, 
    createCategory, 
    updateCategory, 
    deleteCategory
}
