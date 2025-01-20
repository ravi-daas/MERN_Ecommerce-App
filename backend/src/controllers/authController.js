const User = require('../models/User');

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ errors: [{ path: 'general', msg: 'User already exists' }] });
        }

        // Create new user
        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        // console.error(err);
        // res.status(500).json({ message: 'Server error' });
        next(err);
    }
};

module.exports = { signup };
