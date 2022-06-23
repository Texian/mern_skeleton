const mongoose = require('mongoose')

const timesheetSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  hoursDay: {
    type: Number,
    
  },
  hoursWeek: {
    type: Number,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Timesheet', timesheetSchema)