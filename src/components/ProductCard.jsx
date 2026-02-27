import { motion } from "framer-motion"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl"
    >
      <img src={product.image} className="h-60 w-full object-cover" />

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p>${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-white text-blue-700 py-2 rounded-xl font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}