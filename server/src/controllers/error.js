const { getRespone } = require('../config/api_res');
const { HTTP_STATUS } = require('../config/constant');

exports.get404 = (req, res, next) => {
    const resApi = getRespone(HTTP_STATUS[404], {});

    res.status(200).json(resApi);
    return;
};