// Call library
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Call Controller
const errorController = require('./controllers/error');

// Call Middlewares
const errorHandler = require('./middlewares/errorHandler');

// Call Routes
const userRoutes = require('./routes/user.route');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, token');
  next();
});

// Use routes
app.use('/api/users', userRoutes);

// Global error handler
app.use(errorHandler);

// Handle 404 - Not Found
app.use(errorController.get404);

module.exports = app;
