const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');
const User = require('./user');

const Wage = sequelize.define('Wage', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    base_salary: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    bonus: { type: DataTypes.DECIMAL(10,2), defaultValue: 0.00 },
    deductions: { type: DataTypes.DECIMAL(10,2), defaultValue: 0.00 },
    payment_date: { type: DataTypes.DATE, allowNull: false },
}, { timestamps: true });

Wage.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Wage;
