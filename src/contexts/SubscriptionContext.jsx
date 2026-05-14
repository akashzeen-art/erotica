import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubscriptionPopup from '../components/features/SubscriptionPopup'
import { isSubscribed } from '../utils/subscription'

const SubscriptionContext = createContext()

export const useSubscription = () => {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error('useSubscription must be used within SubscriptionProvider')
  }
  return context
}

export const SubscriptionProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [pendingVideo, setPendingVideo] = useState(null)
  const navigate = useNavigate()

  const getVideoUrl = (videoData) => {
    const videoUrl = typeof videoData === 'object' && videoData?.url ? videoData.url : videoData
    const videoTitle = typeof videoData === 'object' && videoData?.title ? videoData.title : ''
    const videoDescription = typeof videoData === 'object' && videoData?.description ? videoData.description : ''
    
    const params = new URLSearchParams({
      url: videoUrl
    })
    if (videoTitle) params.append('title', videoTitle)
    if (videoDescription) params.append('description', videoDescription)
    
    return `/watch?${params.toString()}`
  }

  const checkAndPlayVideo = (videoData) => {
    if (isSubscribed()) {
      const videoPath = getVideoUrl(videoData)
      navigate(videoPath)
    } else {
      // User is not subscribed, open popup
      setPendingVideo(videoData)
      setIsPopupOpen(true)
    }
  }

  const handleSubscribe = (subscriptionData) => {
    if (pendingVideo) {
      const videoPath = getVideoUrl(pendingVideo)
      navigate(videoPath)
    } else {
      window.dispatchEvent(new Event('storage'))
    }
    setPendingVideo(null)
    setIsPopupOpen(false)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setPendingVideo(null)
  }

  return (
    <SubscriptionContext.Provider
      value={{
        isPopupOpen,
        openPopup: () => setIsPopupOpen(true),
        closePopup,
        checkAndPlayVideo,
        handleSubscribe
      }}
    >
      {children}
      <SubscriptionPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubscribe={handleSubscribe}
      />
    </SubscriptionContext.Provider>
  )
}

