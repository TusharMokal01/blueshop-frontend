import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState, useMemo } from "react"
import products from "../data/products"

export default function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  // Categories
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      comingSoon: false,
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
      comingSoon: false,
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      comingSoon: false,
    },
    {
      name: "More Categories",
      description: "Exciting new collections launching soon. Stay tuned!",
      comingSoon: true,
    },
  ]

  // Search Suggestions
  const suggestions = useMemo(() => {
    if (!search.trim()) return []
    return products
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5)
  }, [search])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    navigate(`/products?search=${search}`)
  }

  return (
    <div className="space-y-20">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 space-y-6 relative"
      >
        <h1 className="text-6xl font-extrabold">
          Discover Premium Products Built for Modern Lifestyle & Smart Shopping
        </h1>

        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          BlueShop delivers a high-performance ecommerce frontend built with scalable architecture,
          advanced filtering logic, optimized rendering, and premium UI consistency.
        </p>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-3 mt-8 relative"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-96 bg-white/20 px-4 py-3 rounded-xl backdrop-blur-lg outline-none"
          />

          <button className="bg-gradient-to-r from-blue-400 to-indigo-600 px-6 py-3 rounded-xl font-semibold">
            Search
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute top-14 w-96 bg-white/20 backdrop-blur-xl rounded-xl p-3 space-y-2 text-left z-50">
              {suggestions.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    navigate(`/products?search=${s.name}`)
                    setSearch("")
                  }}
                  className="cursor-pointer hover:bg-white/10 px-2 py-2 rounded transition"
                >
                  {s.name}
                </div>
              ))}
            </div>
          )}
        </form>
      </motion.section>

      {/* CATEGORIES SECTION */}
      {/* <section className="space-y-10 mb-1">
        <h2 className="text-4xl font-bold text-center">
          Featured Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8 space-y-10">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={!cat.comingSoon ? { scale: 1.05 } : {}}
              onClick={() => {
                if (!cat.comingSoon) {
                  navigate(`/products?category=${cat.name}`)
                }
              }}
              className={`
                rounded-3xl overflow-hidden shadow-xl
                ${
                  cat.comingSoon
                    ? "bg-gradient-to-br from-gray-700 to-gray-900 cursor-default"
                    : "cursor-pointer bg-white/10 backdrop-blur-xl"
                }
              `}
            >
              {!cat.comingSoon ? (
                <>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold">
                      {cat.name}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="h-48 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2">
                    {cat.description}
                  </p>

                  <span className="mt-3 text-xs bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section> */}
      
      <section className="space-y-5">
        <h2 className="text-4xl font-bold text-center">
          Featured Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8 items-start space-y-5">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}  
              whileHover={!cat.comingSoon ? { scale: 1.05 } : {}}
              onClick={() => {
                if (!cat.comingSoon) {
                  navigate(`/products?category=${cat.name}`)
                }
              }}
              className={`
                h-[280px]
                flex flex-col
                rounded-3xl overflow-hidden shadow-xl
                ${
                  cat.comingSoon
                    ? "bg-gradient-to-br from-gray-700 to-gray-900 cursor-default"
                    : "cursor-pointer bg-white/10 backdrop-blur-xl"
                }
              `}
            >
              {!cat.comingSoon ? (
                <>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-40 w-full object-cover"
                  />
                  <div className="flex-1 flex items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-semibold">
                      {cat.name}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2">
                    {cat.description}
                  </p>

                  <span className="mt-3 text-xs bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}