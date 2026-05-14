import React, { useRef, useEffect } from 'react'
import { landscapeImages } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import bannerImage from '../../assets/images/bannerimg.jpg'
import './FeaturedMovie.css'

const FeaturedMovie = () => {
  const videoRef = useRef(null)
  const { checkAndPlayVideo } = useSubscription()

  const featuredMovie = {
    title: 'Silken Continental Nights',
    description: 'Silky Thai nights unfold desire through warm lighting, graceful movement, and slow intimate energy.',
    logoImage: landscapeImages[10],
    backgroundImage: bannerImage,
    backgroundVideo: 'https://vz-c24330ce-140.b-cdn.net/9de96650-98d4-41fd-87f2-4697d8535d29/play_720p.mp4',
    videoUrl: 'https://vz-c24330ce-140.b-cdn.net/9de96650-98d4-41fd-87f2-4697d8535d29/play_720p.mp4'
  }

  const handleLogoClick = () => {
    const videoData = {
      url: featuredMovie.videoUrl,
      title: featuredMovie.title,
      description: 'Featured Movie'
    }
    checkAndPlayVideo(videoData)
  }

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err)
      })
    }
  }, [])

  return (
    <div className="bg-img-hero space-3 featured-movie-section has-video position-relative overflow-hidden" data-aos="fade-up">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="featured-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => {
          // Hide video and show image on error
          if (videoRef.current) {
            videoRef.current.style.display = 'none'
          }
        }}
      >
        <source src={featuredMovie.backgroundVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Image Background (fallback) */}
      <div
        className="featured-bg-image"
        style={{ backgroundImage: `url(${featuredMovie.backgroundImage})` }}
      />

      <div className="container px-md-4 position-relative z-index-2">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div>
              <img 
                className="img-fluid mb-6 d-block animate-scale featured-logo" 
                src={featuredMovie.logoImage} 
                alt="Logo" 
                style={{width: '214px', height: '120px', objectFit: 'cover', cursor: 'pointer'}} 
                data-aos="zoom-in"
                onClick={handleLogoClick}
              />
              <a href="#" className="display-8 h-w-primary d-inline-block font-secondary mb-6" data-aos="fade-up" data-aos-delay="200">
                {featuredMovie.title}
              </a>
              <p className="text-gray-1800 mb-6 font-secondary d-block font-size-1 font-weight-medium" data-aos="fade-up" data-aos-delay="400">
                {featuredMovie.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMovie

