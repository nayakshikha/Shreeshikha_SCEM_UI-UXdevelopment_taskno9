// insertSampleBook.js
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/bookModel');

async function insertSampleData() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('✅ Connected to MongoDB');

  const sampleBooks = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      genre: 'Classic',
    },
    {
      title: '1984',
      author: 'George Orwell',
      publishedDate: new Date('1949-06-08'),
      genre: 'Dystopian',
    },
  ];

  await Book.insertMany(sampleBooks);
  console.log('📘 Sample books inserted');

  await mongoose.disconnect();
  console.log('🔌 Disconnected from MongoDB');
}

insertSampleData().catch(console.error);
