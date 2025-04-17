const Sequelize = require('sequelize');

module.exports.buildFilters = (filterParams) => {
  const filters = {};

  Object.keys(filterParams).forEach((key) => {
    const { type, value, condition } = filterParams[key];

    if (value) {
      switch (condition) {
        case 'like':
          filters[key] = { [Sequelize.Op.like]: `%${value}%` }; // Like condition
          break;
        case 'equals':
          filters[key] = { [Sequelize.Op.eq]: value }; // Equal to condition
          break;
        case 'gte':
          filters[key] = { [Sequelize.Op.gte]: value }; // Greater than or equal
          break;
        case 'lte':
          filters[key] = { [Sequelize.Op.lte]: value }; // Less than or equal
          break;
        case 'in':
          if (Array.isArray(value)) {
            filters[key] = { [Sequelize.Op.in]: value }; // In condition
          }
          break;
        case 'ne':
          filters[key] = { [Sequelize.Op.ne]: value }; // Not equal to condition
          break;
        default:
          break;
      }
    }
  });

  return filters;
};
