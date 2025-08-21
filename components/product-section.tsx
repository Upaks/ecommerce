"use client"

import { Heart, MoreHorizontal, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const productSections = [
  {
    brand: "Fashion Nova",
    rating: "4.1",
    followers: "20.6M",
    products: [
      {
        name: "Essential Jeans Skinny Crop Top",
        price: "$12.99",
        originalPrice: "$25.99",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Crossover Straight Leg Jeans Light Blue Wash",
        price: "$24.99",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Red Utility Cargo Shorts",
        price: "$19.99",
        originalPrice: "$34.99",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Essential Jeans Skinny Crop Top",
        price: "$12.99",
        originalPrice: "$25.99",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Essential Bandeau - White",
        price: "$8.99",
        originalPrice: "$16.99",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Sheer Mesh Sleeveless Crop Top",
        price: "$14.99",
        originalPrice: "$29.99",
        rating: "4.0",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "BARK",
    rating: "4.6",
    followers: "recommendations",
    products: [
      {
        name: "Squeaky Toy Duck",
        price: "$8.99",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Bright Dental Sticks",
        price: "$12.99",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Everything Bagel - Food",
        price: "$16.99",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Bright Squeaky Dental Sticks",
        price: "$14.99",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Big Squeaky Toy",
        price: "$22.99",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "New Squeaky Superfood Treats",
        price: "$18.99",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Comfrt",
    rating: "4.8",
    followers: "55K",
    products: [
      {
        name: "Classic Hoodie - Black",
        price: "$29.99",
        originalPrice: "$49.99",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Zip-Up Hoodie - Gray",
        price: "$34.99",
        originalPrice: "$59.99",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Sweatpants - Navy",
        price: "$24.99",
        originalPrice: "$39.99",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Long Sleeve Tee - White",
        price: "$19.99",
        originalPrice: "$29.99",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Athletic Shorts - Black",
        price: "$22.99",
        originalPrice: "$34.99",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Tank Top - Pink",
        price: "$16.99",
        originalPrice: "$24.99",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Allbirds",
    rating: "4.4",
    followers: "2.1M",
    products: [
      {
        name: "Wool Runners - Natural",
        price: "$95.00",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Tree Dashers - Black",
        price: "$110.00",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Wool Loungers - Gray",
        price: "$85.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Tree Skippers - White",
        price: "$75.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Wool Flyers - Navy",
        price: "$125.00",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Tree Breezers - Tan",
        price: "$65.00",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Glossier",
    rating: "4.7",
    followers: "1.8M",
    products: [
      {
        name: "Boy Brow - Brown",
        price: "$16.00",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Cloud Paint - Beam",
        price: "$18.00",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Milky Jelly Cleanser",
        price: "$19.00",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Perfecting Skin Tint",
        price: "$26.00",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Lash Slick Mascara",
        price: "$18.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Balm Dotcom - Rose",
        price: "$12.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Outdoor Voices",
    rating: "4.3",
    followers: "890K",
    products: [
      {
        name: "TechSweat Leggings - Black",
        price: "$68.00",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Move Free Shorts - Navy",
        price: "$45.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Athena Crop Top - White",
        price: "$38.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Hudson Shorts - Gray",
        price: "$52.00",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Rectrek Pants - Olive",
        price: "$78.00",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Exercise Dress - Blue",
        price: "$65.00",
        rating: "4.0",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Warby Parker",
    rating: "4.5",
    followers: "1.2M",
    products: [
      {
        name: "Percey - Matte Black",
        price: "$95.00",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Wilkie - Crystal",
        price: "$95.00",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Durand - Crystal",
        price: "$95.00",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Jasper - Matte Black",
        price: "$95.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Laurel - Crystal",
        price: "$95.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Murphy - Crystal",
        price: "$95.00",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Casper",
    rating: "4.2",
    followers: "750K",
    products: [
      {
        name: "Original Mattress - Queen",
        price: "$995.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "Pillow - Standard",
        price: "$65.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "Weighted Blanket - 15lb",
        price: "$125.00",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "Sheet Set - Queen",
        price: "$85.00",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "Duvet Cover - Queen",
        price: "$95.00",
        rating: "4.0",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "Bed Frame - Queen",
        price: "$295.00",
        rating: "3.9",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Everlane",
    rating: "4.6",
    followers: "1.5M",
    products: [
      {
        name: "The Classic T-Shirt - White",
        price: "$18.00",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "The High-Waist Jeans - Blue",
        price: "$68.00",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "The Day Heel - Black",
        price: "$145.00",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "The Weekender Bag - Tan",
        price: "$165.00",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "The Cashmere Sweater - Gray",
        price: "$100.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "The Silk Blouse - White",
        price: "$78.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    brand: "Away",
    rating: "4.4",
    followers: "680K",
    products: [
      {
        name: "The Carry-On - Black",
        price: "$225.00",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
      {
        name: "The Bigger Carry-On - Navy",
        price: "$245.00",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      },
      {
        name: "The Medium - Gray",
        price: "$275.00",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
      },
      {
        name: "The Large - Black",
        price: "$295.00",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
      },
      {
        name: "The Backpack - Black",
        price: "$85.00",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      },
      {
        name: "The Duffel - Navy",
        price: "$125.00",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5a?w=200&h=200&fit=crop",
      },
    ],
  },
]

export function ProductSection() {
  const [showVisitStore, setShowVisitStore] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {productSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-3">
          {/* Brand header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">{section.brand.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold">{section.brand}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>⭐ {section.rating}</span>
                  <span>• {section.followers}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
                Follow
              </Button>
              <div className="relative">
                <button 
                  onClick={() => setShowVisitStore(showVisitStore === sectionIndex ? null : sectionIndex)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
                {showVisitStore === sectionIndex && (
                  <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                    <button className="flex items-center space-x-2 text-sm hover:bg-gray-50 px-3 py-2 rounded w-full">
                      <Home className="w-4 h-4" />
                      <span>Visit store</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {section.products.map((product, productIndex) => (
              <div key={productIndex} className="group cursor-pointer">
                <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-2">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-3 h-3" />
                  </button>
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                      SALE
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium line-clamp-2 leading-tight">{product.name}</h4>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">⭐</span>
                    <span className="text-xs text-gray-500">{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
