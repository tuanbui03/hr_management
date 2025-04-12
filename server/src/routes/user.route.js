const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middlewares/authJwt');
const checkRole = require('../middlewares/checkRole');
const { ROLE } = require('../config/constant');

// Đăng nhập (public)
router.post('/login', userController.login);

// Tạo user (chỉ dành cho admin) – middleware verifyToken sẽ kiểm tra token, role sẽ check trong service
router.post('/create', verifyToken, checkRole(ROLE.QTV), userController.createUser);

// Lấy profile người dùng đang đăng nhập
router.get('/profile/:user_id', verifyToken, userController.getProfile);

// Cập nhật profile của chính mình
router.put('/update', verifyToken, userController.updateUser);
router.put('/forgot-password', verifyToken, userController.forgotPassword);

module.exports = router;
