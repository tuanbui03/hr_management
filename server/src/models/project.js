const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/hr');
const Department = require('./department');

const Project = sequelize.define('Project', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
});

Project.belongsTo(Department, { foreignKey: 'department_id' });

module.exports = Project;
