import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Custom <span className="text-secondary-300">Embroidery</span> for Every Occasion
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Transform your ideas into beautiful embroidered designs. From corporate logos to personal art, 
              we bring your vision to life with precision and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/custom-design" 
                className="btn-primary text-center inline-block"
              >
                Start Custom Design
              </Link>
              <Link 
                href="/products" 
                className="btn-outline text-center inline-block border-white text-white hover:bg-white hover:text-primary-600"
              >
                Browse Products
              </Link>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-primary-200">Happy Customers</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold">48hr</div>
                <div className="text-primary-200">Fast Turnaround</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-primary-200">Quality Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white/10 rounded-lg p-8">
              {/* Placeholder for hero image */}
              <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-white/80 text-lg">
                    Beautiful embroidery samples coming soon!
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Upload your own images in the custom design section
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-secondary-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Free Quotes!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
              Premium Quality
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  )
}