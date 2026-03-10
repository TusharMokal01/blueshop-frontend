import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { CartContext } from "../context/CartContext"
import { motion } from "framer-motion"

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const { setIsOpen, cart } = useContext(CartContext)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    navigate(`/products?search=${search}`)
    setSearch("")
  }

  return (
    <nav className="fixed w-full top-0 bg-white/20 backdrop-blur-lg px-6 py-4 flex justify-between items-center z-50 shadow-md">

      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
      >
        BlueShop
      </Link>

      <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white/10 rounded-xl px-3 py-1">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="bg-transparent outline-none text-white px-2"
        />
      </form>

      <div className="flex items-center gap-6">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          className="relative bg-gradient-to-r from-blue-400 to-indigo-600 px-4 py-2 rounded-xl text-white font-semibold shadow-lg"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-2">
              {totalItems}
            </span>
          )}
        </motion.button>

        {user ? (
          <button
            onClick={logout}
            className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}