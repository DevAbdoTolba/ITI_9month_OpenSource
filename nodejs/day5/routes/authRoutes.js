const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validate, signupSchema, signinSchema } = require('../middleware/validate');

router.post('/signup', validate(signupSchema), authController.signup);
router.post('/signin', validate(signinSchema), authController.signin);

module.exports = router;