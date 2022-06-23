import axios from "axios";

const API_URL = '/api/timesheets/'

const createTimesheet = async (timesheetData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, timesheetData, config)
  return response.data
}

const getTimesheets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

const deleteTimesheet = async (timesheetId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + timesheetId, config)
  return response.data
}

const timesheetService = {
  createTimesheet,
  getTimesheets,
  deleteTimesheet
}

export default timesheetService