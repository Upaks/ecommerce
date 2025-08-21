import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-6xl mx-auto px-12 py-8 space-y-12">
          <ProductSection />
        </div>
      </main>
    </div>
  )
}
