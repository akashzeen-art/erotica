import React from 'react'
import { portraitImages, landscapeImages, getPortraitVideo } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './PopularMovies.css'

const PopularMovies = () => {
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

  const movies = [
    { id: 1, title: 'Bangkok Velvet', year: '2024', genres: ['Velvet', 'Sensual'], duration: '00:33', image: '/src/assets/images/thailandscape/1.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/0a47b89c-f806-4da7-963c-f643df20384d/play_360p.mp4', description: 'Bangkok\'s velvet nights whisper temptation through shadowed rooms, soft rhythms, and lingering desire.', views: '3.2K' },
    { id: 2, title: 'Golden Lotus Glow', year: '2024', genres: ['Nocturne', 'Mystique'], duration: '00:36', image: '/src/assets/images/thailandscape/2.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2b5ac4d7-9fbb-4b55-831f-36db8b2a943d/play_360p.mp4', description: 'Golden lotus light bathes bodies in warmth, awakening sensual curiosity and intimate fascination.', views: '4.1K' },
    { id: 3, title: 'Midnight Siam', year: '2024', genres: ['Erotic', 'Sensual'], duration: '00:34', image: '/src/assets/images/thailandscape/3.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/a84f9987-35bd-4a13-b565-036ebcb60184/play_360p.mp4', description: 'Midnight in Siam stirs hidden cravings through silence, closeness, and slow-burning attraction.', views: '3.8K' },
    { id: 4, title: 'Thai Moon Allure', year: '2024', genres: ['Intimacy', 'Passion'], duration: '00:40', image: '/src/assets/images/thailandscape/4.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/dfc3629e-ee75-41d8-abd8-a66f73ffb6db/play_360p.mp4', description: 'Moonlit Thai allure draws attention through gentle motion, soft gazes, and exotic atmosphere.', views: '4.5K' },
    { id: 5, title: 'Velvet Siam Dreams', year: '2024', genres: ['Velvet', 'Aesthetic'], duration: '00:34', image: '/src/assets/images/thailandscape/5.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/4b8d8855-2f64-4b3d-ae07-c067b215a98e/play_360p.mp4', description: 'Velvet dreams drift across Siam nights, blending fantasy, warmth, and intimate emotion.', views: '3.6K' },
    { id: 6, title: 'Temple Desire', year: '2024', genres: ['Sensual', 'Desire'], duration: '00:41', image: '/src/assets/images/thailandscape/6.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/5abc5b2f-ae44-44f6-9643-dfdd32789308/play_360p.mp4', description: 'Sacred spaces inspire desire through reverent movement, hushed tones, and magnetic presence.', views: '4.2K' },
    { id: 7, title: 'Crimson Thai Whisper', year: '2024', genres: ['Fantasy', 'Allure'], duration: '00:42', image: '/src/assets/images/thailandscape/7.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2833ee01-9aae-416d-a960-3b3cdb6f4884/play_360p.mp4', description: 'Crimson hues whisper temptation, wrapping the senses in deep, sultry Thai intimacy.', views: '3.9K' },
    { id: 8, title: 'Bangkok After Dark', year: '2024', genres: ['Nocturne', 'Dreamlike'], duration: '00:33', image: '/src/assets/images/thailandscape/8.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f25d6cc4-e22d-40c8-a41b-22057ef5fb45/play_360p.mp4', description: 'After dark, Bangkok pulses with sensual tension and unspoken longing.', views: '4.3K' },
    { id: 9, title: 'Continental Silk Fantasy', year: '2024', genres: ['Passion', 'Intimacy'], duration: '00:40', image: '/src/assets/images/thailandscape/9.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/01596cdb-8c0e-4120-b0cb-3e9428bc555b/play_360p.mp4', description: 'Continental Silk Fantasy flows smoothly, awakening touch, warmth, and visual desire.', views: '3.7K' },
    { id: 10, title: 'Lotus Heat', year: '2024', genres: ['Erotic', 'Temptation'], duration: '00:34', image: '/src/assets/images/thailandscape/10.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/53fac0d7-e740-4884-a731-0ae0e0684c76/play_360p.mp4', description: 'Lotus heat rises slowly, blending calm elegance with simmering sensual intensity.', views: '4.0K' },
    { id: 11, title: 'Siam Seduction', year: '2024', genres: ['Euphoria', 'Sensual'], duration: '00:41', image: '/src/assets/images/thailandscape/11.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/841bfc05-962e-4573-a830-edb196526a34/play_360p.mp4', description: 'Siamese seduction unfolds through confident presence and deliberate, intimate pacing.', views: '3.5K' },
    { id: 12, title: 'Exotic Continental Pulse', year: '2024', genres: ['Dreamlike', 'Mystique'], duration: '00:38', image: '/src/assets/images/thailandscape/12.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/b196841a-2ed1-480d-a2c0-7b45bcee8329/play_360p.mp4', description: 'A steady exotic pulse guides emotion, rhythm, and sensual connection.', views: '4.4K' }
  ]

  const handleThumbnailClick = (movie) => {
    const videoData = {
      url: movie.videoUrl,
      title: movie.title,
      description: movie.description || `${movie.year} • ${movie.genres.join(', ')}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <section className="bg-gray-1100 dark popular-movies-section">
      <div className="container px-md-4">
        {/* Centered Header Above Thumbnails */}
        <div className="row">
          <div className="col-12">
            <header className="text-center popular-movies-header" data-aos="fade-down">
              <h3 className="display-7 text-white mb-3 font-weight-semi-bold">
                Most Watched Continental Temptation Sessions — Watch Now
              </h3>
              <p className="text-gray-1300 font-secondary font-weight-medium">
                Continental Seduction Sessions Everyone’s Watching
              </p>
            </header>
          </div>
        </div>

        {/* 3x4 Grid Layout - Centered Thumbnails */}
        <div className="row justify-content-center popular-movies-grid">
          <div className="col-12">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
              {movies.map((movie, index) => (
                <div key={movie.id} className="col mb-5 mb-xl-4" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="product">
                    <div className="product-image mb-2 product-image-landscape">
                      <div 
                        className="d-inline-block position-relative stretched-link product-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleThumbnailClick(movie)}
                      >
                        <img className="img-fluid" src={landscapeImages[movie.id - 1]} alt={movie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'cover', maxWidth: '100%' }} />
                        <div className="play-overlay">
                          <div className="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-1300 font-size-12">{movie.duration} mins</span>
                    <div className="product-title font-weight-bold font-size-1">
                      <a href="#" className="product-title-link" onClick={(e) => { e.preventDefault(); handleThumbnailClick(movie); }}>{movie.title}</a>
                    </div>
                    {movie.description && (
                      <p className="product-description text-gray-1300 font-size-11 mb-1 mt-1">
                        {truncateDescription(movie.description)}
                      </p>
                    )}
                    {movie.views && (
                      <span className="product-views text-gray-1300 font-size-11">
                        {movie.views} views
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularMovies

