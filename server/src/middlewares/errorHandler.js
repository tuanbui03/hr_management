const CMD_COLOR = require('../config/cmd_color_refer');

const errorHandler = (err, req, res, next) => {
  
  const status = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Lỗi hệ thống';

  if (!err.isOperational) {
    console.log(`${CMD_COLOR.FgRed}[Hệ Thống] ${err}.${CMD_COLOR.Reset}`);
  }

  res.status(200).json({
    status,
    message,
    metadata: null
  });
};

module.exports = errorHandler;
