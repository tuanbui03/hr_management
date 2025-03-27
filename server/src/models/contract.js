const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');
const User = require('./user');

const Contract = sequelize.define('Contract', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE },
    contract_type: { type: DataTypes.ENUM('full-time', 'part-time', 'internship', 'temporary'), allowNull: false },
    salary: { type: DataTypes.DECIMAL(10,2), allowNull: false },
}, { timestamps: true });

Contract.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Contract;
