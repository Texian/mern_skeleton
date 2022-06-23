const asyncHandler = require('express-async-handler');
const Timesheet = require('../models/timesheetModel');
const User = require('../models/userModel');

const getTimesheets = asyncHandler(async (req, res) => {
  const sheets = await Sheet.find({user: req.user.id});
  res.status(200).json(sheets);
})

const setTimesheet = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Missing text");
  }

  const sheet = await sheet.create({
    text: req.body.text,
    user: req.user.id
  });
  
  res.status(200).json(sheet);
})

const updateTimesheet = asyncHandler(async (req, res) => {
  const sheet = await Sheet.findById(req.params.id)

  if (!sheet) {
    res.status(404)
    throw new Error("Sheet not found");
  }

  if (!req.user) {
    res.status(401)
    throw new Error("User not found");
  }

  if (sheet.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Not authorized");
  }

  const updatedSheet = await sheet.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(updatedSheet);
})

const deleteTimesheet = asyncHandler(async (req, res) => {
  
  if (!sheet) {
    res.status(404)
    throw new Error("Sheet not found");
  }

  if (!req.user) {
    res.status(401)
    throw new Error("User not found");
  }

  if (sheet.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Not authorized");
  }

  await sheet.remove()
  res.status(200).json({ id: req.params.id });
})

  module.exports = {
    getTimesheets,
    setTimesheet,
    updateTimesheet,
    deleteTimesheet
  }