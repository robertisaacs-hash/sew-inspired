'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/store/cart'
import type { CartItem } from '@/lib/store/cart'

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id)
    } else {
      updateQuantity(id, quantity)
    }
  }

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // This would integrate with Stripe or other payment processor
    // For now, we'll redirect to a checkout page (to be created)
    window.location.href = '/checkout'
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H21M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-charcoal mb-4">Your Cart is Empty</h1>
            <p className="text-primary-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. 
              Browse our products to get started with your custom embroidery project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary">
                Browse Products
              </Link>
              <Link href="/custom-design" className="btn-secondary">
                Start Custom Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-charcoal">Shopping Cart</h1>
          <p className="text-primary-600 mt-2">
            Review your items and proceed to checkout when ready
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm border border-secondary-200">
              <div className="px-6 py-4 border-b border-secondary-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-charcoal">
                    Cart Items ({items.length})
                  </h2>
                  <button
                    onClick={() => clearCart()}
                    className="text-accent-600 hover:text-accent-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-secondary-200">
                {items.map((item: CartItem) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-charcoal">
                              {item.name}
                            </h3>
                            {item.variant && (
                              <p className="text-sm text-primary-600 mt-1">
                                {item.variant.name}: {item.variant.value}
                              </p>
                            )}
                            {item.customDesignId && (
                              <p className="text-sm text-accent-600 mt-1">
                                ✨ Custom Design Applied
                              </p>
                            )}
                            <p className="text-lg font-semibold text-charcoal mt-2">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-accent-600 hover:text-accent-700 p-2"
                            title="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center mt-4 space-x-3">
                          <label className="text-sm font-medium text-primary-600">
                            Quantity:
                          </label>
                          <div className="flex items-center border border-secondary-300 rounded-lg">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-primary-600 hover:text-primary-700 hover:bg-secondary-50 rounded-l-lg"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="px-4 py-2 text-charcoal font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-primary-600 hover:text-primary-700 hover:bg-secondary-50 rounded-r-lg"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>
                          
                          {/* Item Total */}
                          <div className="ml-auto">
                            <span className="text-lg font-semibold text-charcoal">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                href="/products"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm border border-secondary-200 sticky top-8">
              <div className="px-6 py-4 border-b border-secondary-200">
                <h3 className="text-lg font-semibold text-charcoal">Order Summary</h3>
              </div>

              <div className="p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between">
                  <span className="text-primary-600">Subtotal</span>
                  <span className="font-medium text-charcoal">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                {/* Estimated Shipping */}
                <div className="flex justify-between">
                  <span className="text-primary-600">Estimated Shipping</span>
                  <span className="font-medium text-charcoal">
                    {getTotalPrice() >= 50 ? 'FREE' : '$8.99'}
                  </span>
                </div>

                {/* Free Shipping Notice */}
                {getTotalPrice() < 50 && (
                  <div className="bg-secondary-100 rounded-lg p-3">
                    <p className="text-sm text-primary-600">
                      💡 Add ${(50 - getTotalPrice()).toFixed(2)} more for FREE shipping!
                    </p>
                  </div>
                )}

                {/* Tax */}
                <div className="flex justify-between">
                  <span className="text-primary-600">Estimated Tax</span>
                  <span className="font-medium text-charcoal">
                    ${(getTotalPrice() * 0.0825).toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-secondary-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-charcoal">Total</span>
                    <span className="text-lg font-bold text-charcoal">
                      ${(getTotalPrice() + (getTotalPrice() >= 50 ? 0 : 8.99) + (getTotalPrice() * 0.0825)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut || items.length === 0}
                  className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                </button>

                {/* Security Badge */}
                <div className="text-center pt-4">
                  <div className="inline-flex items-center text-sm text-primary-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure Checkout
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-secondary-100 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-charcoal mb-3">Need Help?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call us: (555) 123-4567
                </div>
                <div className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: support@sewinspired.com
                </div>
                <Link href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Live Chat Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}