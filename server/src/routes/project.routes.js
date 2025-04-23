const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { verifyToken } = require('../middlewares/authJwt');

// Thống kê dự án theo tháng
router.get('/summary/monthly', verifyToken, projectController.getMonthlySummary);

// Thống kê dự án theo quý
router.get('/summary/quarterly', verifyToken, projectController.getQuarterlySummary);

module.exports = router;
