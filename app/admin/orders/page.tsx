import Link from 'next/link'

export default function AdminOrdersPage() {
  // Mock orders data - in real app this would come from database
  const orders = [
    {
      id: 'ORD-2025-001',
      customerName: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 123-4567',
      date: '2025-01-22T10:30:00Z',
      status: 'processing',
      total: 89.97,
      items: [
        { name: 'Custom Logo T-Shirt', quantity: 2, price: 24.99, customization: 'Business Logo + Name' },
        { name: 'Baseball Cap', quantity: 1, price: 19.99, customization: 'Embroidered Initials' },
        { name: 'Tote Bag', quantity: 2, price: 16.99, customization: 'None' }
      ],
      shipping: {
        address: '123 Main St, Anytown, ST 12345',
        method: 'Standard Shipping',
        cost: 8.99,
        tracking: null
      },
      payment: {
        method: 'Credit Card',
        last4: '4242',
        status: 'paid'
      },
      notes: 'Customer requested expedited processing for business event.'
    },
    {
      id: 'ORD-2025-002',
      customerName: 'Michael Chen',
      email: 'm.chen@company.com',
      phone: '(555) 987-6543',
      date: '2025-01-22T14:15:00Z',
      status: 'ready-to-ship',
      total: 124.95,
      items: [
        { name: 'Polo Shirt', quantity: 3, price: 34.99, customization: 'Company Logo' },
        { name: 'Hoodie', quantity: 1, price: 45.99, customization: 'Name + Title' }
      ],
      shipping: {
        address: '456 Business Ave, Corporate City, ST 67890',
        method: 'Express Shipping',
        cost: 15.99,
        tracking: 'TRK123456789'
      },
      payment: {
        method: 'Business Account',
        last4: '8888',
        status: 'paid'
      },
      notes: 'Bulk order for new employee onboarding.'
    },
    {
      id: 'ORD-2025-003',
      customerName: 'Emma Rodriguez',
      email: 'emma.r@gmail.com',
      phone: '(555) 555-0123',
      date: '2025-01-21T16:45:00Z',
      status: 'shipped',
      total: 67.96,
      items: [
        { name: 'Custom Design Upload', quantity: 1, price: 29.99, customization: 'Family Photo Design' },
        { name: 'Tote Bag', quantity: 2, price: 16.99, customization: 'Matching Family Design' }
      ],
      shipping: {
        address: '789 Family Lane, Hometown, ST 13579',
        method: 'Standard Shipping',
        cost: 8.99,
        tracking: 'TRK987654321'
      },
      payment: {
        method: 'PayPal',
        last4: '1234',
        status: 'paid'
      },
      notes: 'Family reunion gift set - customer very excited!'
    },
    {
      id: 'ORD-2025-004',
      customerName: 'David Thompson',
      email: 'dthompson@email.com',
      phone: '(555) 246-8135',
      date: '2025-01-21T11:20:00Z',
      status: 'delivered',
      total: 156.94,
      items: [
        { name: 'Hoodie', quantity: 2, price: 45.99, customization: 'Team Logo + Numbers' },
        { name: 'Baseball Cap', quantity: 4, price: 19.99, customization: 'Team Logo' }
      ],
      shipping: {
        address: '321 Sports Complex, Athletic City, ST 24680',
        method: 'Express Shipping',
        cost: 15.99,
        tracking: 'TRK456789123'
      },
      payment: {
        method: 'Credit Card',
        last4: '7777',
        status: 'paid'
      },
      notes: 'Youth sports team order - coach placement.'
    },
    {
      id: 'ORD-2025-005',
      customerName: 'Lisa Park',
      email: 'lisa.park@business.co',
      phone: '(555) 369-2580',
      date: '2025-01-20T09:15:00Z',
      status: 'cancelled',
      total: 0.00,
      items: [
        { name: 'Polo Shirt', quantity: 5, price: 34.99, customization: 'Corporate Logo' }
      ],
      shipping: {
        address: '654 Corporate Blvd, Business District, ST 97531',
        method: 'Standard Shipping',
        cost: 12.99,
        tracking: null
      },
      payment: {
        method: 'Credit Card',
        last4: '5555',
        status: 'refunded'
      },
      notes: 'Customer changed order requirements, requested cancellation.'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-accent-100 text-accent-700 border-accent-200'
      case 'ready-to-ship':
        return 'bg-secondary-200 text-primary-700 border-secondary-300'
      case 'shipped':
        return 'bg-primary-100 text-primary-700 border-primary-200'
      case 'delivered':
        return 'bg-primary-200 text-primary-800 border-primary-300'
      case 'cancelled':
        return 'bg-charcoal-100 text-charcoal-700 border-charcoal-200'
      default:
        return 'bg-secondary-200 text-primary-600 border-secondary-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return '⏳'
      case 'ready-to-ship':
        return '📦'
      case 'shipped':
        return '🚚'
      case 'delivered':
        return '✅'
      case 'cancelled':
        return '❌'
      default:
        return '📋'
    }
  }

  const totalRevenue = orders
    .filter(order => order.status !== 'cancelled')
    .reduce((sum, order) => sum + order.total, 0)
    
  const pendingOrders = orders.filter(order => 
    order.status === 'processing' || order.status === 'ready-to-ship'
  ).length

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-primary-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-secondary-200 hover:text-white">
                ← Dashboard
              </Link>
              <h1 className="text-2xl font-bold">Order Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Export Orders
              </button>
              <button className="btn-secondary">
                Create Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Total Orders</h3>
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">{orders.length}</div>
            <p className="text-xs text-primary-500 mt-1">All time orders</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Pending Orders</h3>
              <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">{pendingOrders}</div>
            <p className="text-xs text-primary-500 mt-1">Need attention</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Revenue (Active)</h3>
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">
              ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-primary-500 mt-1">Excludes cancelled orders</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Avg Order Value</h3>
              <div className="w-8 h-8 bg-secondary-200 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">
              ${ orders.filter(o => o.status !== 'cancelled').length > 0 
                  ? (totalRevenue / orders.filter(o => o.status !== 'cancelled').length).toFixed(2)
                  : '0.00'
              }
            </div>
            <p className="text-xs text-primary-500 mt-1">Per completed order</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-secondary-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Search Orders</label>
              <input
                type="text"
                placeholder="Order ID, customer name..."
                className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Order Status</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Status</option>
                <option value="processing">Processing</option>
                <option value="ready-to-ship">Ready to Ship</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Date Range</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Payment Status</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Payments</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Actions</label>
              <button className="w-full btn-primary">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
              {/* Order Header */}
              <div className="px-6 py-4 bg-secondary-50 border-b border-secondary-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-charcoal">{order.id}</h3>
                    <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full border ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)} {order.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-primary-600">
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                    <span className="font-semibold text-charcoal">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Customer Information */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">Customer Information</h4>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium text-charcoal">{order.customerName}</p>
                      <p className="text-primary-600">{order.email}</p>
                      <p className="text-primary-600">{order.phone}</p>
                      {order.notes && (
                        <div className="mt-3 p-3 bg-secondary-100 rounded-lg">
                          <p className="text-xs font-medium text-primary-600 mb-1">NOTES:</p>
                          <p className="text-sm text-charcoal">{order.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">Order Items</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="border border-secondary-200 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <p className="font-medium text-charcoal text-sm">{item.name}</p>
                              <p className="text-xs text-primary-600">Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                            </div>
                            <p className="font-medium text-charcoal text-sm">
                              ${(item.quantity * item.price).toFixed(2)}
                            </p>
                          </div>
                          {item.customization !== 'None' && (
                            <div className="mt-2 p-2 bg-accent-50 rounded text-xs">
                              <span className="text-accent-700 font-medium">Customization: </span>
                              <span className="text-charcoal">{item.customization}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping & Payment */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">Shipping & Payment</h4>
                    <div className="space-y-4">
                      {/* Shipping Details */}
                      <div className="border border-secondary-200 rounded-lg p-3">
                        <p className="text-xs font-medium text-primary-600 mb-2">SHIPPING ADDRESS</p>
                        <p className="text-sm text-charcoal mb-2">{order.shipping.address}</p>
                        <div className="flex justify-between text-xs">
                          <span className="text-primary-600">{order.shipping.method}</span>
                          <span className="font-medium text-charcoal">${order.shipping.cost.toFixed(2)}</span>
                        </div>
                        {order.shipping.tracking && (
                          <div className="mt-2 p-2 bg-primary-50 rounded">
                            <p className="text-xs font-medium text-primary-600">TRACKING: {order.shipping.tracking}</p>
                          </div>
                        )}
                      </div>

                      {/* Payment Details */}
                      <div className="border border-secondary-200 rounded-lg p-3">
                        <p className="text-xs font-medium text-primary-600 mb-2">PAYMENT</p>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-charcoal">{order.payment.method}</span>
                          <span className="text-primary-600">****{order.payment.last4}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-primary-600">Status:</span>
                          <span className={`font-medium ${
                            order.payment.status === 'paid' ? 'text-primary-700' : 
                            order.payment.status === 'refunded' ? 'text-accent-600' : 'text-charcoal'
                          }`}>
                            {order.payment.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-secondary-200">
                  {order.status === 'processing' && (
                    <>
                      <button className="btn-primary">Mark Ready to Ship</button>
                      <button className="btn-secondary">Edit Order</button>
                      <button className="text-accent-600 hover:text-accent-700 font-medium px-3 py-2">Cancel Order</button>
                    </>
                  )}
                  {order.status === 'ready-to-ship' && (
                    <>
                      <button className="btn-primary">Mark as Shipped</button>
                      <button className="btn-secondary">Print Shipping Label</button>
                      <button className="btn-secondary">Add Tracking</button>
                    </>
                  )}
                  {order.status === 'shipped' && (
                    <>
                      <button className="btn-secondary">Update Tracking</button>
                      <button className="btn-secondary">Contact Customer</button>
                    </>
                  )}
                  {order.status === 'delivered' && (
                    <>
                      <button className="btn-secondary">Request Review</button>
                      <button className="btn-secondary">Reorder</button>
                    </>
                  )}
                  <button className="btn-secondary">View Full Details</button>
                  <button className="btn-secondary">Send Update Email</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-primary-600">
            Showing 1 to {orders.length} of {orders.length} orders
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm border border-secondary-300 rounded-lg text-primary-600 hover:bg-secondary-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm bg-primary-500 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-2 text-sm border border-secondary-300 rounded-lg text-primary-600 hover:bg-secondary-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}