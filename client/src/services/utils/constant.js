// src/constants/constant.js

export const Constant = {
    STORAGE: {
        ACCESS_TOKEN: "accessToken",
        USER_INFO: "userInfo",
    },

    API: {
        BASE_URL: "http://localhost:8001/",
        LOGIN: "/api/users/login",
        REGISTER: "/api/users/register",
        // Bạn có thể thêm các API khác ở đây
    },

    ROLE: {
        QTV: 'admin',
        HR: 'hr',
        NV: 'employee',
        KT: 'accounting'
    },

    MESSAGE: {
        LOGIN_SUCCESS: "Đăng nhập thành công",
        LOGIN_FAILED: "Đăng nhập thất bại",
        SERVER_ERROR: "Có lỗi xảy ra, vui lòng thử lại sau",
    },
};
