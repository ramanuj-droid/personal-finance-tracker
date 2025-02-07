const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Correct path to auth.js
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personal_finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// API Routes
app.use('/api', authRoutes);  // This line ensures /api routes work

app.get('/', (req, res) => {
  res.send('Welcome to Personal Finance Tracker');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
