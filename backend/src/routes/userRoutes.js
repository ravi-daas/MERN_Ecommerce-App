const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        console.log('6 - node js backend');
        res.json({ msg: 'Hello from our server!' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;


// app.listen(8080, () => {
//     console.log('server listening on port 8080');
// })
