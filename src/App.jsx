import { useEffect } from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import VisionPreview from './components/VisionPreview/VisionPreview'
import TestPreview from './components/TestPreview/TestPreview'
import HowItWorks from './components/HowItWorks/HowItWorks'
import PlansPreview from './components/PlansPreview/PlansPreview'
import Resources from './components/Resources/Resources'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Vision from './pages/Vision/Vision'
import Features from './pages/Features/Features'
import Plans from './pages/Plans/Plans'
import Test from './pages/Test/Test'
import ResourcesPage from './pages/Resources/ResourcesPage'
import FAQPage from './pages/FAQ/FAQPage'
import AppPage from './pages/App/AppPage'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <VisionPreview />
      <TestPreview />
      <HowItWorks />
      <PlansPreview />
      <Resources />
      <FAQ />
    </>
  )
}

function AppContent() {
  const { pathname } = useLocation()
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      setScrolledPastHero(false)
      return
    }

    const handleScroll = () => {
      // hero is min-height: 100vh, so trigger once we've scrolled past most of it
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // check initial position on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const showNavbar = pathname !== '/' || scrolledPastHero

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar visible={showNavbar} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/features" element={<Features />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/test" element={<Test />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App