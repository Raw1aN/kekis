const { Router } = require("express");
const {check} = require("express-validator");
const router = Router();
const authController = require('../controllers/authController')
const {verifyAdmin} = require('../../middleware/authMiddleware')
const {verifyToken} = require('../../middleware/authMiddleware')

router.post('/registration', [
    check('email', "Uncorrect email").isEmail(),
    check('password', 'Password must be longer than 7 and shorter than 12').isLength({min: 7, max: 12}),
],authController.registration)

router.post('/login',authController.login)

router.post('/block',verifyAdmin,authController.blockUser)

router.post('/unblock',verifyAdmin,authController.unblockUser)

router.get('/auth',verifyToken,authController.Auth)

module.exports = router;