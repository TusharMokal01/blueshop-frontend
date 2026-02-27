import { motion } from "framer-motion"
import ProductGrid from "../components/ProductGrid"

export default function Home() {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <h1 className="text-6xl font-extrabold tracking-tight">
          Modern Ecommerce Platform Built for Performance, Scalability & Seamless User Experience
        </h1>

        <p className="mt-6 text-lg text-white/80">
          A fully responsive, high-performance shopping experience crafted with clean architecture, smooth animations, and a premium UI designed for real-world production standards.
        </p>
      </motion.section>

      <ProductGrid />
    </div>
  )
}