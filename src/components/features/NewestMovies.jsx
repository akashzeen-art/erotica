import React, { useState } from 'react'
import { portraitImages, landscapeImages } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './NewestMovies.css'

const NewestMovies = () => {
  const [activeTab, setActiveTab] = useState('today')
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

  const featuredMovie = {
    year: '2020',
    title: 'Lotus Desire',
    description: 'Desire opens gently, like lotus petals in warm air.',
    image: landscapeImages[0],
    videoUrl: 'https://vz-c24330ce-140.b-cdn.net/0a47b89c-f806-4da7-963c-f643df20384d/play_360p.mp4',
    views: '4.2K'
  }

  const movies = [
    { id: 1, year: '2017', title: 'Velvet Bangkok Nights', genres: ['Nocturne', 'Sensual'], image: landscapeImages[1], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2b5ac4d7-9fbb-4b55-831f-36db8b2a943d/play_360p.mp4', description: 'Velvet nights in Bangkok invite indulgence and curiosity.', views: '3.8K' },
    { id: 2, year: '1998', title: 'Sacred Siam Heat', genres: ['Erotic', 'Sensual'], image: landscapeImages[2], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/a84f9987-35bd-4a13-b565-036ebcb60184/play_360p.mp4', description: 'Sacred heat blends reverence with restrained erotic energy.', views: '4.1K' },
    { id: 3, year: '2019', title: 'Continental Moon Temptation', genres: ['Intimacy', 'Passion'], image: landscapeImages[3], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/dfc3629e-ee75-41d8-abd8-a66f73ffb6db/play_360p.mp4', description: 'Moonlit temptation draws attention through subtle movement.', views: '3.9K' },
    { id: 4, year: '2021', title: 'Silk Temple Dreams', genres: ['Velvet', 'Aesthetic'], image: landscapeImages[4], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/4b8d8855-2f64-4b3d-ae07-c067b215a98e/play_360p.mp4', description: 'Temple dreams weave silk-soft intimacy and longing.', views: '4.3K' },
    { id: 5, year: '2020', title: 'Bangkok Desire Flow', genres: ['Sensual', 'Desire'], image: landscapeImages[5], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/5abc5b2f-ae44-44f6-9643-dfdd32789308/play_360p.mp4', description: 'Desire flows naturally through Bangkok\'s warm, intimate rhythm.', views: '3.6K' },
    { id: 6, year: '2018', title: 'Continental Velvet Fantasy', genres: ['Fantasy', 'Allure'], image: landscapeImages[6], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2833ee01-9aae-416d-a960-3b3cdb6f4884/play_360p.mp4', description: 'Velvet fantasy wraps the senses in indulgent calm.', views: '4.2K' },
    { id: 7, year: '2022', title: 'Lotus After Dark', genres: ['Nocturne', 'Dreamlike'], image: landscapeImages[7], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f25d6cc4-e22d-40c8-a41b-22057ef5fb45/play_360p.mp4', description: 'After dark, lotus energy turns quietly seductive.', views: '3.7K' },
    { id: 8, year: '2023', title: 'Siam Night Allure', genres: ['Passion', 'Intimacy'], image: landscapeImages[8], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/01596cdb-8c0e-4120-b0cb-3e9428bc555b/play_360p.mp4', description: 'Nighttime allure in Siam feels magnetic and inviting.', views: '4.0K' },
    { id: 9, year: '2024', title: 'Golden Continental Seduction', genres: ['Erotic', 'Temptation'], image: landscapeImages[9], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/53fac0d7-e740-4884-a731-0ae0e0684c76/play_360p.mp4', description: 'Golden seduction unfolds with elegance and restraint.', views: '3.5K' },
    { id: 10, year: '2024', title: 'Midnight Bangkok Glow', genres: ['Euphoria', 'Sensual'], image: landscapeImages[10], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/841bfc05-962e-4573-a830-edb196526a34/play_360p.mp4', description: 'A midnight glow softens walls and intensifies desire.', views: '4.4K' },
    { id: 11, year: '2024', title: 'Continental Silk Desire', genres: ['Dreamlike', 'Mystique'], image: landscapeImages[11], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/b196841a-2ed1-480d-a2c0-7b45bcee8329/play_360p.mp4', description: 'Silk textures awaken longing and tactile fantasy.', views: '3.8K' },
    { id: 12, year: '2024', title: 'Velvet Lotus Nights', genres: ['Passion', 'Euphoria'], image: landscapeImages[12], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/ebe86e84-ce96-4cf2-8986-19ea67e2459b/play_360p.mp4', description: 'Lotus nights bloom under velvet shadows.', views: '4.1K' }
  ]

  const handleFeaturedClick = () => {
    const videoData = {
      url: featuredMovie.videoUrl,
      title: featuredMovie.title,
      description: featuredMovie.description || `${featuredMovie.year} • Featured Movie`
    }
    checkAndPlayVideo(videoData)
  }

  const handleMovieClick = (movie) => {
    const videoData = {
      url: movie.videoUrl,
      title: movie.title,
      description: movie.description || `${movie.year} • ${movie.genres.join(', ')}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <div className="col-12">
      <div className="py-4 p-md-4 ml-wd-3 newest-movies-section" data-aos="fade-left">
        <div className="border-bottom d-xl-flex pb-3 mb-4 align-items-center border-gray-3200" data-aos="fade-down">
          {/* <h3 className="font-size-22 text-white mb-xl-0 mb-3 mb-xl-0 font-weight-semi-bold">
            Newest Movies
          </h3> */}
          <ul className="nav tab-nav__v9" role="tablist">
            <h3 className="font-size-22 text-white mb-xl-0 mb-3 mb-xl-0 font-weight-semi-bold">
            Today
          </h3>
          </ul>
        </div>

        <div className="tab-content">
          <div className={`tab-pane fade ${activeTab === 'today' ? 'show active' : ''}`}>
            <div className="product">
              <div className="row">
                <div className="col-auto" data-aos="zoom-in">
                  <div className="product-image mb-3 mb-md-0 max-w-23rem newest-featured-image product-image-landscape">
                    <div 
                      className="d-inline-block position-relative stretched-link" 
                      style={{ cursor: 'pointer' }}
                      onClick={handleFeaturedClick}
                    >
                      <img className="img-fluid" src={featuredMovie.image} alt={featuredMovie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'cover' }} />
                      <div className="play-overlay">
                        <div className="play-button">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col d-flex" data-aos="fade-left" data-aos-delay="200">
                  <div className="my-lg-auto ml-lg-3 mt-3">
                    <div className="product-meta font-size-12 mb-2">
                      <span><a href="#" className="h-g-primary">{featuredMovie.year}</a></span>
                    </div>
                    <div className="product-title font-weight-bold font-size-19 mb-3">
                      <a href="#" className="text-white newest-featured-title">{featuredMovie.title}</a>
                    </div>
                    <p className="text-gray-1800 font-size-14 mb-4 line-height-lg">{featuredMovie.description}</p>
                  </div>
                </div>
                <div className="w-100 mb-4"></div>
                <div className="col-12">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center newest-movies-grid">
                    {movies.map((movie, index) => (
                      <div key={movie.id} className="col mb-5 mb-xl-4" data-aos="fade-up" data-aos-delay={index * 50}>
                        <div className="product">
                          <div className="product-image mb-2 product-image-landscape">
                            <div 
                              className="d-inline-block position-relative stretched-link product-link" 
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleMovieClick(movie)}
                            >
                              <img className="img-fluid" src={movie.image} alt={movie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'cover', maxWidth: '100%', margin: '0 auto', display: 'block' }} />
                              <div className="play-overlay">
                                <div className="play-button">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="text-gray-1300 font-size-12">{movie.year} • {movie.genres.join(', ')}</span>
                          <div className="product-title font-weight-bold font-size-1">
                            <a href="#" className="product-title-link" onClick={(e) => { e.preventDefault(); handleMovieClick(movie); }}>{movie.title}</a>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewestMovies