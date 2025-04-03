const checkRole = (allowedRoles) => {
    return (req, res, next) => {
        // Kiểm tra user có tồn tại trong request không (thường được xác thực trước đó)
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: 'Unauthorized: No user role found' });
        }

        // Kiểm tra role có nằm trong danh sách được phép không
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden: You do not have permission' });
        }

        // Nếu hợp lệ, tiếp tục xử lý
        next();
    };
};

module.exports = checkRole;
