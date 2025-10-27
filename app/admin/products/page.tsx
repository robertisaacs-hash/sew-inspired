import Link from 'next/link'

export default function AdminProductsPage() {
  // Mock product data - in real app this would come from database
  const products = [
    {
      id: '1',
      name: 'Classic Logo T-Shirt',
      sku: 'TSHIRT-001',
      price: 24.99,
      stock: 15,
      status: 'active',
      category: 'Apparel',
      image: '/api/placeholder/100/100'
    },
    {
      id: '2',
      name: 'Baseball Cap',
      sku: 'CAP-001',
      price: 19.99,
      stock: 1,
      status: 'active',
      category: 'Accessories',
      image: '/api/placeholder/100/100'
    },
    {
      id: '3',
      name: 'Polo Shirt',
      sku: 'POLO-001',
      price: 34.99,
      stock: 3,
      status: 'active',
      category: 'Apparel',
      image: '/api/placeholder/100/100'
    },
    {
      id: '4',
      name: 'Tote Bag',
      sku: 'BAG-001',
      price: 16.99,
      stock: 8,
      status: 'active',
      category: 'Accessories',
      image: '/api/placeholder/100/100'
    },
    {
      id: '5',
      name: 'Hoodie',
      sku: 'HOODIE-001',
      price: 45.99,
      stock: 12,
      status: 'draft',
      category: 'Apparel',
      image: '/api/placeholder/100/100'
    },
  ]

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
              <h1 className="text-2xl font-bold">Product Management</h1>
            </div>
            <Link href="/admin/products/new" className="btn-secondary">
              Add New Product
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <label className="block text-sm font-medium text-charcoal mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Categories</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="home">Home & Office</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Status</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Stock Level</label>
              <select className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Levels</option>
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-secondary-200">
            <h2 className="text-lg font-semibold text-charcoal">All Products ({products.length})</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-secondary-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-secondary-200 rounded-lg flex-shrink-0 mr-4">
                          <div className="w-full h-full bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-charcoal">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                      {product.sku}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        product.stock <= 5 ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-700'
                      }`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        product.status === 'active' ? 'bg-primary-100 text-primary-700' :
                        product.status === 'draft' ? 'bg-secondary-200 text-primary-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center space-x-3">
                        <Link 
                          href={`/admin/products/${product.id}/edit`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Edit
                        </Link>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Duplicate
                        </button>
                        <button className="text-accent-500 hover:text-accent-600 font-medium">
                          Archive
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-secondary-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-primary-600">
                Showing 1 to {products.length} of {products.length} products
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm bg-secondary-200 text-primary-600 rounded-lg hover:bg-secondary-300">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm bg-primary-500 text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-2 text-sm bg-secondary-200 text-primary-600 rounded-lg hover:bg-secondary-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        <div className="mt-6 bg-secondary-100 rounded-lg p-4 border border-secondary-200">
          <h3 className="text-lg font-semibold text-primary-700 mb-3">💡 Quick Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-primary-600">
            <div>
              <strong>Stock Alerts:</strong> Products with red stock badges need restocking soon.
            </div>
            <div>
              <strong>Status Guide:</strong> Active = visible to customers, Draft = hidden from store.
            </div>
            <div>
              <strong>Bulk Edit:</strong> Select multiple products to update prices or stock levels together.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}