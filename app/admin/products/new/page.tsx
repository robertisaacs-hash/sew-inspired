'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NewProductPage() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    shortDescription: '',
    price: '',
    comparePrice: '',
    sku: '',
    stock: '',
    category: '',
    status: 'draft',
    isCustomizable: true,
    isFeatured: false
  })

  const [images, setImages] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would save to database
    console.log('Saving product:', product)
    alert('Product saved successfully!')
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // In a real app, you'd upload these to a cloud service
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages(prev => [...prev, ...newImages])
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-primary-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/admin/products" className="text-secondary-200 hover:text-white">
                ← Back to Products
              </Link>
              <h1 className="text-2xl font-bold">Add New Product</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-6">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={product.name}
                  onChange={(e) => setProduct({...product, name: e.target.value})}
                  placeholder="e.g., Classic Logo T-Shirt"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  SKU
                </label>
                <input
                  type="text"
                  value={product.sku}
                  onChange={(e) => setProduct({...product, sku: e.target.value})}
                  placeholder="e.g., TSHIRT-001"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Category *
                </label>
                <select
                  required
                  value={product.category}
                  onChange={(e) => setProduct({...product, category: e.target.value})}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select Category</option>
                  <option value="apparel">Apparel</option>
                  <option value="accessories">Accessories</option>
                  <option value="home-office">Home & Office</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Short Description
                </label>
                <input
                  type="text"
                  value={product.shortDescription}
                  onChange={(e) => setProduct({...product, shortDescription: e.target.value})}
                  placeholder="Brief description for product listings"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Full Description
                </label>
                <textarea
                  rows={4}
                  value={product.description}
                  onChange={(e) => setProduct({...product, description: e.target.value})}
                  placeholder="Detailed product description, materials, care instructions, etc."
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-6">Pricing & Inventory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Price *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-primary-600">$</span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: e.target.value})}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Compare Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-primary-600">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={product.comparePrice}
                    onChange={(e) => setProduct({...product, comparePrice: e.target.value})}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <p className="text-xs text-primary-500 mt-1">Original price for sale items</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  required
                  value={product.stock}
                  onChange={(e) => setProduct({...product, stock: e.target.value})}
                  placeholder="0"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-6">Product Images</h2>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-secondary-300 rounded-lg p-8 text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-primary-600 mb-2">Drop images here or click to browse</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="btn-primary cursor-pointer inline-block"
                >
                  Choose Images
                </label>
                <p className="text-xs text-primary-500 mt-2">PNG, JPG, GIF up to 10MB each</p>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-secondary-200"
                      />
                      <button
                        type="button"
                        onClick={() => setImages(prev => prev.filter((_, i) => i !== index))}
                        className="absolute top-2 right-2 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-accent-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-6">Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Product Status
                </label>
                <select
                  value={product.status}
                  onChange={(e) => setProduct({...product, status: e.target.value})}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="draft">Draft (Hidden from store)</option>
                  <option value="active">Active (Visible to customers)</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={product.isCustomizable}
                    onChange={(e) => setProduct({...product, isCustomizable: e.target.checked})}
                    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-charcoal">Allow custom embroidery designs</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={product.isFeatured}
                    onChange={(e) => setProduct({...product, isFeatured: e.target.checked})}
                    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-charcoal">Feature on homepage</span>
                </label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6">
            <Link
              href="/admin/products"
              className="px-6 py-3 text-primary-600 border border-secondary-300 rounded-lg hover:bg-secondary-100 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="btn-primary"
            >
              Save Product
            </button>
          </div>
        </form>

        {/* Help Section */}
        <div className="mt-8 bg-secondary-100 rounded-lg p-6 border border-secondary-200">
          <h3 className="text-lg font-semibold text-primary-700 mb-3">💡 Product Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-600">
            <div>
              <strong>SEO-Friendly Names:</strong> Use descriptive names that customers would search for.
            </div>
            <div>
              <strong>Pricing Strategy:</strong> Consider embroidery costs when setting base prices.
            </div>
            <div>
              <strong>Stock Management:</strong> Set realistic stock levels and monitor regularly.
            </div>
            <div>
              <strong>Quality Images:</strong> High-resolution photos increase customer confidence.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}