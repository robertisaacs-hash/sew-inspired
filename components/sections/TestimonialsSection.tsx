'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    company: 'Johnson Consulting',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Sew Inspired transformed our company polo shirts with beautiful embroidered logos. The quality is outstanding and the turnaround time was exactly as promised. Highly recommend!'
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    role: 'Event Coordinator',
    company: 'City Sports League',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'We needed 50 team jerseys embroidered quickly for our tournament. They delivered exceptional quality on time and within budget. The team looked professional and unified.'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Marketing Director',
    company: 'TechStart Inc.',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'The custom hoodies for our trade show were perfect! The embroidery was crisp, colors were vibrant, and they helped us stand out from the competition. Great customer service too.'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Restaurant Owner',
    company: 'Golden Dragon Restaurant',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Professional embroidered aprons and chef coats for our staff. The quality has held up beautifully even with frequent washing. Our customers always compliment the professional look.'
  },
  {
    id: 5,
    name: 'Lisa Williams',
    role: 'School Principal',
    company: 'Westfield Elementary',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Amazing work on our school spirit wear! The parents love the quality and the kids are so proud to wear their embroidered school items. Will definitely order again.'
  },
  {
    id: 6,
    name: 'Robert Taylor',
    role: 'Non-Profit Director',
    company: 'Community Helpers',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Sew Inspired helped us create beautiful volunteer t-shirts for our fundraising event. They even worked within our tight budget and delivered ahead of schedule.'
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses and individuals 
            have to say about our embroidery services.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-cream rounded-lg shadow-lg p-8 mb-12 max-w-4xl mx-auto border border-secondary-200">
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl text-primary-600 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-secondary-200 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-charcoal">{currentTestimonial.name}</div>
                <div className="text-primary-600">{currentTestimonial.role}</div>
                <div className="text-primary-600 text-sm">{currentTestimonial.company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-secondary-200 hover:bg-secondary-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-secondary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-secondary-200 hover:bg-secondary-300 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-cream rounded-lg p-6 shadow-sm border border-secondary-200 transition-all cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-primary-500' : 'hover:shadow-md hover:border-secondary-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary-600 text-sm mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-charcoal text-sm">{testimonial.name}</div>
                  <div className="text-primary-600 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the quality and service that our customers love. 
              Get a free quote for your custom embroidery project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/custom-design" className="btn-primary">
                Start Your Design
              </a>
              <a href="/contact" className="btn-outline">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}