import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkflowSection from './components/WorkflowSection'
import PricingSection from './components/PricingSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WorkflowSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default App
