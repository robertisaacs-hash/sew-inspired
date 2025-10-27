'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/store/cart'

// Mock product data - in real app this would come from your database
const featuredProducts = [
  {
    id: 1,
    name: 'Classic Logo T-Shirt',
    price: 24.99,
    image: '/api/placeholder/300/300',
    category: 'Apparel',
    description: 'Premium cotton t-shirt with custom embroidery'
  },
  {
    id: 2,
    name: 'Baseball Cap',
    price: 19.99,
    image: '/api/placeholder/300/300',
    category: 'Accessories',
    description: 'Adjustable cap with embroidered logo'
  },
  {
    id: 3,
    name: 'Polo Shirt',
    price: 34.99,
    image: '/api/placeholder/300/300',
    category: 'Apparel',
    description: 'Professional polo with custom embroidery'
  },
  {
    id: 4,
    name: 'Tote Bag',
    price: 16.99,
    image: '/api/placeholder/300/300',
    category: 'Accessories',
    description: 'Canvas tote bag with personalized design'
  },
  {
    id: 5,
    name: 'Hoodie',
    price: 44.99,
    image: '/api/placeholder/300/300',
    category: 'Apparel',
    description: 'Comfortable hoodie with embroidered details'
  },
  {
    id: 6,
    name: 'Backpack',
    price: 39.99,
    image: '/api/placeholder/300/300',
    category: 'Accessories',
    description: 'Durable backpack with custom embroidery'
  }
]

export function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [addingToCart, setAddingToCart] = useState<number | null>(null)
  const { addItem } = useCart()
  const categories = ['All', 'Apparel', 'Accessories']

  const handleAddToCart = async (product: any) => {
    setAddingToCart(product.id)
    
    // Add item to cart
    addItem({
      id: `product-${product.id}`,
      productId: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500))
    setAddingToCart(null)
  }

  const filteredProducts = selectedCategory === 'All' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory)

  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Explore our most popular embroidered items. Each product can be customized 
            with your own design, logo, or text.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-cream rounded-lg p-1 shadow-sm border border-secondary-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'text-charcoal hover:text-primary-500 hover:bg-secondary-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                {/* Placeholder image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm mb-2">Customize This Product</p>
                    <Link 
                      href={`/custom-design?product=${product.id}`}
                      className="btn-primary text-sm"
                    >
                      Start Design
                    </Link>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-secondary-200/90 text-xs font-medium px-2 py-1 rounded text-charcoal">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-semibold text-charcoal mb-1">{product.name}</h3>
                <p className="text-primary-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-accent-500">
                    ${product.price}
                  </span>
                  <Link 
                    href={`/products/${product.id}`}
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
                
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addingToCart === product.id}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addingToCart === product.id ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="btn-primary inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}