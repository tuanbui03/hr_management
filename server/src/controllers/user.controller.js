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

const getUserById = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const { user_id } = req.params;

    const user = (await userService.findUserById(user_id)).metadata.data.dataValues;

    let userData;
    if (currentUser.id === user.id || currentUser.role === 'admin') {
      const { password, ...data } = user;
      userData = data;
    } else {
      const { is_using, password, ...data } = user;
      userData = data;
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
  updateUser,
  getUserById,
  forgotPassword
};
