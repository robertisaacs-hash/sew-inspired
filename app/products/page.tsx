import { FeaturedProducts } from '@/components/sections/FeaturedProducts'

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Product Catalog
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Explore our full range of embroiderable products. From corporate apparel 
            to promotional items, we have everything you need for your custom embroidery projects.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <FeaturedProducts />

      {/* Additional Product Categories */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Product Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Apparel */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Apparel</h3>
              <p className="text-primary-600 mb-4">
                T-shirts, polos, hoodies, jackets, and uniforms for all occasions.
              </p>
              <ul className="text-sm text-primary-600 space-y-1">
                <li>• Cotton T-Shirts</li>
                <li>• Polo Shirts</li>
                <li>• Hoodies & Sweatshirts</li>
                <li>• Jackets & Outerwear</li>
                <li>• Work Uniforms</li>
              </ul>
            </div>

            {/* Accessories */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
              <div className="text-4xl mb-4">🧢</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Accessories</h3>
              <p className="text-primary-600 mb-4">
                Hats, bags, and accessories to complete your branded look.
              </p>
              <ul className="text-sm text-primary-600 space-y-1">
                <li>• Baseball Caps</li>
                <li>• Beanies & Winter Hats</li>
                <li>• Tote Bags</li>
                <li>• Backpacks</li>
                <li>• Aprons</li>
              </ul>
            </div>

            {/* Home & Office */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Home & Office</h3>
              <p className="text-primary-600 mb-4">
                Towels, blankets, and office items perfect for embroidery.
              </p>
              <ul className="text-sm text-primary-600 space-y-1">
                <li>• Bath Towels</li>
                <li>• Blankets & Throws</li>
                <li>• Cushions & Pillows</li>
                <li>• Table Linens</li>
                <li>• Office Accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            We work with a wide network of suppliers and can source almost any product for embroidery. 
            Contact us with your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
            <a href="/custom-design" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Start Custom Design
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}