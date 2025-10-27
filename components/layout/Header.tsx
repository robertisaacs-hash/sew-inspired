'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// Using simple SVG icons instead of heroicons due to network issues
import { useCart } from '@/lib/store/cart'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
  const [showCartNotification, setShowCartNotification] = useState(false)
  const { items, getTotalPrice } = useCart()
  
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  // Show notification when items are added
  useEffect(() => {
    if (itemCount > 0) {
      setShowCartNotification(true)
      const timer = setTimeout(() => setShowCartNotification(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [itemCount])

  return (
    <header className="bg-primary-500 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Sew Inspired
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-secondary-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-secondary-500 font-medium transition-colors">
              Products
            </Link>
            <Link href="/custom-design" className="text-white hover:text-secondary-500 font-medium transition-colors">
              Custom Design
            </Link>
            <Link href="/about" className="text-white hover:text-secondary-500 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-secondary-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                className="relative p-2 group"
              >
                <svg className="h-6 w-6 text-white group-hover:text-secondary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H21M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                {itemCount > 0 && (
                  <span className={`absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-all ${
                    showCartNotification ? 'animate-pulse scale-110' : ''
                  }`}>
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-secondary-200 z-50">
                  <div className="p-4 border-b border-secondary-200">
                    <h3 className="font-semibold text-charcoal">Shopping Cart ({itemCount})</h3>
                  </div>
                  
                  {items.length === 0 ? (
                    <div className="p-4 text-center text-primary-600">
                      Your cart is empty
                    </div>
                  ) : (
                    <>
                      <div className="max-h-64 overflow-y-auto">
                        {items.slice(0, 3).map((item) => (
                          <div key={item.id} className="p-4 border-b border-secondary-100 last:border-0">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="font-medium text-charcoal text-sm">{item.name}</h4>
                                <p className="text-primary-600 text-xs">
                                  {item.quantity} × ${item.price.toFixed(2)}
                                </p>
                              </div>
                              <div className="text-sm font-semibold text-charcoal">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        ))}
                        {items.length > 3 && (
                          <div className="p-2 text-center text-sm text-primary-600">
                            +{items.length - 3} more items
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4 bg-secondary-50 border-t border-secondary-200">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-charcoal">Total:</span>
                          <span className="font-bold text-charcoal">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="space-y-2">
                          <Link
                            href="/cart"
                            onClick={() => setCartDropdownOpen(false)}
                            className="block w-full text-center btn-secondary text-sm py-2"
                          >
                            View Cart
                          </Link>
                          <Link
                            href="/checkout"
                            onClick={() => setCartDropdownOpen(false)}
                            className="block w-full text-center btn-primary text-sm py-2"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream border-t border-secondary-200">
              <Link
                href="/"
                className="block px-3 py-2 text-charcoal hover:text-primary-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-charcoal hover:text-primary-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/custom-design"
                className="block px-3 py-2 text-charcoal hover:text-primary-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Custom Design
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-charcoal hover:text-primary-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-charcoal hover:text-primary-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}