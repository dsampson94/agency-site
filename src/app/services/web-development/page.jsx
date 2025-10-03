export const metadata = {
  title: 'Web Development Services | SuperStack Cape Town',
  description: 'Professional web development services in Cape Town. Custom React, Next.js applications, e-commerce solutions, and business platforms. Your technology partner for growth.',
  keywords: [
    'web development Cape Town',
    'React developer South Africa',
    'Next.js development services',
    'custom web applications',
    'e-commerce development',
    'business website development'
  ]
}

export default function WebDevelopmentServices() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Professional Web Development Services in Cape Town
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Transform your business with custom web applications built by Cape Town's 
          leading React and Next.js development team.
        </p>

        <div className="prose max-w-none">
          <h2>Why Choose SuperStack for Web Development?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3>🚀 Modern Technology Stack</h3>
              <ul>
                <li>React & Next.js applications</li>
                <li>TypeScript for reliability</li>
                <li>Cloud-native architecture</li>
                <li>Mobile-responsive design</li>
              </ul>
            </div>
            
            <div>
              <h3>🏆 South African Expertise</h3>
              <ul>
                <li>Cape Town-based development team</li>
                <li>Local business understanding</li>
                <li>Timezone-friendly communication</li>
                <li>Local business understanding</li>
              </ul>
            </div>
          </div>

          <h2>Our Web Development Services</h2>
          
          <h3>Custom Web Applications</h3>
          <p>
            Build scalable web applications tailored to your business needs. From 
            simple landing pages to complex business management platforms.
          </p>

          <h3>E-commerce Development</h3>
          <p>
            Launch your online store with custom e-commerce solutions. Integrated 
            payments, inventory management, and customer analytics.
          </p>

          <h3>Business Dashboards</h3>
          <p>
            Centralize your business operations with custom dashboards. Real-time 
            analytics, reporting, and process management.
          </p>

          <h2>Why Cape Town Businesses Choose Us</h2>
          <p>
            As your local technology partner, we understand the unique challenges 
            facing South African businesses. From load shedding considerations to 
            mobile-first user bases, we build solutions that work in the real world.
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg mt-8">
            <h3 className="text-indigo-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-indigo-700 mb-4">
              Let's discuss your web development needs and create a solution that 
              drives your business forward.
            </p>
            <a 
              href="https://cal.com/superstack/consultation"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-indigo-700"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
