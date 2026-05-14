import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <>
      <div className="background-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="https://vz-c24330ce-140.b-cdn.net/7ccf2adc-29f6-4c71-a5f7-0371d995220b/play_1080p.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-overlay"></div>
    </>
  )
}

export default BackgroundVideo