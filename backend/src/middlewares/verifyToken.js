// verifyToken.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const SECRET_KEY = process.env.SECRET_KEY;
    // console.log(SECRET_KEY);
    console.log("verifyToken Started");
    const token = req.cookies.token;  // Extract token from cookies
    // console.log(token);


    if (!token) {
        console.log('No token Provided');
        return res.status(401).json({ message: 'No token provided' });
    }
    
    // Verify the token
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log('Invalid or expired token');
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        console.log('Token Verified');

        // Attach the decoded data (e.g., user) to the request object for further use
        req.user = decoded;
        next();  // Proceed to the next route or middleware
    });
};

module.exports = { verifyToken };
