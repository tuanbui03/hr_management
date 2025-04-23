const projectService = require('../services/project.service');

const getMonthlySummary = async (req, res, next) => {
  try {
    const summary = await projectService.getMonthlySummary();
    res.json(summary);
  } catch (error) {
    next(error);
  }
};

const getQuarterlySummary = async (req, res, next) => {
  try {
    const summary = await projectService.getQuarterlySummary();
    res.json(summary);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMonthlySummary,
  getQuarterlySummary,
};
