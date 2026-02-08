const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.token;
    if (!authHeader) {
      return res.status(401).json({ message: 'Token header missing' });
    }

    const token = authHeader;
    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }
    console.log(token);
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = { userId: decoded.userId }; 
    console.log("BEFORE NEXT");

    next();
    console.log("AFTER NEXT");

  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};