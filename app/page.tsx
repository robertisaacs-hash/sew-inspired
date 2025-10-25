import { Hero } from '@/components/sections/Hero'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { CustomDesignSection } from '@/components/sections/CustomDesignSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts />
      <CustomDesignSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  )
}