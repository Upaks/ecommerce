import { Card } from "@/components/ui/card"

interface Product {
  id: number
  image: string
  brand: string
  title: string
  price: string
  originalPrice?: string | null
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 bg-transparent hover:bg-muted/50 transition-colors rounded-2xl">
      <div className="aspect-square overflow-hidden rounded-2xl bg-muted/30">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-3 space-y-1">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{product.brand}</div>
        <div className="text-sm font-medium line-clamp-2">{product.title}</div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Card>
  )
}
