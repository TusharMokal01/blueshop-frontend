import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { AuthContext } from "../context/AuthContext"
import { motion, AnimatePresence } from "framer-motion"
import { ToastContext } from "../components/ToastProvider"

export default function Checkout() {
  const { cart, total, updateQuantity, removeFromCart, clearCart } = useContext(CartContext)
  const { user } = useContext(AuthContext)
  const { showToast } = useContext(ToastContext)
  const [placed, setPlaced] = useState(false)

  const handleOrder = () => {
    if (!user) {
      showToast("Please login to place an order")
      return
    }
    setPlaced(true)
    clearCart()
  }

  if (placed)
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold text-white">Order Placed Successfully 🎉</h2>
        <p className="mt-4 text-lg text-white/80">Your order will be delivered within 5–7 working days.</p>
      </div>
    )

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-8">Checkout</h2>

      <div className="space-y-4">
        <AnimatePresence>
          {cart.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="flex justify-between items-center bg-white/10 p-4 rounded-2xl shadow-lg"
            >
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-white/70">Price: ${item.price}</p>
                <p className="text-white/80">Subtotal: ${item.price * item.quantity}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-white text-blue-700 rounded px-2 py-1 disabled:opacity-50"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="w-6 text-center text-white">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-white text-blue-700 rounded px-2 py-1"
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2">
                  ❌
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 border-t border-white/30 pt-4">
        <p className="text-xl font-semibold text-white">Total: ${total}</p>
        <button
          onClick={handleOrder}
          disabled={cart.length === 0}
          className={`mt-6 w-full py-3 rounded-xl font-semibold text-white ${
            cart.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg hover:scale-105 transition-all"
          }`}
        >
          {user ? "Place Order" : "Login to Place Order"}
        </button>
      </div>
    </div>
  )
}