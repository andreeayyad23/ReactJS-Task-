# 🌐 MERN Task

A simple and elegant **React Web App** that fetches user data from a public API and displays it in a searchable, scrollable list. Includes **live filtering**, **refreshing**, and (bonus) **pull-to-refresh** functionality! 🚀

---


## ⚙️ Features

✅ Fetches user data from `https://jsonplaceholder.typicode.com/users`  
✅ Scrollable list of users  
✅ 🔍 Real-time search filter  
✅ 🔄 Manual refresh button  
✅ ⬇️ Pull-to-refresh
✅ 🔁 Handles loading and error states gracefully  

---

## 🧰 Tech Stack

- **React**
- **Vite** (for fast bundling)
- **CSS Modules / Custom Styling**
- [react-simple-pull-to-refresh](https://www.npmjs.com/package/react-simple-pull-to-refresh)

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/andreeayyad23/ReactJS-Task-
cd MernTask

# 2. Install all dependencies
npm install
npm install express cors dotenv axios
npm install react-simple-pull-to-refresh --legacy-peer-deps

for backend
nodemon server.js
http://localhost:5000/api/users
for frontend
npm run dev
http://localhost:5173/
