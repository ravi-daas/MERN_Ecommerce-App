const express = require('express');
const router = express.Router();
const { signup, login, logout } = require('../controllers/authController');
const { validateSignup, handleValidationErrors } = require('../middlewares/validators');
// const { verifyToken } = require('../middlewares/verifyToken');

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
router.post('/login', validateSignup, handleValidationErrors, login);
router.post('/logout', logout);
// router.get('/checkUser', verifyToken, checkUser);

module.exports = router;