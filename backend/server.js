const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => res.send('In development mode; set .env to production'));
}
  

app.listen(port, () => console.log(`Server started on port ${port}`));