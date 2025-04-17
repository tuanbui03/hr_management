const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');

const Position = sequelize.define('Position', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.TEXT },
});

module.exports = Position;
