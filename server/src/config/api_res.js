exports.getRespone = (httpStatus, data) => {
    return {
        error: httpStatus,
        data: data
    }
}
