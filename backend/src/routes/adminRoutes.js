const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken');

const fetchProducts = async (req, res, next) => {
    // const { name, email, password } = req.body;

    try {

        if (req.user.role == 'admin' && req.user.email == 'ravi@rao.com') {
            console.log('11 - fecthProducts');
            return res.status(200).json({ message: 'Ok' });
        } else {
            return res.status(401).json({ message: 'Not Admin' });
        }
        // Check if user already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ errors: [{ path: 'general', msg: 'User already exists' }] });
        // }

        // // Create new user
        // const user = new User({ name, email, password });
        // await user.save();

        // res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        next(err);
    }
};

router.get('/admin/products', verifyToken, fetchProducts);

module.exports = router;