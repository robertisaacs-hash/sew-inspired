import { CustomDesignSection } from '@/components/sections/CustomDesignSection'

export default function CustomDesignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Create Your Custom Design
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Bring your vision to life with our custom embroidery service. 
            Upload your design, preview it on products, and get professional results.
          </p>
        </div>
      </section>

      {/* Custom Design Tool */}
      <CustomDesignSection />

      {/* Design Process */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Our Design Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Submit Design</h3>
              <p className="text-primary-600 text-sm">
                Upload your artwork or work with our design team to create something new.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Review & Approve</h3>
              <p className="text-primary-600 text-sm">
                We'll send you a digitized preview and quote for your approval before production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Production</h3>
              <p className="text-primary-600 text-sm">
                Our skilled embroiderers bring your design to life with precision and care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Delivery</h3>
              <p className="text-primary-600 text-sm">
                Fast, secure shipping gets your finished products to you quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tips */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Design Tips for Best Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <h3 className="text-xl font-semibold text-charcoal mb-4">✨ Artwork Guidelines</h3>
              <ul className="space-y-2 text-primary-600">
                <li>• Use high-resolution images (300 DPI minimum)</li>
                <li>• Vector files (AI, EPS, SVG) provide the best quality</li>
                <li>• Avoid very fine details or thin lines</li>
                <li>• Consider thread limitations (no gradients)</li>
                <li>• Text should be at least 6mm tall</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <h3 className="text-xl font-semibold text-charcoal mb-4">🎨 Color Considerations</h3>
              <ul className="space-y-2 text-primary-600">
                <li>• Limit colors to 6 or fewer for cost efficiency</li>
                <li>• Consider contrast with garment color</li>
                <li>• Metallic threads available for premium looks</li>
                <li>• Thread colors may vary slightly from screen colors</li>
                <li>• We'll match your brand colors as closely as possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-primary-600 mb-8">
            Custom embroidery pricing depends on design complexity, size, and quantity. 
            Get an instant quote with our design tool above!
          </p>
          
          <div className="bg-cream rounded-lg p-8 border border-secondary-200">
            <h3 className="text-lg font-semibold text-charcoal mb-4">What affects pricing?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-charcoal mb-2">Stitch Count</h4>
                <p className="text-primary-600">More complex designs = more stitches = higher cost</p>
              </div>
              <div>
                <h4 className="font-medium text-charcoal mb-2">Colors</h4>
                <p className="text-primary-600">Each color adds to the production time and setup</p>
              </div>
              <div>
                <h4 className="font-medium text-charcoal mb-2">Quantity</h4>
                <p className="text-primary-600">Larger orders get better per-piece pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}