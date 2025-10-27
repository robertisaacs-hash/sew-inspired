import { AboutSection } from '@/components/sections/AboutSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Sew Inspired Embroidery
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Your trusted partner for premium custom embroidery services. 
            Quality craftsmanship, fast turnaround, and exceptional customer service since 2009.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Our Story */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Our Story
          </h2>
          
          <div className="prose prose-lg mx-auto text-primary-600">
            <p>
              Sew Inspired Embroidery began as a passion project in 2009 when founder Sarah Mitchell 
              started embroidering custom designs from her home studio. What started with a single 
              embroidery machine and a dream has grown into a full-service custom embroidery business 
              serving customers across the region.
            </p>
            
            <p>
              Our commitment to quality and customer satisfaction has remained unchanged since day one. 
              We believe that every piece we embroider represents not just our craftsmanship, but also 
              our customer's brand, message, or personal expression. That's why we take pride in every 
              stitch and never compromise on quality.
            </p>
            
            <p>
              Today, we serve hundreds of businesses, organizations, and individuals with their custom 
              embroidery needs. From small startups needing their first branded apparel to large 
              corporations requiring thousands of embroidered items, we bring the same attention to 
              detail and personal service to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Sarah Mitchell</h3>
              <p className="text-primary-600 mb-3">Founder & Lead Designer</p>
              <p className="text-sm text-primary-600">
                15+ years of embroidery experience with a passion for bringing customer visions to life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Mike Rodriguez</h3>
              <p className="text-primary-600 mb-3">Production Manager</p>
              <p className="text-sm text-primary-600">
                Oversees quality control and ensures every order meets our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Emma Thompson</h3>
              <p className="text-primary-600 mb-3">Customer Service Lead</p>
              <p className="text-sm text-primary-600">
                Your main point of contact for orders, questions, and design consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Quality First</h3>
              <p className="text-primary-600 text-sm">
                Every stitch matters. We never compromise on quality or craftsmanship.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Fast Service</h3>
              <p className="text-primary-600 text-sm">
                Quick turnaround times without sacrificing attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Clear Communication</h3>
              <p className="text-primary-600 text-sm">
                We keep you informed throughout the entire process from quote to delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Partnership</h3>
              <p className="text-primary-600 text-sm">
                We're not just a vendor - we're your partner in creating something special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            Whether you need one custom piece or thousands, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
            <a href="/custom-design" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Start Your Design
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}