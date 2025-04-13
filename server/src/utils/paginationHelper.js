module.exports.paginate = (model, options) => {
    const { page, pageSize, where } = options;
  
    // Set default values for page and pageSize if not provided
    const currentPage = page || 1;
    const currentPageSize = pageSize || 10;
  
    const offset = (currentPage - 1) * currentPageSize;
  
    return model.findAndCountAll({
      where: where || {},  // Apply filtering if provided
      limit: currentPageSize,
      offset: offset,
    }).then(result => {
      const totalPages = Math.ceil(result.count / currentPageSize);
  
      return {
        data: result.rows,
        pagination: {
          totalItems: result.count,
          currentPage: currentPage,
          totalPages: totalPages,
          pageSize: currentPageSize,
        },
      };
    });
  };
  