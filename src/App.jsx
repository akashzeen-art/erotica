import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { SubscriptionProvider } from './contexts/SubscriptionContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import MyAccount from './components/pages/MyAccount'
import LoginModal from './components/features/LoginModal'
import ComingSoon from './components/pages/ComingSoon'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Terms from './components/pages/Terms'
import Refund from './components/pages/Refund'
import Privacy from './components/pages/Privacy'
import ComplaintPolicy from './components/pages/ComplaintPolicy'
import ParentalControls from './components/pages/ParentalControls'
import CookiePolicy from './components/pages/CookiePolicy'
import DMCA from './components/pages/DMCA'
import VideoPlayerPage from './components/pages/VideoPlayerPage'
import BackgroundVideo from './components/features/BackgroundVideo'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Set document title
    document.title = 'Erotica TV'
    
    // Global functions for popup controls
    window.openSubscription = () => {
      const popup = document.getElementById('subscriptionPopup')
      if (popup) popup.classList.add('active')
    }

    window.openVideo = () => {
      const popup = document.getElementById('videoPopup')
      if (popup) popup.classList.add('active')
    }

    // Initialize AOS (Animate On Scroll) with smooth settings
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true, // Keep true for performance, but reset in Home component
        offset: 120,
        delay: 0,
        mirror: false,
        anchorPlacement: 'top-bottom',
      })
      
      // Optimized AOS refresh on resize with debouncing
      let resizeTimeout
      const handleResize = () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          requestAnimationFrame(() => {
            window.AOS.refresh()
          })
        }, 250)
      }
      
      window.addEventListener('resize', handleResize, { passive: true })
      return () => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(resizeTimeout)
      }
    }
  }, [])

  // Optimized route change handler
  useEffect(() => {
    // Scroll to top when route changes (instant for better performance)
    window.scrollTo({ top: 0, behavior: 'auto' })
    
    // Debounced AOS refresh for better performance
    if (typeof window !== 'undefined' && window.AOS) {
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          window.AOS.refresh()
        })
      }, 150)
      
      return () => clearTimeout(timeoutId)
    }
  }, [location.pathname])

  const isVideoPage = location.pathname === '/watch'

  return (
    <SubscriptionProvider>
      <div className="App">
        {!isVideoPage && <BackgroundVideo />}
        <div className="content-wrapper">
          {!isVideoPage && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<VideoPlayerPage />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/complaint-policy" element={<ComplaintPolicy />} />
            <Route path="/parental-controls" element={<ParentalControls />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/dmca" element={<DMCA />} />
          </Routes>
          {!isVideoPage && <Footer />}
        </div>
      </div>
    </SubscriptionProvider>
  )
}

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  )
}

export default App

