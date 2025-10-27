import Link from 'next/link'

export default function AdminDashboard() {
  // Mock data - in real app this would come from database
  const stats = {
    totalOrders: 42,
    pendingOrders: 8,
    totalProducts: 15,
    lowStockProducts: 3,
    totalRevenue: 12450.00,
    monthlyRevenue: 3200.00
  }

  const recentOrders = [
    { id: '001', customer: 'John Smith', total: 89.97, status: 'pending', date: '2025-10-27' },
    { id: '002', customer: 'Sarah Johnson', total: 156.50, status: 'processing', date: '2025-10-27' },
    { id: '003', customer: 'Mike Chen', total: 45.00, status: 'completed', date: '2025-10-26' },
  ]

  const lowStockProducts = [
    { name: 'Classic T-Shirt', stock: 2, minStock: 5 },
    { name: 'Baseball Cap', stock: 1, minStock: 5 },
    { name: 'Polo Shirt', stock: 3, minStock: 5 },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-primary-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold">Sew Inspired Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-secondary-200 hover:text-white">
                View Store
              </Link>
              <div className="w-8 h-8 bg-secondary-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-600">Total Orders</p>
                <p className="text-2xl font-bold text-charcoal">{stats.totalOrders}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-600">Pending Orders</p>
                <p className="text-2xl font-bold text-accent-500">{stats.pendingOrders}</p>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-600">Total Products</p>
                <p className="text-2xl font-bold text-charcoal">{stats.totalProducts}</p>
              </div>
              <div className="w-12 h-12 bg-secondary-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-charcoal">${stats.monthlyRevenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-secondary-200">
              <div className="px-6 py-4 border-b border-secondary-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-charcoal">Recent Orders</h2>
                  <Link href="/admin/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                      <div className="flex-1">
                        <p className="font-medium text-charcoal">Order #{order.id}</p>
                        <p className="text-sm text-primary-600">{order.customer}</p>
                        <p className="text-xs text-primary-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-charcoal">${order.total}</p>
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                          order.status === 'pending' ? 'bg-accent-100 text-accent-700' :
                          order.status === 'processing' ? 'bg-secondary-200 text-primary-700' :
                          'bg-primary-100 text-primary-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Low Stock Alert */}
          <div>
            <div className="bg-white rounded-lg border border-secondary-200">
              <div className="px-6 py-4 border-b border-secondary-200">
                <h2 className="text-lg font-semibold text-charcoal">Low Stock Alert</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {lowStockProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                      <div>
                        <p className="font-medium text-charcoal text-sm">{product.name}</p>
                        <p className="text-xs text-primary-600">Min: {product.minStock}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex px-2 py-1 text-xs bg-accent-100 text-accent-700 rounded-full">
                          {product.stock} left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/admin/inventory" className="block mt-4 text-center text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Manage Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-charcoal mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/products/new" className="bg-white border border-secondary-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="font-medium text-charcoal">Add Product</p>
                <p className="text-sm text-primary-600 mt-1">Create new product listing</p>
              </div>
            </Link>

            <Link href="/admin/orders" className="bg-white border border-secondary-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="font-medium text-charcoal">View Orders</p>
                <p className="text-sm text-primary-600 mt-1">Process customer orders</p>
              </div>
            </Link>

            <Link href="/admin/inventory" className="bg-white border border-secondary-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="font-medium text-charcoal">Inventory</p>
                <p className="text-sm text-primary-600 mt-1">Manage stock levels</p>
              </div>
            </Link>

            <Link href="/admin/analytics" className="bg-white border border-secondary-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="font-medium text-charcoal">Analytics</p>
                <p className="text-sm text-primary-600 mt-1">View sales reports</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}