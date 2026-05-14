import React, { useRef, useEffect } from 'react'

const FixedVideoBackground = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
      video.play().catch(() => {})
    }
  }, [])

  return (
    <div className="fixed-video-background">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed-bg-video"
      >
        <source src="https://vz-c24330ce-140.b-cdn.net/7ccf2adc-29f6-4c71-a5f7-0371d995220b/play_1080p.mp4" type="video/mp4" />
      </video>
      <div className="fixed-video-overlay"></div>
    </div>
  )
}

export default FixedVideoBackground