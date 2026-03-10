import products from "../data/products"
import ProductCard from "./ProductCard"

export default function ProductGrid() {
  return (
    <section className="space-y-8 pb-24">
      
      {/* Optional Heading */}
      <h2 className="text-3xl font-bold text-center">
        All Products
      </h2>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>

    </section>
  )
}