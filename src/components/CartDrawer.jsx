import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, total, isOpen, setIsOpen } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-96 bg-white/20 backdrop-blur-xl p-6 shadow-2xl z-50 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Your Cart</h2>
        <button onClick={() => setIsOpen(false)} className="text-xl text-white">✖️</button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {cart.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-white/70"
            >
              Your cart is empty
            </motion.p>
          )}

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
          onClick={() => {
            if(cart.length === 0) return
            setIsOpen(false)
            navigate("/checkout")
          }}
          className={`mt-4 w-full py-3 rounded-xl font-semibold text-white ${
            cart.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg hover:scale-105 transition-all"
          }`}
        >
          Checkout
        </button>
      </div>
    </motion.div>
  )
}