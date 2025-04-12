const userService = require('../services/user.service');

const { getRespone } = require('../config/api_res');

const login = async (req, res, next) => {
  try {
    const result = await userService.loginUser(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const result = await userService.getProfile(userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const { id } = req.params;

    const user = await userService.findUserById(id);
    if (!user) {
      return next(new AppError('User not found', 404));
    }

    let userData;
    if (currentUser.id === user.id || currentUser.role === 'admin') {
      const { password, ...data } = user.toJSON();
      userData = data;
    } else {
      const {
        full_name,
        first_name,
        last_name,
        email,
        phone_number,
        address,
        dob,
        role,
      } = user;
      userData = {
        full_name,
        first_name,
        last_name,
        email,
        phone_number,
        address,
        dob,
        role,
      };
    }

    return res.json(
      getRespone({ status: 200, message: 'Lấy thông tin người dùng thành công' }, null, userData)
    );
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const result = await userService.updateUser(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res, next) => [

]

module.exports = {
  login,
  createUser,
  getProfile,
  updateUser,
  getUserById,
  forgotPassword
};
