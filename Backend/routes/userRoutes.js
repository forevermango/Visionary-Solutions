const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.get('/',  (req, res) =>  userController.getAllUsers(req,res));
router.get('/:userID',  (req, res) =>  userController.getUser(req,res));
router.post('/',  (req, res) =>  userController.addUser(req,res));
router.delete('/:userID',  (req, res) =>  userController.deleteUser(req,res));
router.put('/:userID',  (req, res) =>  userController.updateUser(req,res));

module.exports = router;
