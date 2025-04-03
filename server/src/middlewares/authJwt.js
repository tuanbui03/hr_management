const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'; // Lấy từ biến môi trường

const authJwt = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Lấy token từ header

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Gán thông tin user vào request
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
};

module.exports = authJwt;
