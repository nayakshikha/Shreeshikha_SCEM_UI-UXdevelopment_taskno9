import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/books";

export default function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publishedDate: "",
    genre: ""
  });

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    try {
      await axios.post(API_URL, newBook);
      fetchBooks();
      setNewBook({ title: "", author: "", publishedDate: "", genre: "" });
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchBooks();
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><a href="#welcome">Home</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>

      <section id="welcome" className="welcome-section">
        <h1 className="glow-heading">📚 Welcome to BookBuddy</h1>
        <p>Your smart companion for managing books with ease and style!</p>
      </section>

      <section className="add-book-section">
        <h2>Add a New Book</h2>
        <div className="form">
          <input
            className="glow-input"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            className="glow-input"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <input
            className="glow-input"
            name="publishedDate"
            value={newBook.publishedDate}
            onChange={handleChange}
            type="date"
          />
          <input
            className="glow-input"
            name="genre"
            value={newBook.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
          <button onClick={addBook}>Add Book</button>
        </div>
      </section>

      <section className="book-list-section">
        <h2>All Books</h2>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book._id}>
                <div>
                  <strong>{book.title}</strong>
                  <p>{book.author} | {book.genre} | {book.publishedDate?.slice(0, 10)}</p>
                </div>
                <button onClick={() => deleteBook(book._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>

    <section id="contact" className="contact-section">
  <h2>Contact Us</h2>
  <div className="contact-content">
    <p>
      If you face any issues or need assistance with BookBuddy, our support team is here to help.
      We assure you of timely responses and efficient resolutions.
      Whether it’s a technical problem, account query, or feature suggestion, just drop us a message!
      <br />
      <br />
      <strong>Email:</strong> support@bookbuddy.com &nbsp; | &nbsp;
      <strong>Phone:</strong> +91-9876543210
    </p>
    <img
      src={require('./assets/00.jpg')}
      alt="Contact Support"
      className="contact-img"
    />
  </div>
</section>


      <section id="about" className="about-us">
        <h2>About Us</h2>
        <div className="about-content">
          <p>
            BookBuddy is a modern and elegant book management app crafted with love using React.
            It’s perfect for students, readers, and library owners to manage their collection effortlessly.
            We believe technology can simplify your daily tasks — and BookBuddy is our step toward that goal.
            Our mission is to empower readers and keep book records neat and stylish.
          </p>
          <img src={require('./assets/about-books.png')} alt="About Books" className="about-img" />
        </div>
      </section>
    </div>
  );
}
