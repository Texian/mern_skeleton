const express = require('express');
const router = express.Router();
const { getTimesheets, setTimesheet, updateTimesheet, deleteTimesheet } = require('../controllers/timesheetController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getTimesheets).post(setTimesheet)
router.route('/:id').delete(protect, deleteTimesheet).put(protect, updateTimesheet)

module.exports = router