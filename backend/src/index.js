require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Static Files
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api', require('./routes/api'));

// 404 Handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.statusCode = 404;
  next(error);
});

// Global Error Handler
app.use(require('./middleware/errorHandler'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
