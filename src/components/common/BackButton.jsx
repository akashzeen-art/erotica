import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back
    </button>
  )
}

export default BackButton
