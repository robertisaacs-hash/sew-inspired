'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d')

  // Mock analytics data - in real app this would come from database
  const kpis = {
    revenue: {
      current: 15750.00,
      previous: 12300.00,
      change: 28.0
    },
    orders: {
      current: 67,
      previous: 52,
      change: 28.8
    },
    customers: {
      current: 45,
      previous: 38,
      change: 18.4
    },
    averageOrder: {
      current: 235.07,
      previous: 236.54,
      change: -0.6
    }
  }

  const salesData = [
    { date: '2025-10-20', orders: 5, revenue: 1250.00 },
    { date: '2025-10-21', orders: 8, revenue: 1890.00 },
    { date: '2025-10-22', orders: 3, revenue: 675.00 },
    { date: '2025-10-23', orders: 12, revenue: 2840.00 },
    { date: '2025-10-24', orders: 7, revenue: 1640.00 },
    { date: '2025-10-25', orders: 9, revenue: 2145.00 },
    { date: '2025-10-26', orders: 11, revenue: 2580.00 },
    { date: '2025-10-27', orders: 6, revenue: 1420.00 }
  ]

  const topProducts = [
    { name: 'Classic Logo T-Shirt', sales: 45, revenue: 1125.00, margin: '65%' },
    { name: 'Baseball Cap', sales: 38, revenue: 759.62, margin: '72%' },
    { name: 'Polo Shirt', sales: 29, revenue: 1014.71, margin: '58%' },
    { name: 'Hoodie', sales: 22, revenue: 1011.78, margin: '55%' },
    { name: 'Tote Bag', sales: 31, revenue: 526.69, margin: '68%' }
  ]

  const customerMetrics = {
    newCustomers: 28,
    returningCustomers: 17,
    customerLifetimeValue: 380.50,
    repeatOrderRate: 42.5
  }

  const inventoryAlerts = [
    { product: 'Baseball Cap', stock: 2, status: 'critical' },
    { product: 'Classic T-Shirt', stock: 5, status: 'low' },
    { product: 'Polo Shirt', stock: 8, status: 'warning' }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const formatChange = (change: number) => {
    const isPositive = change > 0
    const sign = isPositive ? '+' : ''
    const color = isPositive ? 'text-primary-600' : 'text-accent-500'
    return (
      <span className={`${color} text-sm font-medium`}>
        {sign}{change.toFixed(1)}%
      </span>
    )
  }

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
              <h1 className="text-2xl font-bold">Analytics & KPIs</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-primary-700 text-white border border-primary-500 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-secondary-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Performance Indicators */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-6">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-primary-600">Total Revenue</h3>
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-charcoal">{formatCurrency(kpis.revenue.current)}</div>
                <div className="flex items-center space-x-2">
                  {formatChange(kpis.revenue.change)}
                  <span className="text-xs text-primary-500">vs last period</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-primary-600">Total Orders</h3>
                <div className="w-8 h-8 bg-secondary-200 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-charcoal">{kpis.orders.current}</div>
                <div className="flex items-center space-x-2">
                  {formatChange(kpis.orders.change)}
                  <span className="text-xs text-primary-500">vs last period</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-primary-600">New Customers</h3>
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-charcoal">{kpis.customers.current}</div>
                <div className="flex items-center space-x-2">
                  {formatChange(kpis.customers.change)}
                  <span className="text-xs text-primary-500">vs last period</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-primary-600">Avg. Order Value</h3>
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-charcoal">{formatCurrency(kpis.averageOrder.current)}</div>
                <div className="flex items-center space-x-2">
                  {formatChange(kpis.averageOrder.change)}
                  <span className="text-xs text-primary-500">vs last period</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Sales Trend */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-secondary-200 p-6">
            <h3 className="text-lg font-semibold text-charcoal mb-6">Sales Trend</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {salesData.map((day, index) => {
                const maxRevenue = Math.max(...salesData.map(d => d.revenue))
                const height = (day.revenue / maxRevenue) * 100
                return (
                  <div key={day.date} className="flex-1 flex flex-col items-center">
                    <div className="text-xs text-primary-600 mb-2">{formatCurrency(day.revenue)}</div>
                    <div 
                      className="w-full bg-primary-500 rounded-t-sm hover:bg-primary-600 transition-colors cursor-pointer"
                      style={{ height: `${height}%` }}
                      title={`${day.date}: ${day.orders} orders, ${formatCurrency(day.revenue)}`}
                    />
                    <div className="text-xs text-primary-500 mt-2">
                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Customer Metrics */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <h3 className="text-lg font-semibold text-charcoal mb-6">Customer Insights</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-primary-600">New Customers</span>
                  <span className="text-sm font-medium text-charcoal">{customerMetrics.newCustomers}</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-primary-600">Returning</span>
                  <span className="text-sm font-medium text-charcoal">{customerMetrics.returningCustomers}</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-accent-400 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-secondary-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-charcoal">{formatCurrency(customerMetrics.customerLifetimeValue)}</div>
                  <div className="text-sm text-primary-600">Avg. Customer LTV</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-charcoal">{customerMetrics.repeatOrderRate}%</div>
                <div className="text-sm text-primary-600">Repeat Order Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products & Inventory Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Products */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <h3 className="text-lg font-semibold text-charcoal mb-6">Top Selling Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-600">#{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal text-sm">{product.name}</div>
                      <div className="text-xs text-primary-600">{product.sales} units sold</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-charcoal text-sm">{formatCurrency(product.revenue)}</div>
                    <div className="text-xs text-primary-500">{product.margin} margin</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Alerts */}
          <div className="bg-white rounded-lg border border-secondary-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-charcoal">Inventory Alerts</h3>
              <Link href="/admin/inventory" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Manage Inventory →
              </Link>
            </div>
            <div className="space-y-4">
              {inventoryAlerts.map((item, index) => (
                <div key={item.product} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'critical' ? 'bg-accent-500' :
                      item.status === 'low' ? 'bg-accent-300' : 'bg-secondary-400'
                    }`}></div>
                    <div>
                      <div className="font-medium text-charcoal text-sm">{item.product}</div>
                      <div className="text-xs text-primary-600">{item.stock} units remaining</div>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                    item.status === 'critical' ? 'bg-accent-100 text-accent-700' :
                    item.status === 'low' ? 'bg-accent-50 text-accent-600' :
                    'bg-secondary-200 text-primary-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-secondary-100 rounded-lg border border-secondary-200">
              <h4 className="font-medium text-primary-700 text-sm mb-2">📊 Inventory Health</h4>
              <div className="text-xs text-primary-600">
                <div className="flex justify-between mb-1">
                  <span>Total Products:</span>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Low Stock Alerts:</span>
                  <span className="font-medium text-accent-600">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Stock Level:</span>
                  <span className="font-medium">8.2 units</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Insights */}
        <div className="mt-8 bg-secondary-100 rounded-lg p-6 border border-secondary-200">
          <h3 className="text-lg font-semibold text-primary-700 mb-4">📈 Business Insights & Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-cream rounded-lg p-4">
              <h4 className="font-medium text-primary-700 mb-2">🚀 Growth Opportunities</h4>
              <ul className="text-primary-600 space-y-1">
                <li>• Baseball caps showing strong sales - consider expanding color options</li>
                <li>• 28% revenue increase suggests successful marketing efforts</li>
                <li>• Customer lifetime value is healthy at $380</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-4">
              <h4 className="font-medium text-primary-700 mb-2">⚠️ Action Items</h4>
              <ul className="text-primary-600 space-y-1">
                <li>• Restock baseball caps immediately (critical low stock)</li>
                <li>• Review pricing for polo shirts (lower margin)</li>
                <li>• Follow up with 17 returning customers for reviews</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-4">
              <h4 className="font-medium text-primary-700 mb-2">💡 Optimization Tips</h4>
              <ul className="text-primary-600 space-y-1">
                <li>• Bundle popular items to increase average order value</li>
                <li>• Create loyalty program to improve repeat rate (42.5%)</li>
                <li>• Promote custom designs on best-selling products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}