const express = require('express');
const router = express.Router();
const ReportController = require('../Controllers/reportController');

// Create a new report
router.post('/reports', ReportController.createReport);

// Get all reports
router.get('/reports', ReportController.getAllReports);

// Get a report by ID
router.get('/reports/:id', ReportController.getReportById);

// Update a report by ID
router.put('/reports/:id', ReportController.updateReport);

// Delete a report by ID
router.delete('/reports/:id', ReportController.deleteReport);

module.exports = router;
