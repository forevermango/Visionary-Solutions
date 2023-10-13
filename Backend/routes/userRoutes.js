const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// routes using prefix "/users"
router.get('/',  (req, res) =>  userController.getAllUsers(req,res)); // get all users
router.get('/:userID',  (req, res) =>  userController.getUser(req,res)); // get a specific user
router.post('/',  (req, res) =>  userController.addUser(req,res)); // create new user
router.delete('/:userID',  (req, res) =>  userController.deleteUser(req,res)); // delete a user
router.put('/:userID',  (req, res) =>  userController.updateUser(req,res)); // update a user

module.exports = router;
