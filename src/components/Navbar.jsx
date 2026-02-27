import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { CartContext } from "../context/CartContext"
import { motion } from "framer-motion"

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const { setIsOpen, cart } = useContext(CartContext)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className="fixed w-full top-0 bg-white/20 backdrop-blur-lg px-6 py-4 flex justify-between items-center z-50 shadow-md">
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-tight 
                  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 
                  bg-clip-text text-transparent 
                  hover:scale-105 hover:brightness-110 
                  transition-all duration-300 ease-in-out"
      >
        BlueShop
      </Link>

      <div className="flex items-center gap-6">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          className="relative bg-gradient-to-r from-blue-400 to-indigo-600 px-4 py-2 rounded-xl text-white font-semibold shadow-lg"
        >
          Cart
          {totalItems > 0 && (
            <motion.span
              layout
              className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2"
              animate={{ scale: [1, 1.3, 1] }}
            >
              {totalItems}
            </motion.span>
          )}
        </motion.button>

        {user ? (
          <motion.button
            onClick={logout}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold shadow-md"
          >
            Logout
          </motion.button>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}