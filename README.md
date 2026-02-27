
---

# 🛒 BlueShop – Modern Ecommerce Frontend

**BlueShop** is a modern, responsive, and production-ready ecommerce frontend built with **React 19**, **Vite**, **Bun**, and **Tailwind CSS**. It features a premium UI, smooth animations, and a seamless shopping experience.

---

## 🚀 Features

* Fully responsive ecommerce UI
* **Add to Cart** functionality with animated cart drawer
* Quantity management and live total calculation
* Checkout page with order placement simulation
* Authentication (Login & Register) with protected routes
* Context-based state management for cart and auth
* Toast notifications for cart actions
* Premium UI with gradients, shadows, and smooth animations
* Modern React 19 + Tailwind CSS architecture

---

## 🧩 Components

* **Navbar.jsx** – Navigation with login/logout and cart button
* **CartDrawer.jsx** – Animated cart drawer with add, remove, and update functionality
* **ProductCard.jsx** – Individual product cards
* **ProductGrid.jsx** – Grid layout for all products
* **ProtectedRoute.jsx** – Route guard for authenticated pages
* **Toast.jsx** & **ToastProvider.jsx** – Toast notifications for user feedback

---

## 🗂 Context Providers

* **AuthContext.jsx** – Handles user authentication
* **CartContext.jsx** – Handles cart state, quantity, totals, and notifications

---

## 🛠 Pages

* **Home.jsx** – Landing page with hero section and product grid
* **Login.jsx** – Login page
* **Register.jsx** – Registration page
* **CheckoutPage.jsx** – Checkout and order placement page

---

## ⚡ Technologies Used

* **React 19** – Frontend framework
* **Vite** – Fast development server & bundler
* **Bun** – High-performance runtime (optional)
* **Tailwind CSS 4** – Utility-first styling
* **Framer Motion** – Smooth animations
* **React Router v7** – Client-side routing

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/blueshop-frontend.git
cd blueshop-frontend
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173`.

---

## 📝 Usage

1. Browse products on the home page
2. Click **Add to Cart** to add items
3. Open the cart drawer to adjust quantity or remove items
4. Navigate to **Checkout** to place your order (simulated)
5. Login/Register for protected actions

---

## 🔐 Protected Routes

* `/dashboard` – Example protected route
* Only accessible when logged in
* Redirects to `/login` if unauthenticated

---

## 🎨 UI Highlights

* Gradient headers & buttons
* Animated cart drawer with Framer Motion
* Toast notifications for all cart actions
* Fully responsive design for desktop & mobile
* Smooth hover & click interactions

---

## 📂 Project Structure

```text
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ CartDrawer.jsx
│  ├─ ProductCard.jsx
│  ├─ ProductGrid.jsx
│  ├─ Toast.jsx
│  ├─ ToastProvider.jsx
│  └─ ProtectedRoute.jsx
├─ context/
│  ├─ AuthContext.jsx
│  └─ CartContext.jsx
├─ data/
│  └─ products.js
├─ pages/
│  ├─ Home.jsx
│  ├─ Login.jsx
│  ├─ Register.jsx
│  └─ CheckoutPage.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
```

---

## ✅ Future Enhancements

* Integrate backend API for authentication and product data
* Add payment gateway (Stripe/PayPal)
* Save cart in localStorage or database
* Add order history and user dashboard
* Implement advanced filtering, sorting, and search
* Deploy frontend & backend to production

---