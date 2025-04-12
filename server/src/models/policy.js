const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');

const Policy = sequelize.define('Policy', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    effective_date: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Policy;
