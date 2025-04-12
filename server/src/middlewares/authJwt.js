const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

require('dotenv').config();

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError(401, 'Token không hợp lệ hoặc không được cung cấp, truy cập bị từ chối'));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return next(new AppError(401, 'Token đã hết hạn'));
    } else if (err.name === 'JsonWebTokenError') {
      return next(new AppError(403, 'Token không hợp lệ'));
    }

    return next(new AppError(403, 'Lỗi xác thực token'));
  }
};
