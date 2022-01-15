var express = require('express');
const { createUser, getAllUser } = require('../Controllers/userController');
const { isAuthenticated } = require('../Middleware/auth');
const router = express.Router();

router.route("/getAllData").get(isAuthenticated, getAllUser)
router.route("/register").post(createUser)

module.exports = router;


// router.route("/logout")
// router.route("/updateData").put().post()
// router.route("/login").post(registerCustomers)