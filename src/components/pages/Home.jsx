import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../features/HeroSection'
import PopularMovies from '../features/PopularMovies'
import MoviesCarousel from '../features/MoviesCarousel'
import FeaturedMovie from '../features/FeaturedMovie'
import TVShowsSection from '../features/TVShowsSection'
import EpisodesSection from '../features/EpisodesSection'
import FeaturedTVEpisodes from '../features/FeaturedTVEpisodes'
import NewestMovies from '../features/NewestMovies'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // Only run when on Home page
    if (location.pathname !== '/') return

    // Reset body overflow
    document.body.style.overflow = ''
    
    // Scroll to top when returning to Home
    window.scrollTo({ top: 0, behavior: 'auto' })
    
    // Ensure all sections are visible
    const ensureVisibility = () => {
      const sections = document.querySelectorAll('.popular-movies-section, .movies-carousel-section, .featured-movie-section, .tv-shows-section, .episodes-section, .featured-tv-episodes-section, .bg-transparent section')
      sections.forEach(section => {
        if (section) {
          section.style.display = 'block'
          section.style.visibility = 'visible'
          section.style.opacity = '1'
          section.style.height = 'auto'
        }
      })
    }
    
    // Force AOS to re-initialize all elements
    if (typeof window !== 'undefined' && window.AOS) {
      // Remove all AOS classes to force re-initialization
      const aosElements = document.querySelectorAll('[data-aos]')
      aosElements.forEach(el => {
        el.classList.remove('aos-animate')
        el.removeAttribute('data-aos-animate')
        // Ensure element is visible
        el.style.opacity = '1'
        el.style.visibility = 'visible'
        el.style.display = ''
      })
      
      // Ensure visibility first
      ensureVisibility()
      
      // Multiple refresh calls to ensure elements are re-initialized
      requestAnimationFrame(() => {
        window.AOS.refresh()
        
        // Additional refresh after a short delay to ensure DOM is ready
        setTimeout(() => {
          window.AOS.refresh()
          ensureVisibility()
          
          // Force re-animation of elements
          aosElements.forEach((el, index) => {
            setTimeout(() => {
              if (el && el.offsetParent !== null) { // Check if element is visible
                el.classList.add('aos-animate')
              }
            }, index * 50)
          })
        }, 150)
        
        // Final refresh after animations
        setTimeout(() => {
          window.AOS.refresh()
          ensureVisibility()
        }, 500)
      })
    } else {
      // Even without AOS, ensure visibility
      ensureVisibility()
    }
    
    // Force CSS animations to re-trigger by removing and re-adding animation classes
    const animatedSections = document.querySelectorAll('.popular-movies-section, .movies-carousel-section, .featured-movie-section, .tv-shows-section, .episodes-section, .featured-tv-episodes-section')
    animatedSections.forEach(section => {
      if (section) {
        section.style.animation = 'none'
        requestAnimationFrame(() => {
          section.style.animation = ''
          section.style.opacity = '1'
          section.style.visibility = 'visible'
          section.style.display = 'block'
        })
      }
    })
  }, [location.pathname])

  return (
    <>
      <HeroSection />
      
      <div>
        <div>
          <PopularMovies />
        </div>
        
        <div>
          <MoviesCarousel sectionTitle="Trending Continental Sensual Fantasies Everyone’s Watching — Watch Now!" />
        </div>
        
        <div>
          <FeaturedMovie />
        </div>
        
        <div>
          <TVShowsSection />
        </div>
        
        <div>
          <EpisodesSection />
        </div>
        
        <div>
          <FeaturedTVEpisodes />
        </div>
        
        <div>
          <MoviesCarousel sectionTitle="Top Liked Erotic Sensation Experiences — Watch Now!" variant="dark" />
        </div>
        
        <div>
          <section className="bg-transparent">
            <div className="container px-md-4">
              <div className="row">
                <NewestMovies />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Subscription Popup */}
      <div className="popup-overlay" id="subscriptionPopup" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="popup" style={{
          background: '#FFFFFF',
          border: '2px solid #DC143C',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '400px',
          width: '90%',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#000000', marginBottom: '20px' }}>Join Our Yoga Community</h3>
          <input 
            type="tel" 
            id="phoneInput" 
            placeholder="Enter your phone number" 
            maxLength="10"
            style={{
              width: '100%',
              padding: '15px',
              background: '#F5F5F5',
              border: '1px solid #DC143C',
              borderRadius: '10px',
              color: '#000000',
              marginBottom: '20px'
            }}
          />
          <button 
            onClick={() => {
              const phone = document.getElementById('phoneInput').value
              if (phone.length >= 8) {
                alert('Welcome to our Yoga Community! Your subscription is active.')
                document.getElementById('subscriptionPopup').style.display = 'none'
              } else {
                alert('Please enter a valid phone number.')
              }
            }}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(45deg, #DC143C, #C41E3A)',
              border: 'none',
              borderRadius: '10px',
              color: '#8B0000',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Video Popup */}
      <div className="popup-overlay" id="videoPopup" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="popup" style={{
          background: '#FFFFFF',
          border: '2px solid #DC143C',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '800px',
          width: '90%',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#000000', marginBottom: '20px' }}>Yoga Session</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, margin: '20px 0' }}>
            <video 
              id="popupVideo" 
              controls
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '10px'
              }}
            >
              <source src="https://vz-c24330ce-140.b-cdn.net/9de96650-98d4-41fd-87f2-4697d8535d29/play_720p.mp4" type="video/webm" />
            </video>
          </div>
          <button 
            onClick={() => {
              document.getElementById('videoPopup').style.display = 'none'
              document.getElementById('popupVideo').pause()
            }}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(45deg, #DC143C, #C41E3A)',
              border: 'none',
              borderRadius: '10px',
              color: '#8B0000',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

