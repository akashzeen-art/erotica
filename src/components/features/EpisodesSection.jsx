import React from 'react'
import { portraitImages, landscapeImages } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import bannerImage from '../../assets/images/bannerimg.jpg'
import './EpisodesSection.css'

const EpisodesSection = () => {
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

  const episodes = [
    { id: 1, season: 'S01E01', title: 'Siam Heat Dreams', image: '/images/thaipotrait/8.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/910588c1-b180-44e5-8a13-42b1cdb5d41d/play_360p.mp4', description: 'Heat dreams blur sensation and longing.', views: '3.9K' },
    { id: 2, season: 'S01E02', title: 'Bangkok Silken Mood', image: '/images/thaipotrait/9.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/a6dbc209-4818-4e97-84e6-181e6cb65484/play_360p.mp4', description: 'Silken moods encourage slow, intimate moments.', views: '4.2K' },
    { id: 3, season: 'S01E03', title: 'Continental Temple Fantasy', image: '/images/thaipotrait/10.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f466601f-1a32-4ff0-a4f0-79f20a394719/play_360p.mp4', description: 'Temple fantasy blends calm spirituality and desire.', views: '3.7K' },
    { id: 4, season: 'S01E04', title: 'Velvet Siam Desire', image: '/images/thaipotrait/11.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/a755920e-38f5-42f0-b0dd-f027c3f23a58/play_360p.mp4', description: 'Desire lingers within velvet atmospheres.', views: '4.1K' },
    { id: 5, season: 'S01E05', title: 'Lotus Velvet Heat', image: '/images/thaipotrait/12.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/e68f06d4-ed23-400b-a2b0-22c30761ff99/play_360p.mp4', description: 'Velvet heat pulses beneath tranquil surfaces.', views: '3.8K' },
    { id: 6, season: 'S01E06', title: 'Continental Night Pulse', image: '/images/thaipotrait/13.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/8e9a593f-6c02-4e8b-bd65-5c554d74d94c/play_360p.mp4', description: 'Night pulse synchronizes bodies and emotions.', views: '4.3K' },
    { id: 7, season: 'S01E07', title: 'Golden Siam Nights', image: '/images/thaipotrait/14.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/e345de9b-0e6b-4ddc-b9be-0d23fbabf122/play_360p.mp4', description: 'Golden nights heighten warmth and connection.', views: '3.6K' },
    { id: 8, season: 'S01E08', title: 'Bangkok Moon Desire', image: '/images/thaipotrait/15.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/f988302e-f5f2-4a87-a883-0496daeaf50b/play_360p.mp4', description: 'Moonlit Bangkok fuels quiet yearning.', views: '4.0K' },
    { id: 9, season: 'S01E09', title: 'Continental Silken Seduction', image: '/images/thaipotrait/16.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/e4aca7f7-2482-476e-a216-c959e6b4e2a6/play_360p.mp4', description: 'Silken seduction flows naturally.', views: '3.9K' },
    { id: 10, season: 'S01E10', title: 'Velvet Temple Nights', image: '/images/thaipotrait/17.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/8aa39582-e410-4144-8477-afe3f604704f/play_360p.mp4', description: 'Temple nights feel intimate and mysterious.', views: '4.2K' },
    { id: 11, season: 'S01E11', title: 'Lotus Heat Fantasy', image: '/images/thaipotrait/18.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/35e57b88-fd4a-4fa2-9313-f93ba8c57e26/play_360p.mp4', description: 'Heat fantasy rises with elegance.', views: '3.7K' },
    { id: 12, season: 'S01E12', title: 'Siam Midnight Glow', image: '/images/thaipotrait/19.png', videoUrl: 'https://vz-c24330ce-140.b-cdn.net/6494e42e-308b-4d44-b95c-db98b6aebfb0/play_360p.mp4', description: 'Midnight glow invites closeness.', views: '4.1K' }
  ]

  const handleThumbnailClick = (episode) => {
    const videoData = {
      url: episode.videoUrl,
      title: episode.title,
      description: episode.description || `${episode.season} • Episode`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <div className="space-1 episodes-section" data-aos="fade-up" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container my-3">
        <div className="text-center mb-5">
          <h3 className="display-7 mb-3 font-weight-semi-bold text-white" data-aos="zoom-in">
            Thai Midnight Awakening Collection
          </h3>
          <p className="max-w-370 font-size-16 mx-auto text-gray-1300 mb-6" data-aos="fade-up" data-aos-delay="200">
            Watch Now
          </p>
        </div>
        
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 justify-content-center">
          {episodes.map((episode, index) => (
            <div key={episode.id} className="col mb-5 mb-xl-4" data-aos="zoom-in" data-aos-delay={index * 50}>
              <div className="product">
                <div className="product-image mb-2 product-image-portrait">
                  <div 
                    className="d-inline-block position-relative stretched-link product-link" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleThumbnailClick(episode)}
                  >
                    <img className="img-fluid" src={portraitImages[episode.id + 7]} alt={episode.title} loading="lazy" style={{ width: '180px', height: '270px', objectFit: 'cover', maxWidth: '100%', margin: '0 auto', display: 'block' }} />
                    <div className="play-overlay">
                      <div className="play-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-gray-1300 font-size-12">{episode.season}</span>
                <div className="product-title font-weight-bold font-size-1">
                  <a className="d-inline-block product-title-link" href="#" onClick={(e) => { e.preventDefault(); handleThumbnailClick(episode); }}>
                    {episode.title}
                  </a>
                </div>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default EpisodesSection

