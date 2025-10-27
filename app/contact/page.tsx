export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Ready to start your custom embroidery project? Have questions about our services? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select project type</option>
                    <option value="apparel">Corporate Apparel</option>
                    <option value="promotional">Promotional Items</option>
                    <option value="uniforms">Uniforms</option>
                    <option value="events">Event Merchandise</option>
                    <option value="personal">Personal Items</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-charcoal mb-2">
                    Estimated Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select quantity range</option>
                    <option value="1-10">1-10 pieces</option>
                    <option value="11-25">11-25 pieces</option>
                    <option value="26-50">26-50 pieces</option>
                    <option value="51-100">51-100 pieces</option>
                    <option value="100+">100+ pieces</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us about your project... What items do you need embroidered? Do you have artwork ready? What's your timeline?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>

                <p className="text-sm text-primary-600">
                  * Required fields. We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-lg p-6 border border-secondary-200">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Phone</p>
                        <p className="text-primary-600">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <p className="text-primary-600">info@sewinspired.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Address</p>
                        <p className="text-primary-600">
                          123 Craft Street<br />
                          Your City, ST 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-lg p-6 border border-secondary-200">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Business Hours</h3>
                  <div className="space-y-2 text-primary-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Response Info */}
                <div className="bg-secondary-100 rounded-lg p-6 border border-secondary-200">
                  <h3 className="text-lg font-semibold text-primary-700 mb-3">🚀 Quick Response</h3>
                  <p className="text-primary-600 text-sm mb-3">
                    Need a quote fast? Include these details in your message:
                  </p>
                  <ul className="text-sm text-primary-600 space-y-1">
                    <li>• Type of items to be embroidered</li>
                    <li>• Quantity needed</li>
                    <li>• Timeline/deadline</li>
                    <li>• Design description or file</li>
                    <li>• Preferred contact method</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-cream rounded-lg p-6 border border-secondary-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                What's your typical turnaround time?
              </h3>
              <p className="text-primary-600">
                Most orders are completed within 5-7 business days. Rush orders (48-72 hours) 
                are available for an additional fee. Larger orders may require additional time.
              </p>
            </div>

            <div className="bg-cream rounded-lg p-6 border border-secondary-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                Do you have minimum order quantities?
              </h3>
              <p className="text-primary-600">
                No minimum! We're happy to embroider a single item or thousands. 
                However, larger quantities do get better per-piece pricing.
              </p>
            </div>

            <div className="bg-cream rounded-lg p-6 border border-secondary-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                What file formats do you accept for artwork?
              </h3>
              <p className="text-primary-600">
                We accept most common formats including JPG, PNG, PDF, AI, EPS, and SVG. 
                Vector files (AI, EPS, SVG) provide the best results for embroidery.
              </p>
            </div>

            <div className="bg-cream rounded-lg p-6 border border-secondary-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                Can you match specific brand colors?
              </h3>
              <p className="text-primary-600">
                Yes! We have access to hundreds of thread colors and can match most brand colors. 
                We'll send thread samples for approval before production if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}