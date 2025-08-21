import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const topRowImages = [
  { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop", brand: "snail" },
  { image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop", brand: "child" },
  { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop", brand: "Ceremonia" },
  { image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop", brand: "Aesop" },
  { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", brand: "abstract" },
  { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop", brand: "allbirds" },
  { image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop", brand: "snail" },
  { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop", brand: "child" },
  { image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop", brand: "Ceremonia" },
]

const middleRowImages = [
  { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", brand: "MERIT" },
  { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop", brand: "A.P.C." },
  { image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop", brand: "BURRATA" },
  { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop", brand: "succulent" },
  { image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop", brand: "abstract" },
  { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", brand: "MERIT" },
  { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop", brand: "A.P.C." },
  { image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop", brand: "BURRATA" },
]

const bottomRowImages = [
  { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop", brand: "tagine" },
  { image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop", brand: "suitcase" },
  { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", brand: "sneakers" },
  { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop", brand: "mascara" },
  { image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop", brand: "BYLT PREMIUM" },
  { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop", brand: "tagine" },
  { image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop", brand: "suitcase" },
  { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", brand: "sneakers" },
  { image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop", brand: "mascara" },
]

export function HeroSection() {
  return (
    <div className="relative py-32 min-h-screen">
      {/* Background product grid - 3 Rows */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="p-6 space-y-16">
          {/* Row 1 - Top Row - Moves Left to Right */}
          <div className="grid grid-cols-9 gap-3 animate-move-left-to-right">
            {topRowImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
                <img src={image.image} alt={image.brand} className="w-full h-full object-cover" />
                {image.brand && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xs bg-black/50 px-2 py-1 rounded">{image.brand}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Row 2 - Middle Row - Moves Right to Left */}
          <div className="grid grid-cols-8 gap-3 animate-move-right-to-left">
            {middleRowImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
                <img src={image.image} alt={image.brand} className="w-full h-full object-cover" />
                {image.brand && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xs bg-black/50 px-2 py-1 rounded">{image.brand}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Row 3 - Bottom Row - Moves Left to Right */}
          <div className="grid grid-cols-9 gap-3 animate-move-left-to-right">
            {bottomRowImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
                <img src={image.image} alt={image.brand} className="w-full h-full object-cover" />
                {image.brand && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xs bg-black/50 px-2 py-1 rounded">{image.brand}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Purple "shop" Title */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 space-y-6">
        <h1 className="text-7xl font-bold text-purple-600 opacity-90 bg-white/80 px-8 py-4 rounded-2xl shadow-lg">shop</h1>
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Indoor air purifiers for allergies"
            className="pl-12 h-14 text-lg bg-white/95 border border-gray-200 rounded-full shadow-lg focus:border-purple-300 focus:ring-purple-300"
          />
        </div>
      </div>
    </div>
  )
}
