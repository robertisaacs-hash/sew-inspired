import Link from 'next/link'

export default function AdminInventoryPage() {
  // Mock inventory data - in real app this would come from database
  const inventoryItems = [
    {
      id: '1',
      name: 'Classic Logo T-Shirt',
      sku: 'TSHIRT-001',
      currentStock: 15,
      minStock: 10,
      maxStock: 50,
      cost: 12.50,
      price: 24.99,
      status: 'good',
      lastRestocked: '2025-10-15',
      supplier: 'Gildan Wholesale'
    },
    {
      id: '2',
      name: 'Baseball Cap',
      sku: 'CAP-001',
      currentStock: 2,
      minStock: 5,
      maxStock: 30,
      cost: 8.75,
      price: 19.99,
      status: 'critical',
      lastRestocked: '2025-09-28',
      supplier: 'Hat World Supply'
    },
    {
      id: '3',
      name: 'Polo Shirt',
      sku: 'POLO-001',
      currentStock: 8,
      minStock: 5,
      maxStock: 40,
      cost: 18.00,
      price: 34.99,
      status: 'low',
      lastRestocked: '2025-10-10',
      supplier: 'Premium Apparel Co.'
    },
    {
      id: '4',
      name: 'Tote Bag',
      sku: 'BAG-001',
      currentStock: 25,
      minStock: 8,
      maxStock: 60,
      cost: 6.25,
      price: 16.99,
      status: 'good',
      lastRestocked: '2025-10-20',
      supplier: 'Eco Bags Direct'
    },
    {
      id: '5',
      name: 'Hoodie',
      sku: 'HOODIE-001',
      currentStock: 12,
      minStock: 6,
      maxStock: 35,
      cost: 22.50,
      price: 45.99,
      status: 'good',
      lastRestocked: '2025-10-12',
      supplier: 'Comfort Wear Inc.'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-accent-100 text-accent-700 border-accent-200'
      case 'low':
        return 'bg-accent-50 text-accent-600 border-accent-100'
      case 'good':
        return 'bg-primary-100 text-primary-700 border-primary-200'
      default:
        return 'bg-secondary-200 text-primary-600 border-secondary-300'
    }
  }

  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.cost), 0)
  const lowStockItems = inventoryItems.filter(item => item.status === 'critical' || item.status === 'low')

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
              <h1 className="text-2xl font-bold">Inventory Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Export Report
              </button>
              <button className="btn-secondary">
                Add Stock Entry
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
              <h3 className="text-sm font-medium text-primary-600">Total Inventory Value</h3>
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">
              ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-primary-500 mt-1">Based on cost price</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Total Products</h3>
              <div className="w-8 h-8 bg-secondary-200 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">{inventoryItems.length}</div>
            <p className="text-xs text-primary-500 mt-1">Active SKUs</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Low Stock Alerts</h3>
              <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">{lowStockItems.length}</div>
            <p className="text-xs text-primary-500 mt-1">Need attention</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary-600">Avg Stock Level</h3>
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal">
              {Math.round(inventoryItems.reduce((sum, item) => sum + item.currentStock, 0) / inventoryItems.length)}
            </div>
            <p className="text-xs text-primary-500 mt-1">Units per product</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-secondary-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Search Products</label>
              <input
                type="text"
                placeholder="Search by name or SKU..."
                className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Stock Status</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Status</option>
                <option value="critical">Critical (Reorder Now)</option>
                <option value="low">Low Stock</option>
                <option value="good">Good Stock</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Supplier</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Suppliers</option>
                <option value="gildan">Gildan Wholesale</option>
                <option value="hatworld">Hat World Supply</option>
                <option value="premium">Premium Apparel Co.</option>
                <option value="eco">Eco Bags Direct</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Actions</label>
              <button className="w-full btn-primary">
                Generate Reorder Report
              </button>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-secondary-200">
            <h2 className="text-lg font-semibold text-charcoal">Inventory Details</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Current Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Min/Max</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Cost/Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Last Restocked</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-secondary-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-charcoal">{item.name}</div>
                      <div className="text-sm text-primary-600">{item.supplier}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                      {item.sku}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-charcoal">{item.currentStock} units</div>
                      <div className="w-24 bg-secondary-200 rounded-full h-2 mt-1">
                        <div 
                          className={`h-2 rounded-full ${
                            item.currentStock <= item.minStock ? 'bg-accent-500' : 'bg-primary-500'
                          }`}
                          style={{ 
                            width: `${Math.min((item.currentStock / item.maxStock) * 100, 100)}%` 
                          }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                      Min: {item.minStock}<br/>
                      Max: {item.maxStock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="text-charcoal">${item.cost.toFixed(2)} / ${item.price.toFixed(2)}</div>
                      <div className="text-primary-600">
                        {Math.round(((item.price - item.cost) / item.price) * 100)}% margin
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full border ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                      {new Date(item.lastRestocked).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center space-x-2">
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Update Stock
                        </button>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Reorder
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary-100 rounded-lg p-6 border border-secondary-200">
            <h3 className="text-lg font-semibold text-primary-700 mb-4">🔄 Quick Stock Update</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Product</label>
                <select className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-lg">
                  <option>Select Product...</option>
                  {inventoryItems.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Add/Remove Stock</label>
                <div className="flex space-x-2">
                  <input 
                    type="number" 
                    placeholder="Quantity"
                    className="flex-1 px-3 py-2 text-sm border border-secondary-300 rounded-lg"
                  />
                  <button className="bg-primary-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-primary-600">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary-100 rounded-lg p-6 border border-secondary-200">
            <h3 className="text-lg font-semibold text-primary-700 mb-4">📋 Reorder Suggestions</h3>
            <div className="space-y-2 text-sm">
              {lowStockItems.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-secondary-200 last:border-0">
                  <span className="text-charcoal">{item.name}</span>
                  <span className="text-accent-600 font-medium">
                    Order {item.maxStock - item.currentStock} units
                  </span>
                </div>
              ))}
              <button className="w-full mt-3 bg-primary-500 text-white py-2 text-sm rounded-lg hover:bg-primary-600">
                Generate Purchase Orders
              </button>
            </div>
          </div>

          <div className="bg-secondary-100 rounded-lg p-6 border border-secondary-200">
            <h3 className="text-lg font-semibold text-primary-700 mb-4">📊 Inventory Insights</h3>
            <div className="space-y-3 text-sm text-primary-600">
              <div className="flex justify-between">
                <span>Stock Turnover:</span>
                <span className="font-medium text-charcoal">2.3x/month</span>
              </div>
              <div className="flex justify-between">
                <span>Days of Inventory:</span>
                <span className="font-medium text-charcoal">13 days</span>
              </div>
              <div className="flex justify-between">
                <span>Reorder Point:</span>
                <span className="font-medium text-charcoal">5-8 units</span>
              </div>
              <div className="flex justify-between">
                <span>Carrying Cost:</span>
                <span className="font-medium text-charcoal">$45/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}