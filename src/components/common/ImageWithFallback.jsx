import React, { useState } from 'react'

const ImageWithFallback = ({ src, alt, className, style, onError, ...props }) => {
  const [hasError, setHasError] = useState(false)

  const handleError = (e) => {
    setHasError(true)
    if (onError) onError(e)
  }

  const isPortrait = style?.height > style?.width || className?.includes('portrait')
  const fallbackSrc = isPortrait ? '/images/placeholder-portrait.svg' : '/images/placeholder-landscape.svg'

  return (
    <img
      src={hasError ? fallbackSrc : src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...props}
    />
  )
}

export default ImageWithFallback