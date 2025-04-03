const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');
const User = require('./user');

const OnLeave = sequelize.define('OnLeave', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
    reason: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' },
}, { timestamps: true });

OnLeave.belongsTo(User, { foreignKey: 'user_id' });

module.exports = OnLeave;
