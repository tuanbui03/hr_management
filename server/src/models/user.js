const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');
const Department = require('./department');
const { ROLE } = require('../config/constant');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    full_name: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    gender: {type: DataTypes.BOOLEAN, defaultValue: false },
    phone_number: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT },
    dob: { type: DataTypes.DATE },
    start_date: { type: DataTypes.DATE, allowNull: false },
    role: { type: DataTypes.ENUM(ROLE.QTV, ROLE.HR, ROLE.NV, ROLE.KT), allowNull: false },
});

User.belongsTo(Department, { foreignKey: 'department_id' });

module.exports = User;
