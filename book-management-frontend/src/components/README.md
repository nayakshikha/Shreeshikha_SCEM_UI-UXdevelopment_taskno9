# 📚 Book Management Frontend

This is the **frontend** of the Book Management Application built using **React.js**. It allows users to:
- Add books
- View all books
- Delete books
- Navigate between pages using a smooth, animated navbar

The frontend interacts with a backend server (Node.js + Express) through RESTful APIs.

---

## 🚀 Features

- 📖 View book list
- ➕ Add new book
- ❌ Delete existing book
- 🔗 REST API integration (Axios)
- 🎨 Clean UI with section transitions
- 📱 Responsive layout
- 🧭 Navigation bar with sections:
  - Home
  - Add Book
  - About Us
  - Contact

---

## 🛠️ Tech Stack

- **React.js**
- **Axios** (for API requests)
- **CSS** (custom styling and transitions)
- **JavaScript (ES6+)**

---

## 📂 Folder Structure

book-management-frontend/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Images like about-books.png, etc.
│ ├── components/ # Reusable components like Navbar, BookList, AddBook
│ ├── App.js # Main React component
│ ├── App.css # Global styling
│ ├── index.js # Entry point
├── package.json
└── README.md # 👈 This file

---

## 🔌 API Endpoints Used

The frontend communicates with the backend via:

- `GET /api/books` → Fetch all books
- `POST /api/books` → Add a book
- `DELETE /api/books/:id` → Delete a book

**Base URL:** `http://localhost:5000`

Make sure the backend is running before launching the frontend.

---

## ▶️ How to Run (Development)

1. Open terminal inside `book-management-frontend` folder
2. Install dependencies:
   ```bash
   npm install
3.Start the frontend server:
npm start
4.Visit in browser: http://localhost:3000

📸 UI Preview
Book list with delete button

Add Book form with fields

About & Contact sections with static images

Smooth scrolling and transitions

 Developer
Built with ❤️ using React and Axios for the Book Management System project.

🧪 Note
Ensure the backend server is live on http://localhost:5000

Axios is used for all API calls (axios.get, axios.post, axios.delete)

All component logic is modular and under src/components/


