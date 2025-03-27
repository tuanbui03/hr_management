const sequelize = require('../config/database/hr');

const Department = require('./department');
const User = require('./user');
const Project = require('./project');
const OnLeave = require('./onLeave');
const Contract = require('./contract');
const Wage = require('./wage');
const Position = require('./position');
const Policy = require('./policy');

const syncDatabase = async () => {
    await sequelize.sync({ alter: true }); // Cập nhật cấu trúc bảng nếu cần
    console.log('All models were synchronized successfully.');
};

module.exports = { sequelize, syncDatabase, Department, User, Project, OnLeave, Contract, Wage, Position, Policy };
