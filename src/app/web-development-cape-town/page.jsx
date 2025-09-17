export const metadata = {
  title: 'Web Development Cape Town | React Developer Cape Town | SuperStack',
  description: 'Leading web development company in Cape Town. Expert React developers, custom software solutions, and business automation for Cape Town businesses. Local Western Cape team.',
  keywords: [
    'web development Cape Town',
    'React developer Cape Town',
    'software development Western Cape',
    'Cape Town web developer',
    'custom software Cape Town',
    'business automation Cape Town'
  ]
}

export default function WebDevelopmentCapeTown() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Web Development Services in Cape Town
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Cape Town's premier web development company. We build custom React applications, 
          business automation tools, and software solutions for Western Cape businesses.
        </p>

        <div className="prose max-w-none">
          <h2>Why Choose SuperStack for Cape Town Web Development?</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-blue-900 mb-4">🏔️ Local Cape Town Advantage</h3>
            <ul className="text-blue-800">
              <li><strong>Local Team:</strong> Based in Cape Town, understand local business needs</li>
              <li><strong>Face-to-Face Meetings:</strong> In-person consultations across Western Cape</li>
              <li><strong>Load Shedding Ready:</strong> Applications that work during power outages</li>
              <li><strong>Mobile-First:</strong> Perfect for Cape Town's mobile-heavy user base</li>
              <li><strong>Local References:</strong> Established client base in Cape Town</li>
            </ul>
          </div>

          <h2>Our Cape Town Web Development Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3>🚀 Custom Web Applications</h3>
              <p>
                React and Next.js applications built specifically for Cape Town businesses. 
                From tourism platforms to fintech solutions.
              </p>
              <ul>
                <li>E-commerce for Cape Town retailers</li>
                <li>Tourism and hospitality platforms</li>
                <li>Property management systems</li>
                <li>Restaurant and cafe booking systems</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3>⚡ Business Automation</h3>
              <p>
                Python automation and workflow solutions designed for Cape Town's 
                diverse business landscape.
              </p>
              <ul>
                <li>Inventory management systems</li>
                <li>Customer relationship management</li>
                <li>Automated reporting and analytics</li>
                <li>Integration with local payment gateways</li>
              </ul>
            </div>
          </div>

          <h2>Cape Town Industries We Serve</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-4">
              <h4>🍷 Wine & Tourism</h4>
              <p>Booking platforms, wine club management, tour scheduling</p>
            </div>
            <div className="text-center p-4">
              <h4>🏠 Property & Real Estate</h4>
              <p>Property listings, rental management, virtual tours</p>
            </div>
            <div className="text-center p-4">
              <h4>⚡ Renewable Energy</h4>
              <p>Solar monitoring, energy management, grid-tie systems</p>
            </div>
          </div>

          <h2>Cape Town Business Success Stories</h2>
          <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-gray-700">
            "SuperStack understands Cape Town businesses. They built our wine cellar 
            management system that handles everything from harvest tracking to export 
            documentation. Their local knowledge made all the difference."
            <footer className="mt-2 text-sm text-gray-500">
              - Wine Estate Owner, Stellenbosch
            </footer>
          </blockquote>

          <h2>Ready to Start Your Cape Town Web Development Project?</h2>
          <p>
            Let's meet for coffee in Cape Town and discuss how we can transform your 
            business with custom web development solutions.
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg mt-8">
            <h3 className="text-indigo-900 mb-4">Get Started Today</h3>
            <p className="text-indigo-700 mb-4">
              <strong>Free consultation for Cape Town businesses.</strong> Let's discuss 
              your project over coffee in the Mother City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://cal.com/superstack/consultation"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-indigo-700 text-center"
              >
                Book Free Consultation
              </a>
              <a 
                href="tel:+27123456789"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg inline-block hover:bg-indigo-50 text-center"
              >
                Call: +27 12 345 6789
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
