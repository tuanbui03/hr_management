const express = require('express');
const authJwt = require('../middlewares/authJwt'); 
const checkRole = require('../middlewares/checkRole');

const router = express.Router();

// Route chỉ dành cho admin
router.get('/admin-only', authJwt, checkRole(['admin']), (req, res) => {
    res.json({ message: 'Welcome Admin!', user: req.user });
});

// Route chỉ dành cho HR và Admin
router.get('/hr-dashboard', authJwt, checkRole(['hr', 'admin']), (req, res) => {
    res.json({ message: 'Welcome HR/Admin!', user: req.user });
});

// Route dành cho tất cả roles
router.get('/employee-dashboard', authJwt, checkRole(['employee', 'hr', 'admin', 'accounting']), (req, res) => {
    res.json({ message: 'Welcome Employee!', user: req.user });
});

module.exports = router;
