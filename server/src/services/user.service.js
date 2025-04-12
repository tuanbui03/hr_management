const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const { User } = require('../models');

const { checkRequiredFields } = require('../utils/validation');
const AppError = require('../utils/appError');

require('dotenv').config();

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        throw new AppError(401, 'Email hoặc mật khẩu không đúng');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new AppError(401, 'Email hoặc mật khẩu không đúng');
    }

    if (!user.is_using) {
        throw new AppError(404, 'Tài khoản đã bị khóa!');
    }

    const token = jwt.sign({ id: user.id, role: user.role, is_using: user.is_using }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return {
        status: 200,
        message: 'Đăng nhập thành công',
        metadata: {
            token,
            data: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
            }
        }
    };
};

const createUser = async (userData) => {
    checkRequiredFields(userData, ['email', 'password', 'full_name', 'first_name', 'last_name', 'start_date', 'role'])
    const existing = await User.findOne({ 
        where: { 
            [Op.or]: [{ email: userData.email }] 
        } 
    });
    if (existing) {
        throw new AppError(400, 'Hãy thử lại với email khác');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await User.create({ ...userData, password: hashedPassword });

    return {
        status: 201,
        message: 'Tạo tài khoản thành công',
        metadata: {
            data: newUser
        }
    };
};

const getProfile = async (userId) => {
    const user = await User.findByPk(userId, {
        attributes: ['id', 'full_name', 'first_name', 'last_name', 'email', 'phone_number', 'address', 'dob', 'role']
    });

    if (!user) {
        throw new AppError(404, 'Người dùng không tồn tại');
    }

    return {
        status: 200,
        message: 'Lấy thông tin người dùng thành công',
        metadata: {
            data: user
        }
    };
};

const updateUser = async (userId, updatedData) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new AppError(404, 'Người dùng không tồn tại');
    }

    // Danh sách các trường có thể cập nhật
    const updatableFields = [
        'full_name', 'first_name', 'last_name', 'email', 'password',
        'phone_number', 'address', 'gender', 'dob', 'start_date'
    ];

    // Lọc các trường hợp lệ từ updatedData
    const fieldsToUpdate = {};
    updatableFields.forEach(field => {
        if (updatedData[field] !== undefined) {
            fieldsToUpdate[field] = updatedData[field];
        }
    });

    // Nếu không có trường nào để cập nhật
    if (Object.keys(fieldsToUpdate).length === 0) {
        throw new AppError(400, 'Không có thông tin nào để cập nhật');
    }

    await user.update(fieldsToUpdate);

    // Ẩn password khi trả về
    const { password, ...safeUser } = user.toJSON();

    return {
        status: 200,
        message: 'Cập nhật thông tin thành công',
        metadata: {
            data: safeUser
        }
    };
};


module.exports = {
    loginUser,
    createUser,
    getProfile,
    updateUser
};

