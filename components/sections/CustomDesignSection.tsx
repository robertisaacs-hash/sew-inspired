'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export function CustomDesignSection() {
  const [selectedProduct, setSelectedProduct] = useState('tshirt')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const products = [
    { id: 'tshirt', name: 'T-Shirt', color: '#ffffff' },
    { id: 'hoodie', name: 'Hoodie', color: '#2563eb' },
    { id: 'cap', name: 'Baseball Cap', color: '#1f2937' },
    { id: 'polo', name: 'Polo Shirt', color: '#dc2626' }
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const selectedProductData = products.find(p => p.id === selectedProduct)

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Design Your Custom Product
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Upload your design and see how it looks on our products. 
            Get an instant preview before placing your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Controls */}
          <div className="space-y-8">
            {/* Product Selection */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-4">
                1. Choose Your Product
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedProduct === product.id
                        ? 'border-primary-500 bg-secondary-100'
                        : 'border-secondary-200 hover:border-secondary-300 bg-white'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 mx-auto mb-2 rounded"
                      style={{ backgroundColor: product.color }}
                    />
                    <div className="font-medium text-sm text-charcoal">{product.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-4">
                2. Upload Your Design
              </h3>
              
              <div className="border-2 border-dashed border-secondary-300 rounded-lg p-8 text-center bg-white">
                {uploadedImage ? (
                  <div>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden border border-secondary-200">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded design" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <div>
                    <svg className="w-16 h-16 mx-auto mb-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-primary-600 mb-4">
                      Drag and drop your image here, or click to browse
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="btn-primary"
                      disabled={isUploading}
                    >
                      {isUploading ? 'Uploading...' : 'Choose File'}
                    </button>
                    <p className="text-xs text-secondary-500 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Design Guidelines */}
            <div className="bg-secondary-100 rounded-lg p-6 border border-secondary-200">
              <h4 className="font-semibold text-primary-700 mb-3">Design Guidelines</h4>
              <ul className="text-sm text-primary-600 space-y-2">
                <li>• High resolution images (300 DPI) work best</li>
                <li>• Vector files (SVG, AI) provide the sharpest results</li>
                <li>• Consider contrast with the product color</li>
                <li>• Simple designs embroider better than complex ones</li>
              </ul>
            </div>

            {/* Action Buttons */}
            {uploadedImage && (
              <div className="space-y-4">
                <Link 
                  href="/quote"
                  className="btn-primary w-full text-center block"
                >
                  Get Free Quote
                </Link>
                <Link 
                  href="/contact"
                  className="btn-outline w-full text-center block"
                >
                  Ask Questions
                </Link>
              </div>
            )}
          </div>

          {/* Right Side - Preview */}
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-charcoal mb-4">
              3. Preview Your Design
            </h3>
            
            <div className="bg-secondary-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-secondary-200">
              <div className="relative">
                {/* Product Mockup */}
                <div 
                  className="w-64 h-80 rounded-lg shadow-lg flex items-center justify-center relative"
                  style={{ 
                    backgroundColor: selectedProductData?.color || '#ffffff',
                    backgroundImage: selectedProduct === 'tshirt' 
                      ? 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%)'
                      : 'none'
                  }}
                >
                  {uploadedImage ? (
                    <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-white/50">
                      <img 
                        src={uploadedImage} 
                        alt="Design preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="text-center text-white/60">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                      <p className="text-sm">Your design will appear here</p>
                    </div>
                  )}
                </div>

                {/* Product Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cream px-4 py-2 rounded-full shadow-sm border border-secondary-200">
                    <span className="text-sm font-medium text-charcoal">
                      {selectedProductData?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {uploadedImage && (
              <div className="mt-8 bg-secondary-200 rounded-lg p-4 border border-secondary-300">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-primary-700 text-sm">Ready for embroidery!</p>
                    <p className="text-primary-600 text-xs mt-1">
                      Your design looks great on this product. Contact us for pricing and timeline.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}