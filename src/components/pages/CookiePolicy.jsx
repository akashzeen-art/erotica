import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'
import BackButton from '../common/BackButton'

const CookiePolicy = () => {
  const location = useLocation()
  useEffect(() => {
    document.body.style.overflow = ''
    if (typeof window !== 'undefined' && window.AOS) window.AOS.refresh()
  }, [location.pathname])

  return (
    <main id="content" className="static-page">
      <section className="static-page__container" data-aos="fade-up">
        <BackButton />
        <h1 className="static-page__title">Cookie Policy</h1>
        <div className="static-page__divider" />

        <p>Erotica TV operates and manages this website. To ensure the website works efficiently and provides a smooth user experience, we use cookies and similar technologies. These are stored on your device—such as a computer, phone, or tablet—and help us recognize you, remember your preferences, and understand how the website is used.</p>
        <p>This policy explains how we use cookies and tracking technologies, and the choices available to you regarding their use.</p>
        <p>When we mention "personal data," we mean information that can identify you, such as your IP address or other online identifiers.</p>

        <h2 className="static-page__section-title">1. What Are Cookies?</h2>
        <p>Cookies are small text files saved on your device when you visit a website or use an app. They allow the website to recognize your device on future visits.</p>
        <p>There are two main types:</p>
        <ul className="static-page__list">
          <li><strong>Session cookies:</strong> These are temporary and are deleted when you close your browser. They help the website function during your visit.</li>
          <li><strong>Persistent cookies:</strong> These stay on your device until they expire or are manually deleted. They help remember your preferences for future visits.</li>
        </ul>
        <p>Our website uses both types.</p>

        <h2 className="static-page__section-title">2. Why We Use Cookies</h2>
        <p>Cookies help us:</p>
        <ul className="static-page__list">
          <li>Recognize users where necessary</li>
          <li>Customize content based on user preferences</li>
          <li>Improve overall website performance and experience</li>
        </ul>
        <p>Without certain cookies, some parts of the website may not function properly. We may collect information such as your IP address (when available), device and browser details, operating system, and browsing behavior and usage patterns (in anonymized form).</p>

        <h2 className="static-page__section-title">3. How We Use Cookies</h2>
        <p>When you visit our website, cookies help us deliver services tailored to your device and ensure security. We collect data such as:</p>
        <ul className="static-page__list">
          <li>Device type, operating system, and screen resolution</li>
          <li>Browser details</li>
          <li>How you interact with the website</li>
          <li>Your IP address</li>
        </ul>
        <p>Some features of the website may not work correctly if cookies are disabled. We also use cookies to provide requested services securely, meet legal requirements, manage marketing activities, analyze performance and improve the website, and personalize your browsing experience.</p>

        <h2 className="static-page__section-title">4. Types of Cookies</h2>

        <h3 className="static-page__sub-title">Based on Source</h3>
        <ul className="static-page__list">
          <li><strong>First-party cookies:</strong> Set directly by our website to support functionality and remember preferences.</li>
          <li><strong>Third-party cookies:</strong> Set by external services, often used for analytics or advertising.</li>
        </ul>

        <h3 className="static-page__sub-title">Based on Duration</h3>
        <ul className="static-page__list">
          <li><strong>Session cookies:</strong> Temporary and removed after closing the browser.</li>
          <li><strong>Persistent cookies:</strong> Remain on your device until expiration or deletion.</li>
        </ul>

        <h3 className="static-page__sub-title">Essential Cookies</h3>
        <p>These are necessary for the website to operate properly and provide secure services. Without them, some features may not work. They are used to:</p>
        <ul className="static-page__list">
          <li>Allow users to log in and stay authenticated</li>
          <li>Maintain security and prevent misuse</li>
          <li>Remember cookie preferences</li>
          <li>Control access to certain features or content</li>
        </ul>
        <p>These cookies are automatically enabled when you visit the website. Blocking them may affect how the website functions.</p>
      </section>
    </main>
  )
}

export default CookiePolicy
