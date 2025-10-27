'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '@/lib/store/cart'

// Mock product data - in real app this would come from your database
const products = [
  {
    id: 1,
    name: 'Classic Logo T-Shirt',
    price: 24.99,
    salePrice: null,
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600', '/api/placeholder/600/600'],
    category: 'Apparel',
    description: 'Premium cotton t-shirt perfect for custom embroidery. Made from 100% ring-spun cotton for superior comfort and durability.',
    features: [
      '100% Ring-spun cotton',
      'Pre-shrunk fabric',
      'Tear-away label',
      'Side-seamed construction',
      'Shoulder-to-shoulder taping'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '4.5 oz/yd² (153 g/m²)',
      'Fit': 'Unisex',
      'Care': 'Machine wash cold, tumble dry low'
    },
    variants: [
      { id: 'size', name: 'Size', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'color', name: 'Color', options: ['White', 'Black', 'Navy', 'Gray', 'Red'] }
    ],
    embroideryAreas: [
      { name: 'Left Chest', maxSize: '4" x 4"', price: 8.00 },
      { name: 'Full Back', maxSize: '12" x 12"', price: 15.00 },
      { name: 'Sleeve', maxSize: '3" x 8"', price: 6.00 }
    ],
    inStock: true,
    stockLevel: 45,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 2,
    name: 'Baseball Cap',
    price: 19.99,
    salePrice: 16.99,
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    category: 'Accessories',
    description: 'Adjustable baseball cap with classic six-panel construction. Perfect for embroidered logos and designs.',
    features: [
      'Six-panel construction',
      'Adjustable snapback closure',
      'Pre-curved visor',
      'Structured crown',
      'Cotton twill fabric'
    ],
    specifications: {
      'Material': 'Cotton Twill',
      'Closure': 'Snapback',
      'Crown': 'Structured',
      'Visor': 'Pre-curved'
    },
    variants: [
      { id: 'color', name: 'Color', options: ['Black', 'Navy', 'Red', 'White', 'Gray', 'Khaki'] }
    ],
    embroideryAreas: [
      { name: 'Front Panel', maxSize: '4" x 3"', price: 8.00 },
      { name: 'Back Panel', maxSize: '4" x 3"', price: 8.00 },
      { name: 'Side Panel', maxSize: '2" x 3"', price: 6.00 }
    ],
    inStock: true,
    stockLevel: 23,
    rating: 4.6,
    reviewCount: 89
  }
  // Add more products as needed
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products.find(p => p.id === productId)
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})
  const [selectedEmbroidery, setSelectedEmbroidery] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)
  const [addingToCart, setAddingToCart] = useState(false)
  const [showCustomDesign, setShowCustomDesign] = useState(false)
  
  const { addItem } = useCart()

  // Initialize default variants
  useEffect(() => {
    if (product?.variants) {
      const defaultVariants: Record<string, string> = {}
      product.variants.forEach(variant => {
        defaultVariants[variant.id] = variant.options[0]
      })
      setSelectedVariants(defaultVariants)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleVariantChange = (variantId: string, value: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantId]: value
    }))
  }

  const handleEmbroideryToggle = (area: string) => {
    setSelectedEmbroidery(prev => 
      prev.includes(area) 
        ? prev.filter(a => a !== area)
        : [...prev, area]
    )
  }

  const calculatePrice = () => {
    const basePrice = product.salePrice || product.price
    const embroideryPrice = selectedEmbroidery.reduce((total, areaName) => {
      const area = product.embroideryAreas.find(a => a.name === areaName)
      return total + (area?.price || 0)
    }, 0)
    return basePrice + embroideryPrice
  }

  const handleAddToCart = async () => {
    setAddingToCart(true)
    
    const variantString = Object.entries(selectedVariants)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')
    
    const embroideryString = selectedEmbroidery.length > 0 
      ? ` + Embroidery: ${selectedEmbroidery.join(', ')}`
      : ''
    
    addItem({
      id: `product-${product.id}-${Date.now()}`,
      productId: product.id.toString(),
      name: `${product.name}${variantString ? ` (${variantString}${embroideryString})` : ''}`,
      price: calculatePrice(),
      image: product.images[0],
      quantity: quantity,
      variant: variantString ? { name: 'Options', value: variantString + embroideryString } : undefined
    })

    await new Promise(resolve => setTimeout(resolve, 800))
    setAddingToCart(false)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Home</Link>
            <span className="text-primary-400">/</span>
            <Link href="/products" className="text-primary-600 hover:text-primary-700">Products</Link>
            <span className="text-primary-400">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded border-2 transition-colors ${
                    selectedImage === index ? 'border-primary-500' : 'border-secondary-200'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-charcoal mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[1,2,3,4,5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'text-accent-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-primary-600">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${product.inStock ? 'bg-primary-100 text-primary-700' : 'bg-accent-100 text-accent-700'}`}>
                  {product.inStock ? `In Stock (${product.stockLevel})` : 'Out of Stock'}
                </span>
              </div>
              
              <div className="flex items-baseline space-x-2 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-2xl font-bold text-accent-500">${product.salePrice.toFixed(2)}</span>
                    <span className="text-lg text-primary-600 line-through">${product.price.toFixed(2)}</span>
                    <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-charcoal">${product.price.toFixed(2)}</span>
                )}
              </div>
            </div>

            <p className="text-primary-600 mb-6">{product.description}</p>

            {/* Variants */}
            {product.variants.map((variant) => (
              <div key={variant.id} className="mb-6">
                <label className="block font-medium text-charcoal mb-2">{variant.name}:</label>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleVariantChange(variant.id, option)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                        selectedVariants[variant.id] === option
                          ? 'border-primary-500 bg-primary-500 text-white'
                          : 'border-secondary-300 bg-white text-charcoal hover:border-primary-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Embroidery Options */}
            <div className="mb-6">
              <label className="block font-medium text-charcoal mb-2">Embroidery Areas (Optional):</label>
              <div className="space-y-2">
                {product.embroideryAreas.map((area) => (
                  <label key={area.name} className="flex items-center justify-between p-3 border border-secondary-200 rounded-lg hover:bg-secondary-50 cursor-pointer">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedEmbroidery.includes(area.name)}
                        onChange={() => handleEmbroideryToggle(area.name)}
                        className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <div>
                        <span className="font-medium text-charcoal">{area.name}</span>
                        <span className="text-sm text-primary-600 ml-2">Max: {area.maxSize}</span>
                      </div>
                    </div>
                    <span className="font-medium text-charcoal">+${area.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
              {selectedEmbroidery.length > 0 && (
                <button
                  onClick={() => setShowCustomDesign(true)}
                  className="mt-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  → Customize Design
                </button>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-medium text-charcoal mb-2">Quantity:</label>
              <div className="flex items-center border border-secondary-300 rounded-lg w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-primary-600 hover:text-primary-700 hover:bg-secondary-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="flex-1 text-center font-medium text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-primary-600 hover:text-primary-700 hover:bg-secondary-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mb-6 p-4 bg-secondary-100 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-charcoal">Total Price:</span>
                <span className="text-xl font-bold text-charcoal">
                  ${(calculatePrice() * quantity).toFixed(2)}
                </span>
              </div>
              {selectedEmbroidery.length > 0 && (
                <div className="text-sm text-primary-600 mt-1">
                  Includes embroidery: +${selectedEmbroidery.reduce((total, areaName) => {
                    const area = product.embroideryAreas.find(a => a.name === areaName)
                    return total + (area?.price || 0)
                  }, 0).toFixed(2)}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || addingToCart}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingToCart ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding to Cart...
                  </span>
                ) : (
                  `Add ${quantity} to Cart - $${(calculatePrice() * quantity).toFixed(2)}`
                )}
              </button>
              
              <Link 
                href={`/custom-design?product=${product.id}`}
                className="block w-full btn-secondary text-center"
              >
                Start Custom Design
              </Link>
            </div>

            {/* Product Features */}
            <div className="border-t border-secondary-200 pt-6">
              <h3 className="font-semibold text-charcoal mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-primary-600">
                    <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="border-t border-secondary-200 pt-6 mt-6">
              <h3 className="font-semibold text-charcoal mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-medium text-primary-600">{key}</dt>
                    <dd className="text-sm text-charcoal">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}