import { ProductCard } from "@/components/product-card"

const featuredProducts = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=200",
    brand: "allbirds",
    title: "Tree Runners",
    price: "$98",
    originalPrice: null,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=200",
    brand: "Adidas",
    title: "Stan Smith",
    price: "$80",
    originalPrice: null,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=200",
    brand: "Everlane",
    title: "Organic Cotton Tee",
    price: "$25",
    originalPrice: null,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=200",
    brand: "Glossier",
    title: "Cloud Paint",
    price: "$18",
    originalPrice: null,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=200",
    brand: "Nike",
    title: "Tech Fleece Joggers",
    price: "$100",
    originalPrice: null,
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=200",
    brand: "allbirds",
    title: "Tree Runners",
    price: "$98",
    originalPrice: null,
  },
]

export function ProductGrid() {
  return (
    <div className="space-y-8">
      {/* Hero Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Get more with offers */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Get more with offers</h2>
        <button className="text-sm text-primary hover:underline">→</button>
      </div>
    </div>
  )
}
