import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Mining Software Solutions South Africa | Custom Mining Technology',
  description: 'Specialized software development for South African mining companies. Safety systems, asset management, compliance tracking, and operational efficiency solutions for the mining industry.',
  keywords: 'mining software South Africa, mining technology solutions, mining asset management, mining safety software, mining compliance systems, mining operations software',
  openGraph: {
    title: 'Mining Software Solutions South Africa | Custom Mining Technology',
    description: 'Specialized software development for South African mining companies. Safety systems, asset management, compliance tracking, and operational efficiency solutions.',
    url: 'https://www.superstack.co.za/mining-software-solutions',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mining Software Solutions South Africa | Custom Mining Technology',
    description: 'Specialized software development for South African mining companies. Safety systems, asset management, compliance tracking, and operational efficiency solutions.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/mining-software-solutions',
  },
}

function IndustryOverview() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <SectionIntro
          title="Technology for South Africa's Mining Industry"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            South Africa's mining sector drives the economy, from gold and platinum 
            to coal and diamonds. Our specialized software solutions help mining 
            companies operate safely, efficiently, and profitably in challenging conditions.
          </p>
        </SectionIntro>
      </FadeIn>
    </Container>
  )
}

function MiningSolutions() {
  return (
    <Container className="mt-16">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Mining Industry Challenges We Solve
        </h2>
        
        <GridList className="mt-10">
          <GridListItem title="Safety Management Systems">
            Real-time monitoring of safety protocols, incident reporting, and 
            compliance tracking to protect workers and maintain operational licenses.
          </GridListItem>
          
          <GridListItem title="Asset & Equipment Management">
            Track expensive mining equipment, schedule maintenance, monitor 
            performance, and optimize utilization across multiple sites.
          </GridListItem>
          
          <GridListItem title="Production Optimization">
            Monitor extraction rates, analyze geological data, and optimize 
            production processes to maximize yield and profitability.
          </GridListItem>
          
          <GridListItem title="Compliance & Reporting">
            Automated compliance tracking for Mining Charter requirements, 
            environmental regulations, and government reporting obligations.
          </GridListItem>
          
          <GridListItem title="Supply Chain Management">
            Coordinate complex supply chains from extraction to export, 
            managing logistics across remote mining locations.
          </GridListItem>
          
          <GridListItem title="Financial Controls">
            Accurate cost tracking, revenue optimization, and financial controls 
            for complex mining operations and joint ventures.
          </GridListItem>
        </GridList>
      </FadeIn>
    </Container>
  )
}

function TechnicalCapabilities() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Technical Solutions for Mining Operations"
          className="mt-24"
        >
          <p>
            Mining operations require robust, secure technology that works in 
            challenging environments. Our solutions are built for the unique 
            demands of South African mining companies.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Real-time Monitoring & IoT Integration
            </h3>
            <p className="mt-4 text-neutral-600">
              Connect sensors, equipment, and monitoring devices across mining 
              sites. Real-time dashboards provide instant visibility into safety 
              conditions, equipment status, and production metrics.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Mobile Solutions for Remote Sites
            </h3>
            <p className="mt-4 text-neutral-600">
              Mobile applications that work offline and sync when connectivity 
              is available. Perfect for remote mining sites with limited 
              internet connectivity.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Data Analytics & Reporting
            </h3>
            <p className="mt-4 text-neutral-600">
              Advanced analytics to identify patterns, predict equipment failures, 
              optimize production schedules, and generate compliance reports for 
              regulatory authorities.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Integration with Mining Systems
            </h3>
            <p className="mt-4 text-neutral-600">
              Seamless integration with existing mining software, SCADA systems, 
              geological modeling tools, and enterprise resource planning (ERP) systems.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function ROI() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Measurable Impact for Mining Companies"
          className="mt-24"
        >
          <p>
            Our mining software solutions deliver tangible returns through 
            improved safety, operational efficiency, and regulatory compliance.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <GridList>
            <GridListItem title="Safety Improvements" invert>
              Reduce workplace incidents by 40% through real-time monitoring, 
              automated safety protocols, and comprehensive incident tracking systems.
            </GridListItem>
            
            <GridListItem title="Equipment Efficiency" invert>
              Increase equipment uptime by 25% through predictive maintenance, 
              optimized scheduling, and proactive replacement planning.
            </GridListItem>
            
            <GridListItem title="Compliance Automation" invert>
              Reduce compliance reporting time by 60% with automated data collection, 
              real-time monitoring, and streamlined regulatory submissions.
            </GridListItem>
            
            <GridListItem title="Cost Optimization" invert>
              Lower operational costs by 15% through optimized resource allocation, 
              reduced downtime, and improved production planning.
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhyChooseUs() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Why Mining Companies Choose Our Solutions"
          className="mt-24"
        >
          <p>
            Deep understanding of South African mining regulations, operational 
            challenges, and the unique requirements of working in remote, 
            challenging environments.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Mining Industry Expertise
            </h3>
            <p className="mt-4 text-neutral-600">
              Years of experience working with SA mining companies, understanding 
              Mining Charter requirements, safety regulations, and operational complexities.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Rugged, Reliable Solutions
            </h3>
            <p className="mt-4 text-neutral-600">
              Software built to work in harsh mining environments, with offline 
              capabilities, robust security, and 99.9% uptime guarantees.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Scalable for Any Operation
            </h3>
            <p className="mt-4 text-neutral-600">
              From small mining operations to major multinational corporations, 
              our solutions scale to meet your operational requirements and growth plans.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              24/7 Support & Maintenance
            </h3>
            <p className="mt-4 text-neutral-600">
              Critical mining operations can't afford downtime. Our support team 
              provides 24/7 monitoring, rapid response, and proactive maintenance.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function MiningSoftwarePage() {
  return (
    <>
      <PageIntro 
        eyebrow="Mining Software Solutions" 
        title="Technology Solutions for South Africa's Mining Industry"
      >
        <p>
          Specialized software development for mining companies across South Africa. 
          From safety management to production optimization, we build solutions that 
          help mining operations work safer, smarter, and more profitably.
        </p>
      </PageIntro>

      <IndustryOverview />
      <MiningSolutions />
      <TechnicalCapabilities />
      <ROI />
      <WhyChooseUs />
      <ContactSection />
    </>
  )
}
