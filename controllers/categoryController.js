// Enlace al servicio
const categoryService = require('../services/categoryService')

// Métodos para peticiones HTTP

// GET ALL
const getAllCategories = async(request, response) => {
    const allCategories = await categoryService.getAllCategories()
    if(allCategories)
        response.status(200).send( { status: "Ok", data: allCategories } )
    else
        response.status(400).send( { status: "Failed", data: allCategories } )
}

// GET ONE
const getOneCategory = async(request, response) => {
    let id              = request.params.categoryId
    const category      = await categoryService.getOneCategory(id)
    if(category)
        response.status(200).send( { status: "Ok", data: category } )
    else
        response.status(400).send( { status: "Failed", data: category } )
}

// POST
const createCategory = async(request, response) => {
    const { body }        = request
    const createdCategory = await categoryService.createCategory(body.name, body.description, body.image)
    if(createdCategory)
        response.status(201).send( { status: "Ok", data: createdCategory } )
    else
        response.status(400).send( { status: "Failed", data: createdCategory } )
}

// PUT
const updateCategory = async(request, response) => {
    let id                           = request.params.categoryId
    let { name, description, image } = request.body
    const updatedCategory            = await categoryService.updateCategory(id, name, description, image)
    if(updatedCategory)
        response.status(200).send( { status: "Ok", data: updatedCategory } )
    else
        response.status(400).send( { status: "Failed", data: updatedCategory } )
}

// DELETE
const deleteCategory = async(request, response) => {
    let id            = request.params.categoryId
    const deletedCategory = await categoryService.deleteCategory(id)
    if(deletedCategory)
        response.status(200).send( { status: "Ok", data: deletedCategory } )
    else
        response.status(400).send( { status: "Failed", data: deletedCategory } )
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory
}