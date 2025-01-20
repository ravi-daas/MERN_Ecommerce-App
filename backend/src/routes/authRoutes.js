const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');
const { validateSignup, handleValidationErrors } = require('../middlewares/validators');

// router.post('/signup', (req, res, next) => {
//     try {
//         console.log('6 - node js backend');
//         res.json({ msg: 'Hello from our server!' });
//     } catch (error) {
//         next(error);
//     }
// });

// router.post('/signup', (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         console.log(req.body);

//         console.log('Email:', email, 'Password:', password);
//         res.json({ msg: 'User data received!' });
//     } catch (error) {
//         next(error);
//     }
// });

// POST /api/signup
// router.post('/signup', signup);

// POST /api/signup
router.post('/signup', validateSignup, handleValidationErrors, signup);

module.exports = router;