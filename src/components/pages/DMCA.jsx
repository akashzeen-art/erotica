import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'
import BackButton from '../common/BackButton'

const DMCA = () => {
  const location = useLocation()
  useEffect(() => {
    document.body.style.overflow = ''
    if (typeof window !== 'undefined' && window.AOS) window.AOS.refresh()
  }, [location.pathname])

  return (
    <main id="content" className="static-page">
      <section className="static-page__container" data-aos="fade-up">
        <BackButton />
        <h1 className="static-page__title">DMCA Policy</h1>
        <div className="static-page__divider" />

        <p>This website ("Site") qualifies as a "Service Provider" under the Digital Millennium Copyright Act (DMCA), specifically 17 U.S.C. §512(k)(1). As such, it benefits from certain legal protections (known as "safe harbor" provisions) against copyright infringement claims.</p>
        <p>We respect the intellectual property rights of others and expect our users to do the same. To support this, we follow DMCA regulations and have implemented the following Notice and Takedown procedures.</p>

        <h2 className="static-page__section-title">Reporting Copyright Infringement</h2>
        <p>If you believe your copyrighted work has been used without permission, you must send a notice to our designated Copyright Agent including:</p>
        <ul className="static-page__list">
          <li>A physical or electronic signature of the copyright owner or authorized representative</li>
          <li>A description of the copyrighted work that has been infringed</li>
          <li>Details of where the infringing content is located on the Site (preferably with exact URLs)</li>
          <li>Your contact details (address, phone number, and email)</li>
          <li>A statement confirming you believe the use is unauthorized</li>
          <li>A declaration, under penalty of perjury, that the information provided is accurate and that you are authorized to act on behalf of the copyright owner</li>
        </ul>
        <p className="static-page__note">Please note: Only copyright-related notices should be sent to this contact.</p>

        <h2 className="static-page__section-title">Misuse of the DMCA Process</h2>
        <p>Submitting false claims or abusing the DMCA process can lead to legal consequences, including liability for damages, legal fees, and court costs under federal law (17 U.S.C. §512(f)). These procedures are strictly for copyright-related complaints and not for other disputes. We reserve the right to investigate and take action against misuse of this process.</p>

        <h2 className="static-page__section-title">Takedown Process</h2>
        <p>When a valid infringement notice is received:</p>
        <ul className="static-page__list">
          <li>The Site may remove or disable access to the reported content</li>
          <li>The affected user will be notified</li>
          <li>Repeat offenders may have their accounts terminated</li>
        </ul>
        <p>If a notice is incomplete but still provides sufficient information, we may attempt to contact the complainant to correct it.</p>

        <h2 className="static-page__section-title">Counter-Notification Process</h2>
        <p>If you believe your content was wrongly removed or misidentified, you may submit a counter-notification under DMCA Section 512(g). Your counter-notification must include:</p>
        <ul className="static-page__list">
          <li>Identification of the removed content</li>
          <li>The original location of the content (preferably with URLs)</li>
          <li>A statement declaring, under penalty of perjury, that the removal was a mistake or misidentification</li>
          <li>Your contact details (address, phone number, email)</li>
          <li>A statement agreeing to the jurisdiction of the appropriate court and accepting legal service from the complainant</li>
        </ul>
        <p>Send the signed counter-notification to the same Copyright Agent listed above.</p>

        <h2 className="static-page__section-title">What Happens Next</h2>
        <ul className="static-page__list">
          <li>Once a valid counter-notification is received, it will be shared with the original complainant</li>
          <li>The removed content may be restored within 10–14 days</li>
          <li>This will only happen if no legal action has been filed by the complainant to prevent restoration</li>
        </ul>

        <h2 className="static-page__section-title">Third-Party Service Providers</h2>
        <p>If the alleged infringer is itself a service provider, complaints regarding its users should be directed to that provider's designated DMCA agent instead of this Site.</p>

        <h2 className="static-page__section-title">Policy Updates</h2>
        <p>We may update or change this policy at any time. Users are encouraged to review it regularly to stay informed.</p>

        <h2 className="static-page__section-title">Customer Support Notice</h2>
        <p>The DMCA Agent handles only copyright-related issues and is not part of the Site's customer service. For account, billing, or general inquiries, please contact the Site's customer support team directly.</p>
      </section>
    </main>
  )
}

export default DMCA
