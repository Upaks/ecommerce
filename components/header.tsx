"use client"

import { ShoppingBag, Heart, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export function Header() {
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show search bar after scrolling past 400px (hero section height)
      if (window.scrollY > 400) {
        setShowSearch(true)
      } else {
        setShowSearch(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Black Header Bar */}
      <div className="bg-black text-white px-6 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">shop</span>
            </div>
            <span className="text-sm">Download Shop app. Available on iOS & Android</span>
          </div>
          <ArrowRight className="h-4 w-4 ml-3" />
        </div>
      </div>

      {/* Main White Header Bar - Fixed */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex h-14 items-center justify-between px-6">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-8">
            {showSearch && (
              <span className="text-2xl font-bold text-purple-600">shop</span>
            )}
            <a href="#" className="text-sm font-medium text-black font-semibold">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-black">
              Explore
            </a>
          </nav>

          {/* Center Search Bar - Only shows after scroll */}
          {showSearch && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Plant-based protein powders"
                  className="pl-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm focus:border-gray-300 focus:ring-gray-100"
                />
              </div>
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="text-gray-700 bg-white border-gray-200 hover:bg-gray-50">
              Sign In
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
