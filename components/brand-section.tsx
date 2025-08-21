import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const brands = [
  {
    name: "COLOGNE CURATORS",
    rating: "4.8",
    image: "/placeholder.svg?height=120&width=200",
    color: "bg-blue-900",
  },
  {
    name: "The GLD Shop",
    rating: "4.7",
    image: "/placeholder.svg?height=120&width=200",
    color: "bg-amber-800",
  },
  {
    name: "Shopermint",
    rating: "4.4",
    image: "/placeholder.svg?height=120&width=200",
    color: "bg-emerald-700",
  },
  {
    name: "Pura",
    rating: "4.5",
    image: "/placeholder.svg?height=120&width=200",
    color: "bg-slate-900",
  },
  {
    name: "LiquidIV",
    rating: "4.5",
    image: "/placeholder.svg?height=120&width=200",
    color: "bg-orange-600",
  },
]

export function BrandSection() {
  return (
    <div className="space-y-6 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {brands.map((brand, index) => (
          <Card key={index} className="group cursor-pointer overflow-hidden border-0 rounded-2xl">
            <div className={`${brand.color} h-24 relative overflow-hidden`}>
              <img
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                className="h-full w-full object-cover opacity-80 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">⭐ {brand.rating}</span>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                  Follow
                </Button>
              </div>
              <h3 className="font-semibold text-sm">{brand.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
