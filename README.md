# 🛍️ BlueShop – Modern E-Commerce Frontend Only Project

BlueShop is a modern, high-performance e-commerce frontend built using **React, Vite, TailwindCSS, Context API, React Router, and Framer Motion**.

It features advanced filtering, sorting, pagination, authentication simulation, animated cart drawer, and smooth UI transitions — all wrapped inside a premium glassmorphism UI design.

---

## 🚀 Live Features

### 🏠 Home Page
- Animated hero section
- Smart search with live suggestions
- Featured categories
- Responsive premium layout

### 🛍️ Products Page
- URL-based search
- Category filtering
- Price range filter (Min / Max)
- In-stock filter
- Sorting:
  - Price Low → High
  - Price High → Low
  - Newest
  - A → Z
- Pagination
- Skeleton loading state

### 🛒 Cart System
- Animated slide-in cart drawer
- Add / Remove / Update quantity
- Live total calculation
- Toast notifications
- Auto open on add-to-cart

### 🔐 Authentication (Demo)
- Login & Register pages
- Context-based authentication state
- Protected route (/dashboard)
- Conditional navbar rendering

### 💳 Checkout
- Editable cart
- Subtotal calculation
- Login validation before placing order
- Order success screen
- Cart auto-clear after order

### 🎨 UI/UX Enhancements
- Glassmorphism design
- Gradient theme
- Framer Motion animations
- Fully responsive layout
- Smooth transitions
- Modern UI components

---

## 🛠️ Tech Stack

- ⚛ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎞 Framer Motion
- 🧭 React Router DOM
- 🧠 Context API (State Management)

---

## 📂 Complete Project Structure

```
BlueShop/
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    │
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── CartDrawer.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductGrid.jsx
    │   ├── ProtectedRoute.jsx
    │   ├── Toast.jsx
    │   ├── ToastProvider.jsx
    │   ├── Footer.jsx
    │   └── SkeletonCard.jsx
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── CartContext.jsx
    │
    ├── data/
    │   └── products.js
    │
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── Login.jsx
        ├── Register.jsx
        └── Checkout.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/blueshop.git
cd blueshop
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🧠 Architecture Overview

### 🔹 Global State Management
- `AuthContext` → Handles user login/logout
- `CartContext` → Manages cart logic & total calculation
- `ToastProvider` → Global notification system

### 🔹 Routing
- `/` → Home
- `/products` → Product listing
- `/login` → Login
- `/register` → Register
- `/checkout` → Checkout
- `/dashboard` → Protected Route

### 🔹 Performance Optimizations
- `useMemo` for filtered products
- `useEffect` for simulated loading state
- Paginated product rendering
- Controlled URL parameters

---

## ✨ Key Highlights

✔ Dynamic filtering using URL params  
✔ Clean scalable folder structure  
✔ Animated cart drawer  
✔ Glass UI design  
✔ Reusable components  
✔ Optimized rendering logic  
✔ Beginner-friendly architecture  

---

## 🔮 Future Improvements

- Backend Integration (Node + Express)
- JWT Authentication
- Database (MongoDB / PostgreSQL)
- Payment Gateway (Stripe / Razorpay)
- Admin Panel
- Product CRUD
- Dark/Light mode toggle
- Real API integration

---

## 👨‍💻 Author

**Tushar Mokal**  
MERN Stack Developer  

---