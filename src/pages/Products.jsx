import { useSearchParams } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import SkeletonCard from "../components/SkeletonCard"
import { motion } from "framer-motion"

const ITEMS_PER_PAGE = 4

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const searchQuery = params.get("search") || ""
  const categoryQuery = params.get("category") || ""
  const sort = params.get("sort") || ""
  const min = params.get("min") || ""
  const max = params.get("max") || ""
  const stock = params.get("stock") === "true"

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [params])

  const filtered = useMemo(() => {
    let result = [...products]

    if (searchQuery)
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )

    if (categoryQuery)
      result = result.filter(p => p.category === categoryQuery)

    if (min) result = result.filter(p => p.price >= Number(min))
    if (max) result = result.filter(p => p.price <= Number(max))
    if (stock) result = result.filter(p => p.stock)

    if (sort === "price-low") result.sort((a,b)=>a.price-b.price)
    if (sort === "price-high") result.sort((a,b)=>b.price-a.price)
    if (sort === "newest") result.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
    if (sort === "az") result.sort((a,b)=>a.name.localeCompare(b.name))

    return result
  }, [params])

  const paginated = filtered.slice((page-1)*ITEMS_PER_PAGE, page*ITEMS_PER_PAGE)
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(params)
    if (!value) newParams.delete(key)
    else newParams.set(key, value)
    setParams(newParams)
    setPage(1)
  }

  return (
    <div className="space-y-10">

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center"
      >
        {searchQuery ? `Search: "${searchQuery}"` : categoryQuery || "All Products"}
      </motion.h2>

      <div className="flex flex-wrap gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-lg">
        <select onChange={e=>updateParam("sort", e.target.value)} className="bg-white/20 px-3 py-2 rounded">
          <option value="" className="text-black">Sort</option>
          <option value="price-low" className="text-black">Price Low-High</option>
          <option value="price-high" className="text-black">Price High-Low</option>
          <option value="newest" className="text-black">Newest</option>
          <option value="az" className="text-black">A-Z</option>
        </select>

        <input placeholder="Min" onBlur={e=>updateParam("min", e.target.value)} className="bg-white/20 px-3 py-2 rounded w-24"/>
        <input placeholder="Max" onBlur={e=>updateParam("max", e.target.value)} className="bg-white/20 px-3 py-2 rounded w-24"/>

        <label className="flex items-center gap-2">
          <input type="checkbox" onChange={e=>updateParam("stock", e.target.checked)} />
          In Stock
        </label>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_,i)=><SkeletonCard key={i}/>)}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-white/70">No products found</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paginated.map(product=>(
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              {[...Array(totalPages)].map((_,i)=>(
                <button
                  key={i}
                  onClick={()=>setPage(i+1)}
                  className={`px-4 py-2 rounded-xl ${
                    page===i+1
                      ? "bg-gradient-to-r from-blue-400 to-indigo-600"
                      : "bg-white/20"
                  }`}
                >
                  {i+1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

    </div>
  )
}