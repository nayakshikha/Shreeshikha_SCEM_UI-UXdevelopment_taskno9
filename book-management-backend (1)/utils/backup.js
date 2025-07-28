const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Book = require('../models/bookModel');

async function createBackup() {
  await mongoose.connect(process.env.MONGO_URL);
  const books = await Book.find();
  const backupPath = path.join(__dirname, '../uploads/book_backup.json');
  fs.writeFileSync(backupPath, JSON.stringify(books, null, 2));
  await mongoose.disconnect();
  return 'book_backup.json';
}

module.exports = { createBackup };
