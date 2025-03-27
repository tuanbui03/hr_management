const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');
const Department = require('./department');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    full_name: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, unique: true },
    address: { type: DataTypes.TEXT },
    dob: { type: DataTypes.DATE },
    start_date: { type: DataTypes.DATE, allowNull: false },
    role: { type: DataTypes.ENUM('admin', 'hr', 'employee', 'accounting'), allowNull: false },
}, { timestamps: true });

User.belongsTo(Department, { foreignKey: 'department_id' });

module.exports = User;
