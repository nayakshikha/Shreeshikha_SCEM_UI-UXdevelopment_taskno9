# 📘 Book Management Backend

This is the backend server for the **Book Management App**, built using **Node.js**, **Express.js**, and **MongoDB**. 
It handles CRUD operations for books, user registration, login, and optional backup/restore functionality.


---

## Features

-  Add, view, and delete books
-  User registration and login with JWT
-  Backup and restore MongoDB data
-  RESTful APIs with Express.js
-  CORS and body-parser enabled

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (optional authentication)**
- **dotenv**
- **multer (if file uploads are used)**

---

##  Getting Started

1. Clone the Repository

```bash
2.git clone link
cd book-management-backend2. Install Dependencies
3.npm install
Create a .env file in the root directory and add:
MONGO_URI=mongodb://localhost:27017/bookapp
PORT=5000
4.Start the Server
npm start
Book Management API is running on port 5000
Connected to MongoDB
📡 API Endpoints
Method	Route	Description
GET	/api/books	Fetch all books
POST	/api/books	Add a new book
DELETE	/api/books/:id	Delete a book by ID
POST	/api/users/signup	Register a new user
POST	/api/users/login	User login
GET	/api/backup	Download DB backup
POST	/api/restore	Restore DB from backup

Backup & Restore
To backup:
node utils/backup.js
To restore:
node utils/restore.js
Or use:

GET /api/backup

POST /api/restore
http://localhost:5000


# 📚 Book Management Frontend

This is the frontend part of the Book Management App built with React.js. It allows users to view, add, and delete books, and includes pages like Home, Login, About Us, Contact, and more — all with smooth transitions and a clean UI.

---

##  Features

-  Welcome page with tagline and glowing text
-  Navigation bar with:
  - Home
  - Add Book
  - Login
  - About Us
  - Contact
-  Book list with details:
  - Title
  - Author
  - date
  - Genre
  - Published Date
 - Add Book form
 -  Delete Book functionality
 - Axios integration with backend API
 - Stylish UI with gradients, transitions, and animations




 Installation & Setup
Clone the repository:
git clone <your-repo-url>
cd book-management-frontend
Install dependencies:
npm install
Start the development server:
npm start
The app runs on:
http://localhost:3000
🔗 Backend API Connection
Make sure the backend server is running on http://localhost:5000 (or update the Axios base URL accordingly).

 Build for Production
npm run build
 Testing
npm test
 Learn More
This project was bootstrapped with Create React App.

 Troubleshooting
If npm run build fails to minify, refer to this:
CRA Troubleshooting Docs

Contact
For questions, reach out via the Contact Us section on the app or email the developer.






