const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const token = req.header('Authorization')?.split(' ')[1];  

   
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        
        const decoded = jwt.verify(token, 'your_secret_key'); 

        
        console.log(decoded); 

        
        req.owner_id = decoded.owner_id; 
        next(); 
    } catch (error) {
        
        console.error("Token verification error:", error);
        res.status(400).json({ message: 'Invalid token.' });
    }
};
