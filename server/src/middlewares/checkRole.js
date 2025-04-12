const AppError = require("../utils/appError");

const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user; // req.user phải được gán từ middleware xác thực trước đó

    if (!user) {
      return next(new AppError(401, "Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn."));
    }

    if (!allowedRoles.includes(user.role)) {
      return next(new AppError(403, "Bạn không có quyền truy cập chức năng này."));
    }

    next();
  };
};

module.exports = checkRole;
