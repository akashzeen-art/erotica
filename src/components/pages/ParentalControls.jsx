import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'
import BackButton from '../common/BackButton'

const ParentalControls = () => {
  const location = useLocation()
  useEffect(() => {
    document.body.style.overflow = ''
    if (typeof window !== 'undefined' && window.AOS) window.AOS.refresh()
  }, [location.pathname])

  return (
    <main id="content" className="static-page">
      <section className="static-page__container" data-aos="fade-up">
        <BackButton />
        <h1 className="static-page__title">Parental Controls</h1>
        <div className="static-page__divider" />

        <p>Erotica TV is intended strictly for adults. As stated in our Terms of Service, only individuals who have reached the legal age in their country or region are permitted to access or use our platform. We are not responsible for any false claims made about a user's age.</p>
        <p>Parents and guardians are strongly encouraged to use parental control tools—such as device settings, software, or internet filters—to prevent minors from accessing inappropriate content.</p>
        <p>We maintain a strict zero-tolerance policy against any material involving minors or any form of child exploitation.</p>
        <p>We work alongside organizations such as:</p>
        <ul className="static-page__list">
          <li><strong>ASACP</strong>, which focuses on protecting children online and preventing access to age-restricted content.</li>
          <li><strong>Revenge Porn Helpline</strong>, a UK-based service that supports adults dealing with intimate image abuse.</li>
        </ul>
        <p>As a parent or guardian, you play the most important role in controlling what your children can access online. We recommend using available parental control solutions to block adult content across websites, including ours. Our platform follows RTA (Restricted to Adults) standards, making it easy for filtering tools to block access.</p>

        <h2 className="static-page__section-title">Ways to Protect Children from Adult Content</h2>

        <h3 className="static-page__sub-title">1. Enable Safe Search on Browsers</h3>
        <p>Safe search settings help filter out explicit content in search results:</p>
        <ul className="static-page__list">
          <li>Google SafeSearch can be enabled on personal accounts, supervised devices, or networks.</li>
          <li>Yahoo, Bing (Microsoft), and Yandex also provide similar filtering options.</li>
        </ul>
        <p>You can also consider child-friendly search engines like Kiddle, KidRex, WackySafe, or Kido'z, which are designed to show only appropriate content.</p>

        <h3 className="static-page__sub-title">2. Use Built-in Parental Controls on Devices</h3>
        <p>Most operating systems include parental control features:</p>
        <ul className="static-page__list">
          <li><strong>Apple devices (iOS/macOS):</strong> Allow you to restrict adult content and control which websites can be accessed.</li>
          <li><strong>Android devices:</strong> Offer similar settings through Google's safety tools.</li>
          <li><strong>Windows:</strong> Includes family settings to manage children's accounts and online activity.</li>
          <li><strong>Amazon Kids+:</strong> Lets parents set screen limits, filter content, and manage usage.</li>
        </ul>

        <h3 className="static-page__sub-title">3. Install Parental Control Software</h3>
        <p>Specialized software can block adult websites and monitor activity. Popular options include:</p>
        <ul className="static-page__list">
          <li>Qustodio</li>
          <li>Net Nanny</li>
          <li>Norton Family</li>
          <li>Mobicip</li>
          <li>SentryPC</li>
          <li>Bark</li>
        </ul>

        <h3 className="static-page__sub-title">4. Learn More About Online Safety</h3>
        <p>Understanding internet risks helps you guide your children better. Educate them about safe browsing, set clear boundaries, and use available resources to support healthy digital habits.</p>
      </section>
    </main>
  )
}

export default ParentalControls
