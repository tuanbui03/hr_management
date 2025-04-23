const { Op } = require('sequelize');
const Project = require('../models/project');
const moment = require('moment');

const getMonthlySummary = async () => {
  const now = moment();
  const startOfMonth = now.startOf('month').toDate();
  const endOfMonth = now.endOf('month').toDate();
  const today = now.toDate();

  const totalProjects = await Project.count({
    where: {
      start_date: {
        [Op.between]: [startOfMonth, endOfMonth],
      },
    },
  });

  const completedProjects = await Project.count({
    where: {
      start_date: {
        [Op.between]: [startOfMonth, endOfMonth],
      },
      end_date: {
        [Op.lt]: today,
      },
    },
  });

  return {
    status: 200,
    message: 'Tổng hợp dự án trong tháng thành công',
    metadata: {
      month: now.format('MM-YYYY'),
      totalProjects,
      completedProjects,
    }
  };
};

const getQuarterlySummary = async () => {
  const now = moment();
  const currentQuarter = now.quarter(); // 1,2,3,4
  const startOfQuarter = now.clone().quarter(currentQuarter).startOf('quarter').toDate();
  const endOfQuarter = now.clone().quarter(currentQuarter).endOf('quarter').toDate();
  const today = now.toDate();

  const totalProjects = await Project.count({
    where: {
      start_date: {
        [Op.between]: [startOfQuarter, endOfQuarter],
      },
    },
  });

  const completedProjects = await Project.count({
    where: {
      start_date: {
        [Op.between]: [startOfQuarter, endOfQuarter],
      },
      end_date: {
        [Op.lt]: today,
      },
    },
  });

  return {
    status: 200,
    message: 'Tổng hợp dự án trong quý thành công',
    metadata: {
      quarter: currentQuarter,
      year: now.year(),
      totalProjects,
      completedProjects,
    }
  };
};

module.exports = {
  getMonthlySummary,
  getQuarterlySummary,
};
