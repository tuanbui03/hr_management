const AppError = require("./appError");

exports.checkRequiredFields = (data, fields) => {
    const missingFields = fields.filter(field => !data[field]);
    if (missingFields.length > 0) {
        throw new AppError(`Thiếu trường: ${missingFields.join(', ')}`, 400);
    }
};
