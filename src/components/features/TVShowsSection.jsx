import React, { useRef } from 'react'
import { portraitImages, landscapeImages } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './TVShowsSection.css'

const TVShowsSection = () => {
  const scrollContainerRef = useRef(null)
  const { checkAndPlayVideo } = useSubscription()

  // Helper function to truncate description to first 4 words
  const truncateDescription = (description) => {
    if (!description) return ''
    const words = description.split(' ')
    if (words.length <= 4) {
      return description
    }
    return words.slice(0, 4).join(' ') + '...'
  }

  const shows = [
    { id: 1, title: 'Bangkok Moon Heat', genres: ['Velvet', 'Sensual'], duration: '00:33', image: '/images/thaipotrait/1.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/518a3ce1-fdfd-416f-9553-6c2682157662/play_720p.mp4', description: 'Moonlit heat lingers gently across the skin.', views: '3.2K' },
    { id: 2, title: 'Siamese Velvet', genres: ['Desire', 'Passion'], duration: '00:36', image: '/images/thaipotrait/2.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2a598ac2-07a2-4ccc-b0f8-7ab2c417796a/play_720p.mp4', description: 'Velvet moods reflect Siam\'s quiet sensual depth.', views: '4.1K' },
    { id: 3, title: 'Continental Night Temptation', genres: ['Fantasy', 'Nocturne'], duration: '00:34', image: '/images/thaipotrait/3.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/b495bdfe-85e6-4261-bca8-24e07827ed62/play_720p.mp4', description: 'Night temptation builds slowly through atmosphere and closeness.', views: '3.8K' },
    { id: 4, title: 'Golden Lotus Desire', genres: ['Temptation', 'Sensual'], duration: '00:40', image: '/images/thaipotrait/4.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f44d4ed7-d95a-463e-9e4a-087807e06da1/play_360p.mp4', description: 'Golden lotus desire feels refined, warm, and intimate.', views: '4.5K' },
    { id: 5, title: 'Bangkok Velvet Dreams', genres: ['Desire', 'Obsession'], duration: '00:34', image: '/images/thaipotrait/5.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/cba42b25-dc1e-4718-b8a2-e3a1d142fa72/play_360p.mp4', description: 'Dreams in velvet hues blur fantasy and reality.', views: '3.6K' },
    { id: 6, title: 'Soft Siam Nights', genres: ['Sultry', 'Passion'], duration: '00:41', image: '/images/thaipotrait/6.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/e6bed4da-ba6f-41fd-8b00-aab032fb4692/play_360p.mp4', description: 'Soft nights invite calm intimacy and emotional warmth.', views: '4.2K' },
    { id: 7, title: 'Continental Moon Fantasy', genres: ['Obsession', 'Intimacy'], duration: '00:42', image: '/images/thaipotrait/7.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/bfaca667-ab60-4895-b657-f0ba9d98781e/play_360p.mp4', description: 'Moonlit fantasy enhances sensual imagination.', views: '3.9K' },
    { id: 8, title: 'Velour Siam Flow', genres: ['Nocturne', 'Desire'], duration: '00:35', image: '/images/thaipotrait/8.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f9a446de-0140-4222-b3fc-89f91fde4052/play_360p.mp4', description: 'Flowing motion deepens connection and allure.', views: '4.3K' },
    { id: 9, title: 'Lotus Seduction', genres: ['Seductive', 'Tease'], duration: '00:38', image: '/images/thaipotrait/9.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2ccc7a39-6d8f-490f-84d9-89097b52bc00/play_360p.mp4', description: 'Lotus seduction unfolds naturally, unhurried.', views: '3.7K' },
    { id: 10, title: 'Bangkok Heatwave', genres: ['Velvet', 'Passion'], duration: '00:36', image: '/images/thaipotrait/10.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/e345de9b-0e6b-4ddc-b9be-0d23fbabf122/play_360p.mp4', description: 'A slow heatwave sweeps through Bangkok nights.', views: '4.0K' },
    { id: 11, title: 'Continental Silk Allure', genres: ['Tease', 'Temptation'], duration: '00:39', image: '/images/thaipotrait/11.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f988302e-f5f2-4a87-a883-0496daeaf50b/play_360p.mp4', description: 'Silk allure teases touch and attention.', views: '3.5K' },
    { id: 12, title: 'Midnight Siam Fantasy', genres: ['Mystique', 'Desire'], duration: '00:37', image: '/images/thaipotrait/12.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/e4aca7f7-2482-476e-a216-c959e6b4e2a6/play_360p.mp4', description: 'Fantasy peaks as midnight deepens intimacy.', views: '4.4K' },
    { id: 13, title: 'Golden Bangkok Glow', genres: ['Euphoria', 'Passion'], duration: '00:40', image: '/images/thaipotrait/13.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/8aa39582-e410-4144-8477-afe3f604704f/play_360p.mp4', description: 'Golden glow enhances softness and closeness.', views: '3.4K' },
    { id: 14, title: 'Continental Velvet Nights', genres: ['Allure', 'Forbidden'], duration: '00:41', image: '/images/thaipotrait/14.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/35e57b88-fd4a-4fa2-9313-f93ba8c57e26/play_360p.mp4', description: 'Velvet nights invite indulgent sensual escape.', views: '4.6K' },
    { id: 15, title: 'Lotus Moon Desire', genres: ['Dreamlike', 'Hypnotic'], duration: '00:43', image: '/images/thaipotrait/15.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/6494e42e-308b-4d44-b95c-db98b6aebfb0/play_360p.mp4', description: 'Moonlit lotus desire feels gentle and consuming.', views: '3.3K' }
  ]

  const handleThumbnailClick = (show) => {
    const videoData = {
      url: show.videoUrl,
      title: show.title,
      description: show.description || show.genres.join(' • ')
    }
    checkAndPlayVideo(videoData)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="space-1 bg-gray-2800 tv-shows-section" data-aos="fade-up">
      <div className="container my-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
            <header className="centered-header" data-aos="fade-down">
              <h3 className="display-7 text-white mb-3 font-weight-semi-bold text-center">
                Solo Continental Sensual Fantasy — Watch Now!
              </h3>
            </header>
          </div>
        </div>
        <div className="row mb-xl-5">
          <div className="col-12 tv-shows-scroll-wrapper" style={{ paddingLeft: 0, paddingRight: 0, position: 'relative' }}>
            <button 
              className="tv-shows-scroll-btn tv-shows-scroll-left"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              ref={scrollContainerRef}
              className="row row-cols-2 row-cols-md-5 tv-shows-scroll-container" 
              style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'hidden', marginLeft: 0, marginRight: 0 }}
            >
              {shows.map((show, index) => (
                <div key={show.id} className="col mb-5 mb-xl-0" data-aos="fade-up" data-aos-delay={index * 100} style={{ flex: '0 0 auto', minWidth: '150px', paddingLeft: '12px', paddingRight: '12px' }}>
                  <div className="product">
                    <div className="product-image mb-2 product-image-portrait">
                      <div 
                        className="d-inline-block position-relative stretched-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleThumbnailClick(show)}
                      >
                        <img className="img-fluid" src={portraitImages[show.id - 1]} alt={show.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="play-overlay">
                          <div className="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-1300 font-size-12">{show.duration} mins</span>
                    <div className="product-title font-weight-bold font-size-1">
                      <a href="#" className="product-title-link" onClick={(e) => { e.preventDefault(); handleThumbnailClick(show); }}>{show.title}</a>
                    </div>
                    {show.description && (
                      <p className="product-description text-gray-1300 font-size-11 mb-1 mt-1">
                        {truncateDescription(show.description)}
                      </p>
                    )}
                    {show.views && (
                      <span className="product-views text-gray-1300 font-size-11">
                        {show.views} views
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="tv-shows-scroll-btn tv-shows-scroll-right"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TVShowsSection

