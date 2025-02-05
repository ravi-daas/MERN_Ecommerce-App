const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const token = req.cookies.token;

    if (token) {
        console.log("Token received:", token);
    } else {
        console.log("No token found");
    }

    // console.log(req.headers);

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ errors: [{ path: 'general', msg: 'User Not exists' }] });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ errors: [{ path: 'general', msg: 'Invalid credentials' }] });
        }

        const SECRET_KEY = process.env.SECRET_KEY;

        // console.log(SECRET_KEY);

        const role = email === 'ravi@rao.com' ? 'admin' : 'user';

        // console.log(role);

        const token = jwt.sign(
            { email: existingUser.email, role },
            SECRET_KEY,
            { expiresIn: '1h' } // Token expiration time
        );

        // res.status(200).json({
        //     message: 'User Logged In Successfully',
        //     token: 'token',
        //     user: { email: existingUser.email }
        // });

        // console.log(token);

        res.cookie("token", token, {
            httpOnly: true,  // Prevents JavaScript access (XSS protection)
            secure: process.env.NODE_ENV === "production",  // Use secure cookies in production
            sameSite: "Strict",  // Prevents CSRF attacks
            maxAge: 60 * 60 * 1000  // 1 hour expiration
        });

        res.status(200).json({
            message: 'User Logged In Successfully',
            user: { email: existingUser.email, role }
            // role,
        });

    } catch (err) {
        next(err);
    }
};



const logout = async (req, res, next) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            expires: new Date(0),  // Expire immediately
        });
        res.status(200).json({ message: "Logged out successfully" });

    } catch (err) {
        next(err);
    }
};


// const checkUser = async (req, res, next) => {

//     try {

//         if (req.user) {
//             return res.status(200).json({ message: 'verified user' });
//         }


//     } catch (err) {
//         next(err);
//     }
// };




// module.exports = { signup, login, checkUser, logout };
module.exports = { signup, login, logout };
