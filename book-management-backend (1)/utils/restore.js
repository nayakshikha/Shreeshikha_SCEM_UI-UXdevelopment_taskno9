const mongoose = require('mongoose');
const fs = require('fs');
const Book = require('../models/bookModel');

async function restoreBackup(filePath) {
  await mongoose.connect(process.env.MONGO_URL);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  await Book.deleteMany({});
  await Book.insertMany(data);
  await mongoose.disconnect();
}

module.exports = { restoreBackup };
