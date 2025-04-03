const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');

const Department = sequelize.define('Department', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
}, { timestamps: true });

module.exports = Department;
