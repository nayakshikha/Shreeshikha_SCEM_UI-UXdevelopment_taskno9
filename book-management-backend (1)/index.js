require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const backupRoutes = require('./routes/backupRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/books', bookRoutes);
app.use('/api/backup', backupRoutes);

app.get('/', (req, res) => {
  res.send('📚 Book Management API is running');
});

app.listen(PORT, () => {
  console.log(`📚 Book Management API is running on port ${PORT}`);
});
