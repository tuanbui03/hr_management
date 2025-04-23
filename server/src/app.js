// Call library
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// Call Controller
const errorController = require('./controllers/error');

// Call Middlewares
const errorHandler = require('./middlewares/errorHandler');

// Call Routes
const userRoutes = require('./routes/user.route');
const prjRoutes = require('./routes/project.routes');

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

app.use(cors({
  origin: 'http://localhost:3000', // hoặc '*'
  credentials: true, // Nếu cần gửi cookie / token auth
}));


// Use routes
app.use('/api/users', userRoutes);
app.use('/api/project', prjRoutes);

// Global error handler
app.use(errorHandler);

// Handle 404 - Not Found
app.use(errorController.get404);

module.exports = app;
