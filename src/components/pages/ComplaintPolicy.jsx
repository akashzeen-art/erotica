import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'
import BackButton from '../common/BackButton'

const ComplaintPolicy = () => {
  const location = useLocation()
  useEffect(() => {
    document.body.style.overflow = ''
    if (typeof window !== 'undefined' && window.AOS) window.AOS.refresh()
  }, [location.pathname])

  return (
    <main id="content" className="static-page">
      <section className="static-page__container" data-aos="fade-up">
        <BackButton />
        <h1 className="static-page__title">Complaint Content Renewal Policy</h1>
        <p className="static-page__meta">Effective: www.eroticatv.live</p>
        <div className="static-page__divider" />

        <p>This Complaint Content Renewal Policy governs the review, removal, reinstatement, and renewal of content on the website www.eroticatv.live following the submission of a complaint. This Policy shall be read in conjunction with the Site's Terms of Service, Privacy Policy, and applicable laws and regulations.</p>

        <h2 className="static-page__section-title">1. Scope and Applicability</h2>
        <p>This Policy applies to all users, visitors, and any third parties submitting complaints regarding content hosted, published, or made available on the Site. By using the Site, you acknowledge and agree to be bound by this Policy.</p>

        <h2 className="static-page__section-title">2. Submission and Review of Complaints</h2>
        <p>Upon receipt of a complaint:</p>
        <ul className="static-page__list">
          <li>The Site reserves the right, at its sole discretion, to determine whether the complaint is complete, valid, and submitted in good faith</li>
          <li>The Site may request additional documentation or information to verify the complaint</li>
          <li>The Site shall assess the complaint in accordance with applicable laws, contractual obligations, and internal policies</li>
          <li>The Site is under no obligation to act on incomplete, inaccurate, or unsupported complaints</li>
        </ul>

        <h2 className="static-page__section-title">3. Interim Measures and Content Removal</h2>
        <p>Pending review of a complaint, the Site may, at its sole discretion and without prior notice:</p>
        <ul className="static-page__list">
          <li>Remove, disable, or restrict access to the allegedly infringing or non-compliant content</li>
          <li>Suspend or limit the account responsible for such content</li>
          <li>Take any other action deemed necessary to ensure compliance with legal or regulatory requirements</li>
        </ul>
        <p>Such actions shall not constitute an admission of liability or wrongdoing.</p>

        <h2 className="static-page__section-title">4. Determination and Final Action</h2>
        <p>Following review:</p>
        <ul className="static-page__list">
          <li>If the complaint is substantiated, the Site may permanently remove the content and take further action against the responsible user, including account suspension or termination</li>
          <li>If the complaint is unsubstantiated, the Site may restore the content or maintain its availability</li>
          <li>All determinations made by the Site shall be final, subject only to applicable legal requirements</li>
        </ul>

        <h2 className="static-page__section-title">5. Content Renewal and Reinstatement</h2>
        <p>Content removed or restricted pursuant to a complaint may be reinstated or renewed only under the following circumstances:</p>
        <ul className="static-page__list">
          <li>Receipt of a valid counter-notification or dispute meeting applicable legal standards</li>
          <li>Withdrawal of the complaint by the complainant</li>
          <li>Modification of the content to bring it into compliance with applicable laws and Site policies</li>
          <li>Determination by the Site that the removal was made in error or based on incorrect information</li>
        </ul>
        <p>The Site reserves the sole and absolute discretion to approve or deny any request for reinstatement.</p>

        <h2 className="static-page__section-title">6. Timeframes</h2>
        <p>The Site shall use commercially reasonable efforts to process complaints, counter-notifications, and reinstatement requests in a timely manner. However:</p>
        <ul className="static-page__list">
          <li>No specific timeframe is guaranteed unless required by law</li>
          <li>Typical processing periods may range from 10 to 14 business days, depending on the complexity of the matter</li>
        </ul>

        <h2 className="static-page__section-title">7. Repeat Violations</h2>
        <p>Users who are found to have repeatedly submitted content that results in valid complaints may be subject to:</p>
        <ul className="static-page__list">
          <li>Permanent removal of content</li>
          <li>Suspension or termination of accounts</li>
          <li>Restriction of future access to the Site</li>
        </ul>
        <p>The Site reserves the right to enforce a "repeat infringer" policy in accordance with applicable law.</p>

        <h2 className="static-page__section-title">8. Misuse and Bad Faith Complaints</h2>
        <p>Any party found to have submitted complaints or counter-notifications that are false, misleading, fraudulent, or made in bad faith may be subject to:</p>
        <ul className="static-page__list">
          <li>Rejection of current and future submissions</li>
          <li>Suspension or restriction of access to the Site</li>
          <li>Potential legal liability under applicable laws</li>
        </ul>

        <h2 className="static-page__section-title">9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, the Site shall not be liable for:</p>
        <ul className="static-page__list">
          <li>Any removal, disabling, or reinstatement of content</li>
          <li>Any loss of data, revenue, or reputation resulting from actions taken under this Policy</li>
          <li>Any actions taken in good faith to comply with legal obligations</li>
        </ul>

        <h2 className="static-page__section-title">10. Modifications to Policy</h2>
        <p>The Site reserves the right to amend, modify, or update this Policy at any time without prior notice. Continued use of the Site following any changes constitutes acceptance of the revised Policy.</p>

        <h2 className="static-page__section-title">11. Governing Law</h2>
        <p>This Policy shall be governed and construed in accordance with applicable laws, without regard to conflict of law principles.</p>

        <h2 className="static-page__section-title">12. Contact Information</h2>
        <p>All inquiries, complaints, or requests related to this Policy must be submitted through the Site's designated communication channels.</p>
      </section>
    </main>
  )
}

export default ComplaintPolicy
