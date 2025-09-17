import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Ecommerce Website Development South Africa | Online Store Solutions',
  description: 'Professional ecommerce website development in South Africa. Custom online stores, Shopify development, WooCommerce solutions. Increase sales with conversion-optimized e-commerce platforms.',
  keywords: 'ecommerce website development south africa, online store development, shopify developer south africa, woocommerce development, ecommerce solutions cape town, online shop development',
  openGraph: {
    title: 'Ecommerce Website Development South Africa | Online Store Solutions',
    description: 'Professional ecommerce website development in South Africa. Custom online stores, Shopify development, WooCommerce solutions.',
    url: 'https://www.superstack.co.za/ecommerce-website-development-south-africa',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Website Development South Africa | Online Store Solutions',
    description: 'Professional ecommerce website development in South Africa. Custom online stores, Shopify development, WooCommerce solutions.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/ecommerce-website-development-south-africa',
  },
}

function EcommercePlatforms() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Ecommerce Platforms We Specialize In"
          className="mt-24"
        >
          <p>
            Choose the right ecommerce platform for your South African business. 
            We're experts in all major platforms and can recommend the best solution 
            for your specific needs and budget.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900">Shopify Development</h3>
                <p className="text-sm text-gray-600">Perfect for small to medium businesses</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Build stunning Shopify stores optimized for South African customers. 
              Payment gateway integration, inventory management, and mobile-first design.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">PayFast & Ozow integration</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Custom Shopify themes</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">App integrations & automation</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">From R15,000</span>
                <span className="text-sm text-gray-500">Setup fee</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900">WooCommerce Development</h3>
                <p className="text-sm text-gray-600">WordPress-based ecommerce solution</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Powerful WooCommerce stores with full customization control. 
              Perfect for businesses wanting complete ownership of their online store.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Custom WordPress themes</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">SEO-optimized structure</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Advanced product management</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">From R12,000</span>
                <span className="text-sm text-gray-500">Setup fee</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900">Custom React Ecommerce</h3>
                <p className="text-sm text-gray-600">Headless ecommerce solutions</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Lightning-fast custom ecommerce applications built with React and Next.js. 
              Ultimate performance and customization for enterprise clients.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Headless architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">PWA capabilities</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">API-first approach</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">From R45,000</span>
                <span className="text-sm text-gray-500">Development</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900">Magento Development</h3>
                <p className="text-sm text-gray-600">Enterprise ecommerce platform</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Robust Magento stores for large catalogs and complex business requirements. 
              Multi-store management and advanced B2B features.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Multi-store management</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">B2B ecommerce features</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Advanced inventory</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">From R35,000</span>
                <span className="text-sm text-gray-500">Setup fee</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function EcommerceFeatures() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Essential Ecommerce Features for South African Businesses"
          className="mt-24"
        >
          <p>
            Every ecommerce website we build includes these conversion-optimized 
            features designed specifically for the South African market.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <GridList>
            <GridListItem title="PayFast Integration" invert>
              Seamless integration with PayFast, South Africa's leading payment 
              gateway. Accept EFT, credit cards, and instant EFT payments securely.
            </GridListItem>
            
            <GridListItem title="Mobile-First Design" invert>
              Optimized for mobile shopping with fast loading times and intuitive 
              navigation. 70% of SA shoppers use mobile devices.
            </GridListItem>
            
            <GridListItem title="Local Shipping Integration" invert>
              Integration with Courier Guy, PostNet, and other SA shipping providers. 
              Real-time shipping calculations and tracking.
            </GridListItem>
            
            <GridListItem title="Multi-Currency Support" invert>
              Support for ZAR and other currencies with automatic exchange rate updates. 
              Perfect for cross-border African trade.
            </GridListItem>
            
            <GridListItem title="Inventory Management" invert>
              Advanced stock management with low stock alerts, product variants, 
              and automated reorder points for efficient operations.
            </GridListItem>
            
            <GridListItem title="SEO Optimization" invert>
              Built-in SEO features to rank higher on Google South Africa. 
              Structured data, fast loading, and search-friendly URLs.
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

function ROISection() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Increase Sales with Professional Ecommerce Development"
          className="mt-24"
        >
          <p>
            Our ecommerce websites deliver measurable results for South African businesses. 
            See how professional development impacts your bottom line.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">43%</h3>
            <p className="text-gray-600">Average increase in conversion rates with our optimized checkout process</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">R2.3M</h3>
            <p className="text-gray-600">Average annual revenue increase for clients within 12 months</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2.1s</h3>
            <p className="text-gray-600">Average page load time - faster than 90% of ecommerce sites</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function EcommerceWebsiteDevelopmentPage() {
  return (
    <>
      <PageIntro 
        eyebrow="Ecommerce Website Development" 
        title="Professional Online Store Development in South Africa"
      >
        <p>
          Launch your online store with professional ecommerce website development. 
          We build conversion-optimized online shops that increase sales and grow 
          your business. Shopify, WooCommerce, custom solutions - we do it all.
        </p>
      </PageIntro>

      <EcommercePlatforms />
      <EcommerceFeatures />
      <ROISection />
      <ContactSection />
    </>
  )
}
