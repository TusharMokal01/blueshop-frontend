import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { ToastProvider } from "./components/ToastProvider"

import Navbar from "./components/Navbar"
import CartDrawer from "./components/CartDrawer"
import ProtectedRoute from "./components/ProtectedRoute"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white">
              
              <Navbar />
              <CartDrawer />

              <div className="pt-24 px-6 max-w-7xl mx-auto">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <div className="text-3xl font-bold">Dashboard (Protected)</div>
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
          </Router>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  )
}