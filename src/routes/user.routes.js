const express = require('express')
const router = express.Router()
const userController =   require('../controllers/user.controller');

// Retrieve all users
router.get('/', userController.findAll);

// Create a new user
router.post('/', userController.create);

// Register a new user
// Retrieve a single user with id
//router.post('/register', userController.register); 

//Register handle
router.post('/register', userController.register);

router.post('/login', userController.authenticate);

// Retrieve a single user with id
router.get('/:id', userController.findById);

module.exports = router