import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home/Home'
import AssessmentPage from './pages/AssessmentPage/AssessmentPage'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'
import PricingPage from './pages/PricingPage/PricingPage'
import ResourcesPage from './pages/ResourcesPage/ResourcesPage'
import ArticlePage from './pages/ArticlePage/ArticlePage' 
import PanicPage from './pages/PanicPage/PanicPage'
import ContactPage from './pages/ContactPage/ContactPage'
import FAQPage from './pages/FAQPage/FAQPage'
import GetStartedPage from './pages/GetStartedPage/GetStartedPage'

function App() {
  return (
    <div>
      <Routes>
        {/* Panic Page (No Navbar/Footer) */}
        <Route path="/panic" element={<PanicPage />} />
        
        {/* Main Site (With Navbar/Footer) */}
        <Route path="/*" element={
          <>
           <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/get-started" element={<GetStartedPage />} />
              
              <Route path="/article/:id" element={<ArticlePage />} />
              
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App