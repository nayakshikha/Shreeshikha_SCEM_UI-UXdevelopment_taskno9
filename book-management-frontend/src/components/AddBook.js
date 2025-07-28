// src/components/AddBook.js
import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = async () => {
    if (!title || !author) return alert("Please fill all fields");
    await axios.post("http://localhost:5000/api/books", { title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add</button>
    </div>
  );
}

export default AddBook;
