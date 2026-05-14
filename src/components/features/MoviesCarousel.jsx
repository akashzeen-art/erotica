import React from 'react'
import Slider from 'react-slick'
import { landscapeImages } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './MoviesCarousel.css'

const MoviesCarousel = ({ variant = 'light', sectionTitle = 'Trending Movies' }) => {
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  // Different movie sets based on variant or title
  const getMoviesData = () => {
    if (sectionTitle === "Top Liked Erotic Sensation Experiences — Watch Now!") {
      return [
        { id: 1, title: 'Golden Hour Siam', year: '2024', genres: ['Seductive', 'Passion'], duration: '00:33', image: landscapeImages[12], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/5abc5b2f-ae44-44f6-9643-dfdd32789308/play_360p.mp4', description: 'Golden hour light softens the senses, heightening closeness and attraction.', views: '3.4K' },
        { id: 2, title: 'Continental Night Bloom', year: '2024', genres: ['Sensual', 'Allure'], duration: '00:36', image: landscapeImages[13], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2833ee01-9aae-416d-a960-3b3cdb6f4884/play_360p.mp4', description: 'Desire blooms quietly as Thai nights deepen and boundaries soften.', views: '4.6K' },
        { id: 3, title: 'Velour Bangkok', year: '2024', genres: ['Erotic', 'Temptation'], duration: '00:34', image: landscapeImages[14], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f25d6cc4-e22d-40c8-a41b-22057ef5fb45/play_360p.mp4', description: 'Velour textures and warm tones frame Bangkok\'s seductive mood.', views: '3.3K' },
        { id: 4, title: 'Soft Siam Fantasy', year: '2024', genres: ['Allure', 'Mystique'], duration: '00:40', image: landscapeImages[15], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/01596cdb-8c0e-4120-b0cb-3e9428bc555b/play_360p.mp4', description: 'Soft fantasy embraces vulnerability, warmth, and intimate expression.', views: '4.2K' },
        { id: 5, title: 'Hidden Continental Heat', year: '2024', genres: ['Intimacy', 'Desire'], duration: '00:34', image: landscapeImages[16], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/53fac0d7-e740-4884-a731-0ae0e0684c76/play_360p.mp4', description: 'Beneath calm surfaces, hidden heat quietly intensifies desire.', views: '3.8K' },
        { id: 6, title: 'Midnight Lotus', year: '2024', genres: ['Passion', 'Lustful'], duration: '00:41', image: landscapeImages[17], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/841bfc05-962e-4573-a830-edb196526a34/play_360p.mp4', description: 'Midnight lotus moments unfold slowly, balancing grace and temptation.', views: '4.1K' },
        { id: 7, title: 'Continental Velvet Touch', year: '2024', genres: ['Sultry', 'Aesthetic'], duration: '00:42', image: landscapeImages[18], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/b196841a-2ed1-480d-a2c0-7b45bcee8329/play_360p.mp4', description: 'Velvet touches linger, awakening sensation and emotional closeness.', views: '3.9K' },
        { id: 8, title: 'Siamese Desire', year: '2024', genres: ['Velvet', 'Aesthetic'], duration: '00:33', image: landscapeImages[19], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/ebe86e84-ce96-4cf2-8986-19ea67e2459b/play_360p.mp4', description: 'Siamese desire builds through eye contact, silence, and restrained anticipation.', views: '4.3K' },
        { id: 9, title: 'Bangkok Silk Nights', year: '2024', genres: ['Seductive', 'Sensual'], duration: '00:40', image: landscapeImages[20], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2519c507-8738-4aca-88c3-b8a4dbcdd719/play_360p.mp4', description: 'Silk-like nights wrap Bangkok in smooth sensual charm.', views: '3.7K' },
        { id: 10, title: 'Continental Crimson Mood', year: '2024', genres: ['Moody', 'Tease'], duration: '00:34', image: landscapeImages[21], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/14f3347d-6ffc-4fa7-b0b5-90dcee8586e9/play_360p.mp4', description: 'Crimson moods evoke passion, mystery, and intimate tension.', views: '4.5K' },
        { id: 11, title: 'Golden Siam Fantasy', year: '2024', genres: ['Euphoria', 'Passion'], duration: '00:37', image: landscapeImages[22], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2b12b137-7dfd-4614-954f-356b1e583bcb/play_360p.mp4', description: 'Golden tones elevate fantasy into refined sensual experience.', views: '3.6K' },
        { id: 12, title: 'Continental Midnight Flow', year: '2024', genres: ['Passion', 'Intimacy'], duration: '00:39', image: landscapeImages[23], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/4d905637-da20-452e-b45f-5556e6364e4e/play_360p.mp4', description: 'Midnight flow guides bodies through calm, intimate rhythm.', views: '4.0K' }
      ]
    } else {
      // Default movies for first instance
      return [
        { id: 1, title: 'Golden Hour Siam', year: '2024', genres: ['Seductive', 'Passion'], duration: '00:33', image: landscapeImages[12], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/ebe86e84-ce96-4cf2-8986-19ea67e2459b/play_360p.mp4', description: 'Golden hour light softens the senses, heightening closeness and attraction.', views: '3.4K' },
        { id: 2, title: 'Continental Night Bloom', year: '2024', genres: ['Sensual', 'Allure'], duration: '00:36', image: landscapeImages[13], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2519c507-8738-4aca-88c3-b8a4dbcdd719/play_360p.mp4', description: 'Desire blooms quietly as Thai nights deepen and boundaries soften.', views: '4.6K' },
        { id: 3, title: 'Velour Bangkok', year: '2024', genres: ['Erotic', 'Temptation'], duration: '00:34', image: landscapeImages[14], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/14f3347d-6ffc-4fa7-b0b5-90dcee8586e9/play_360p.mp4', description: 'Velour textures and warm tones frame Bangkok\'s seductive mood.', views: '3.3K' },
        { id: 4, title: 'Soft Siam Fantasy', year: '2024', genres: ['Allure', 'Mystique'], duration: '00:40', image: landscapeImages[15], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2b12b137-7dfd-4614-954f-356b1e583bcb/play_360p.mp4', description: 'Soft fantasy embraces vulnerability, warmth, and intimate expression.', views: '4.2K' },
        { id: 5, title: 'Hidden Continental Heat', year: '2024', genres: ['Intimacy', 'Desire'], duration: '00:34', image: landscapeImages[16], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/4d905637-da20-452e-b45f-5556e6364e4e/play_360p.mp4', description: 'Beneath calm surfaces, hidden heat quietly intensifies desire.', views: '3.8K' },
        { id: 6, title: 'Midnight Lotus', year: '2024', genres: ['Passion', 'Lustful'], duration: '00:41', image: landscapeImages[17], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/5f8a4509-d1e2-4a63-a656-1f74b8511b61/play_360p.mp4', description: 'Midnight lotus moments unfold slowly, balancing grace and temptation.', views: '4.1K' },
        { id: 7, title: 'Continental Velvet Touch', year: '2024', genres: ['Sultry', 'Aesthetic'], duration: '00:42', image: landscapeImages[18], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f6cd68e9-eaf7-44b5-81b4-4263d45955b2/play_720p.mp4', description: 'Velvet touches linger, awakening sensation and emotional closeness.', views: '3.9K' },
        { id: 8, title: 'Siamese Desire', year: '2024', genres: ['Velvet', 'Aesthetic'], duration: '00:33', image: landscapeImages[19], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/7f10edc6-6879-4453-a60f-f1a32491735c/play_720p.mp4', description: 'Siamese desire builds through eye contact, silence, and restrained anticipation.', views: '4.3K' },
        { id: 9, title: 'Bangkok Silk Nights', year: '2024', genres: ['Seductive', 'Sensual'], duration: '00:40', image: landscapeImages[20], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/ca079738-27f2-4a75-80a0-718330ab52ae/play_720p.mp4', description: 'Silk-like nights wrap Bangkok in smooth sensual charm.', views: '3.7K' },
        { id: 10, title: 'Continental Crimson Mood', year: '2024', genres: ['Moody', 'Tease'], duration: '00:34', image: landscapeImages[21], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/a32cb0c2-ba77-4a13-8ce7-37779bd15e12/play_720p.mp4', description: 'Crimson moods evoke passion, mystery, and intimate tension.', views: '4.5K' },
        { id: 11, title: 'Golden Siam Fantasy', year: '2024', genres: ['Euphoria', 'Passion'], duration: '00:37', image: landscapeImages[22], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/29b540c0-ff22-4139-a81c-5620687d9908/play_720p.mp4', description: 'Golden tones elevate fantasy into refined sensual experience.', views: '3.6K' },
        { id: 12, title: 'Continental Midnight Flow', year: '2024', genres: ['Passion', 'Intimacy'], duration: '00:39', image: landscapeImages[23], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/29b540c0-ff22-4139-a81c-5620687d9908/play_720p.mp4', description: 'Midnight flow guides bodies through calm, intimate rhythm.', views: '4.0K' }
      ]
    }
  }

  const movies = getMoviesData()

  const handleThumbnailClick = (movie) => {
    const videoData = {
      url: movie.videoUrl,
      title: movie.title,
      description: movie.description || `${movie.year} • ${movie.genres.join(', ')}`
    }
    checkAndPlayVideo(videoData)
  }

  const bgClass = variant === 'dark' ? 'bg-gray-1100 dark' : variant === 'dark-alt' ? 'bg-gray-2000 dark' : 'bg-gray-1500'

  return (
    <section className={`${bgClass} space-2 movies-carousel-section`} data-aos="fade-up">
      <div className="container px-md-4">
        <div className="tab-content slick__tab">
          <div className="tab-pane fade show active">
            <div className="row mb-4">
              <div className="col-12 d-flex justify-content-center">
                <header className="romantic-header centered-header" data-aos="fade-down">
                  <h3 className={`display-7 mb-3 font-weight-semi-bold romantic-title text-center ${variant === 'dark' || variant === 'dark-alt' ? 'text-white' : 'text-white'}`}>
                    {sectionTitle}
                  </h3>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-12" data-aos="fade-left">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
                  {movies.map((movie, index) => (
                    <div key={movie.id} className="col mb-5 mb-xl-4" data-aos="zoom-in" data-aos-delay={index * 50}>
                      <div className="product">
                        <div className="product-image mb-2 product-image-landscape">
                          <div 
                            className="d-inline-block position-relative stretched-link product-link" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleThumbnailClick(movie)}
                          >
                            <img className="img-fluid" src={movie.image} alt={movie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'contain', maxWidth: '100%', margin: '0 auto', display: 'block' }} />
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
        </div>
      </div>
    </section>
  )
}

export default MoviesCarousel

