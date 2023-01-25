const express = require("express");
const userController = require("../controller/user.controller");
const verifyToken = require("../middleware/verifyToken");
// const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
// router.get('/:email', userController.gettingUserAdmin)
// router.put('/user/:id', userController.userChecked)

router.post('/signup', userController.signup)
router.post('/login', userController.login)
// router.get('/me', verifyToken, userController.getMe)
router.get('/:email', userController.getMe)
module.exports = router;