import { Button } from "@/components/ui/button"

const brands = [
  {
    name: "COLOGNE CURATORS",
    rating: "4.8",
    followers: "recommendations",
    image: "/placeholder.svg?height=80&width=160",
    bgColor: "bg-blue-900",
  },
  {
    name: "The GLD Shop",
    rating: "4.7",
    followers: "recommendations",
    image: "/placeholder.svg?height=80&width=160",
    bgColor: "bg-amber-800",
  },
  {
    name: "Shopermint",
    rating: "4.4",
    followers: "recommendations",
    image: "/placeholder.svg?height=80&width=160",
    bgColor: "bg-green-700",
  },
  {
    name: "Pura",
    rating: "4.5",
    followers: "recommendations",
    image: "/placeholder.svg?height=80&width=160",
    bgColor: "bg-black",
  },
  {
    name: "LiquidIV",
    rating: "4.5",
    followers: "recommendations",
    image: "/placeholder.svg?height=80&width=160",
    bgColor: "bg-orange-500",
  },
]

export function BrandGrid() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className={`${brand.bgColor} h-20 relative`}>
              <img
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-xs">⭐</span>
                  <span className="text-xs font-medium">{brand.rating}</span>
                </div>
                <Button variant="outline" size="sm" className="h-6 px-2 text-xs rounded-full bg-transparent">
                  Follow
                </Button>
              </div>
              <div className="text-xs font-medium text-gray-600">{brand.followers}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
