const { DataTypes } = require('sequelize');
const { nanoid } = require('nanoid');

const sequelize = require('../config/database/hr');
const { ROLE } = require('../config/constant');

const Department = require('./department');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => nanoid(),//21 ký tự, an toàn hơn autoincrement
    },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    full_name: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.BOOLEAN, defaultValue: false },
    phone_number: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT },
    dob: { type: DataTypes.DATE },
    start_date: { type: DataTypes.DATE, allowNull: false },
    is_using: { type: DataTypes.BOOLEAN, defaultValue: true },
    role: { type: DataTypes.ENUM(ROLE.QTV, ROLE.HR, ROLE.NV, ROLE.KT), allowNull: false },
}, {
    defaultScope: {
        where: {
            is_using: true,
        },
    }
});

User.belongsTo(Department, { foreignKey: 'department_id' });

module.exports = User;
