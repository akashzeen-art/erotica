import React from 'react'
import Slider from 'react-slick'
import { landscapeImages } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './FeaturedTVEpisodes.css'

const FeaturedTVEpisodes = () => {
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

  // Custom arrow components that properly handle react-slick props
  const PrevArrow = ({ onClick, className, style }) => {
    return (
      <span 
        className={`fas fa-chevron-left dark slick-arrow slick-arrow-v1 slick-arrow-v11 left slick-arrow-right rounded-circle position-absolute bottom-0 ${className || ''}`}
        onClick={onClick}
        style={style}
        aria-label="Previous"
      />
    )
  }

  const NextArrow = ({ onClick, className, style }) => {
    return (
      <span 
        className={`fas fa-chevron-right dark slick-arrow slick-arrow-v1 slick-arrow-v11 right slick-arrow-right rounded-circle position-absolute ${className || ''}`}
        onClick={onClick}
        style={style}
        aria-label="Next"
      />
    )
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    swipe: true,
    touchMove: true,
    draggable: true,
    variableWidth: true,
    adaptiveHeight: false,
    slideWidth: 260,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          slideWidth: 260
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
          draggable: true,
          variableWidth: true,
          slideWidth: 260
        }
      }
    ]
  }

  const episodes = [
    { id: 1, duration: '00:33 mins', category: 'Sensual', title: 'Bangkok Desire Nights', image: landscapeImages[12], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/5f8a4509-d1e2-4a63-a656-1f74b8511b61/play_360p.mp4', description: 'Desire deepens across Bangkok nights.', views: '3.8K' },
    { id: 2, duration: '00:36 mins', category: 'Erotic', title: 'Continental Velvet Seduction', image: landscapeImages[13], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f6cd68e9-eaf7-44b5-81b4-4263d45955b2/play_720p.mp4', description: 'Seduction remains refined and subtle.', views: '4.1K' },
    { id: 3, duration: '00:34 mins', category: 'Seductive', title: 'Golden Lotus Nights', image: landscapeImages[14], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/7f10edc6-6879-4453-a60f-f1a32491735c/play_720p.mp4', description: 'Lotus nights radiate warmth.', views: '3.9K' },
    { id: 4, duration: '00:40 mins', category: 'Aesthetic', title: 'Siam Silk Fantasy', image: landscapeImages[15], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/ca079738-27f2-4a75-80a0-718330ab52ae/play_720p.mp4', description: 'Silk fantasy awakens senses.', views: '4.3K' },
    { id: 5, duration: '00:34 mins', category: 'Euphoria', title: 'Midnight Bangkok Desire', image: landscapeImages[16], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/7f10edc6-6879-4453-a60f-f1a32491735c/play_720p.mp4', description: 'Desire peaks at midnight.', views: '3.7K' },
    { id: 6, duration: '00:41 mins', category: 'Passion', title: 'Continental Exotic Allure', image: landscapeImages[17], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/a32cb0c2-ba77-4a13-8ce7-37779bd15e12/play_720p.mp4', description: 'Exotic allure captivates quietly.', views: '4.0K' },
    { id: 7, duration: '00:42 mins', category: 'Allure', title: 'Velvet Moon Siam', image: landscapeImages[18], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/29b540c0-ff22-4139-a81c-5620687d9908/play_720p.mp4', description: 'Moonlit velvet enhances intimacy.', views: '3.6K' },
    { id: 8, duration: '00:33 mins', category: 'Erotic', title: 'Lotus Desire Flow', image: landscapeImages[19], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/518a3ce1-fdfd-416f-9553-6c2682157662/play_720p.mp4', description: 'Desire flows unrestrained.', views: '4.2K' },
    { id: 9, duration: '00:40 mins', category: 'Velvet', title: 'Bangkok Velvet Heat', image: landscapeImages[20], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/2a598ac2-07a2-4ccc-b0f8-7ab2c417796a/play_720p.mp4', description: 'Heat intensifies through velvet calm.', views: '3.8K' },
    { id: 10, duration: '00:34 mins', category: 'Mystique', title: 'Continental Silk Nights', image: landscapeImages[21], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/b495bdfe-85e6-4261-bca8-24e07827ed62/play_720p.mp4', description: 'Silk nights soothe and entice.', views: '4.1K' },
    { id: 11, duration: '00:34 mins', category: 'Hypnotic', title: 'Siam Golden Fantasy', image: landscapeImages[22], videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f44d4ed7-d95a-463e-9e4a-087807e06da1/play_360p.mp4', description: 'Golden fantasy glows softly.', views: '3.9K' }
  ]

  const handleThumbnailClick = (episode) => {
    const videoData = {
      url: episode.videoUrl,
      title: episode.title,
      description: episode.description || `${episode.duration}, ${episode.category}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <section className="bg-gray-1100 dark space-2 featured-tv-episodes-section" data-aos="fade-up">
      <div className="container px-md-4 featured-tv-episodes-container">
        <div className="tab-content slick__tab mb-12 mb-md-6">
          <div className="tab-pane fade show active" id="pills-one-code-features-1" role="tabpanel" aria-labelledby="pills-one-code-features-tab-1">
            {/* Centered Title Above Carousel */}
            <div className="row mb-4">
              <div className="col-12">
                <header className="text-center">
                  <h5 className="text-white display-7 mb-3 font-weight-semi-bold">Continental Seduction Sessions Everyone’s Watching</h5>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="js-slick-carousel slick slick-gutters-2 slick-initialized slick-slider">
                  <Slider {...sliderSettings}>
                    {episodes.map((episode, index) => (
                      <div key={episode.id} className="product">
                        <div className="product-image mb-1">
                          <div 
                            className="d-inline-block position-relative stretched-link" 
                            onClick={() => handleThumbnailClick(episode)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                handleThumbnailClick(episode)
                              }
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            <img className="img-fluid" src={episode.image} alt={episode.title} loading="lazy" />
                          </div>
                        </div>
                        <div className="product-title">
                          <div className="d-inline-block">
                            <span className="text-gray-1300 font-size-12">{episode.duration}, {episode.category}</span>
                            <div className="mb-0 font-weight-bold font-size-1">{episode.title}</div>
                            {episode.description && (
                              <p className="product-description text-gray-1300 font-size-11 mb-1 mt-1">
                                {truncateDescription(episode.description)}
                              </p>
                            )}
                            {episode.views && (
                              <span className="product-views text-gray-1300 font-size-11">
                                {episode.views} views
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTVEpisodes

