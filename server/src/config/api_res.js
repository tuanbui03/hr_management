exports.getRespone = (httpStatus, token = null, data = null) => {
  return {
    status: httpStatus.status,
    message: httpStatus.message,
    metadata: {
      token,
      data
    }
  };
};
