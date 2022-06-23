import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import timesheetService from './timesheetService'

const initialState = {
  timesheets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const createTimesheet = createAsyncThunk(
  'timesheets/create',
  async (timesheetData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await timesheetService.createTimesheet(timesheetData, token)
    } catch (error) {
      const message = (
        error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const deleteTimesheet = createAsyncThunk(
  'timesheets/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await timesheetService.deleteTimesheet(id, token)
    } catch (error) {
      const message = (
        error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getTimesheets = createAsyncThunk('timesheets/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await timesheetService.getTimesheets(token)
  } catch (error) {
    const message = (
      error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
}
)


export const timesheetSlice = createSlice({
  name: 'timesheets',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTimesheet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTimesheet.fulfilled, (state, action) => {
        state.timesheets.push(action.payload)
        state.isSuccess = true
        state.isLoading = false
      })
      .addCase(createTimesheet.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
      .addCase(getTimesheets.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTimesheets.fulfilled, (state, action) => {
        state.timesheets = action.payload
        state.isSuccess = true
        state.isLoading = false
      })
      .addCase(getTimesheets.rejected, (state, action) => {
        state.message = action.payload
        state.isError = true
        state.isLoading = false
      })
      .addCase(deleteTimesheet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTimesheet.fulfilled, (state, action) => {
        state.timesheets = state.timesheets.filter((timesheet) => timesheet._id !== action.payload.id)
        state.isSuccess = true
        state.isLoading = false
      })
      .addCase(deleteTimesheet.rejected, (state, action) => {
        state.message = action.payload
        state.isError = true
        state.isLoading = false
      })
  }
})

export const { reset } = timesheetSlice.actions
export default timesheetSlice.reducer