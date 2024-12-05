const express = require ('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const router = new express.Router()

// register - post 
router.post('/register',userController.registerController)
// login -post
router.post('/login',userController.loginController)
// add-project
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectController)


module.exports= router