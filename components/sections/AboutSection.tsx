export function AboutSection() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Orders Completed' },
    { number: '500+', label: 'Happy Customers' },
    { number: '24/7', label: 'Customer Support' }
  ]

  const features = [
    {
      icon: '🎯',
      title: 'Precision Embroidery',
      description: 'State-of-the-art embroidery machines ensure every stitch is perfect, delivering professional results every time.'
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      description: 'Most orders completed within 48-72 hours. Rush orders available for urgent needs.'
    },
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'We use only high-quality threads and materials that maintain their color and integrity wash after wash.'
    },
    {
      icon: '🎨',
      title: 'Custom Designs',
      description: 'Upload your own artwork or work with our design team to create something unique for your brand or event.'
    }
  ]

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              About Sew Inspired Embroidery
            </h2>
            <div className="space-y-4 text-primary-600">
              <p className="text-lg">
                Founded with a passion for bringing creative visions to life, Sew Inspired Embroidery 
                has been serving customers with premium custom embroidery services for over 15 years.
              </p>
              <p>
                What started as a small home-based business has grown into a trusted partner for 
                businesses, organizations, and individuals looking for high-quality embroidered products. 
                We pride ourselves on attention to detail, fast turnaround times, and exceptional customer service.
              </p>
              <p>
                Whether you need corporate apparel, team uniforms, promotional items, or personalized gifts, 
                our experienced team uses the latest technology and premium materials to ensure your 
                embroidered products exceed expectations.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center border border-secondary-300">
              <div className="text-center text-primary-600">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <p className="text-lg font-medium text-charcoal">Our Workshop</p>
                <p className="text-sm">Professional embroidery in action</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-accent-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
              15+ Years
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Premium Quality
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                {stat.number}
              </div>
              <div className="text-primary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-charcoal text-center mb-12">
            Why Choose Sew Inspired?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-charcoal mb-3">{feature.title}</h4>
                <p className="text-primary-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Simple Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Upload Design', desc: 'Share your artwork or let us create one for you' },
              { step: '2', title: 'Choose Product', desc: 'Select from our wide range of quality items' },
              { step: '3', title: 'Get Quote', desc: 'Receive transparent pricing and timeline' },
              { step: '4', title: 'Receive Order', desc: 'Get your professionally embroidered products' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <svg className="w-full h-0.5 text-gray-300" fill="currentColor" viewBox="0 0 100 2">
                      <rect width="100" height="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}