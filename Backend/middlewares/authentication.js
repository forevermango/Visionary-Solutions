const jwt = require('jsonwebtoken');
require('dotenv').config();


// Middleware function to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] ;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  

    jwt.verify(token, process.env.SECRETKEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;

        next();
    });
  };
  