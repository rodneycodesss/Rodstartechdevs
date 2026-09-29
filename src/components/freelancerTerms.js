import './styles/freelancer.css'

export function setupFreelancerTerms() {
  const container = document.querySelector('#freelancer-terms-container')
  if (!container) return

  container.innerHTML = `
    <div class="section container" style="max-width: 820px;">
      <div class="glass-panel" style="padding: 3rem 2.2rem;">
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div class="ai-badge-pill" style="margin-bottom: 0.8rem;">
            Official Network Policy & Legal Agreement
          </div>
          <h1 class="section-title gradient-text" style="font-size: 2.2rem; margin-bottom: 0.6rem;">
            Rodstar AI Freelancer Network Terms & Conditions
          </h1>
          <p style="font-size: 0.95rem; color: var(--text-light);">
            Effective Date: September 23, 2026 | Document Ref: RSTAR-TERMS-FL-2026
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.8rem; font-size: 0.92rem; color: var(--text-light); line-height: 1.75;">
          
          <div style="background: rgba(0, 212, 255, 0.08); border-left: 4px solid #00D4FF; padding: 1.5rem; border-radius: 0 12px 12px 0;">
            <strong style="color: #00D4FF; font-size: 1.05rem; display: block; margin-bottom: 0.4rem;">
              📌 Section 1: Scope of Training & Onboarding Fee (KSh 1,500)
            </strong>
            <p style="margin: 0; color: #ffffff;">
              The payment of KSh 1,500 processed via <strong>our secure payment gateway</strong> covers access to the Rodstar AI Learning Management System, practical role-specific orientation materials, skills evaluation tools, freelancer profile onboarding, and eligibility review for the Rodstar AI Talent Network.
            </p>
          </div>

          <div style="background: rgba(255, 189, 46, 0.1); border-left: 4px solid #FFBD2E; padding: 1.5rem; border-radius: 0 12px 12px 0;">
            <strong style="color: #FFBD2E; font-size: 1.05rem; display: block; margin-bottom: 0.4rem;">
              ⚠️ Section 2: Remote Opportunity Availability Disclaimer
            </strong>
            <p style="margin: 0; color: #ffffff;">
              <strong>Payment of the training and onboarding fee does NOT state, imply, or guarantee employment, freelance client placement, or a specific income level.</strong> Paid project opportunities are strictly subject to real project availability from our verified technology and outsourcing partner network, individual candidate qualifications, assessment scores, portfolio quality, and client technical requirements.
            </p>
          </div>

          <div>
            <h3 style="color: #ffffff; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.6rem;">Section 3: Payment Processing & Refund Policy</h3>
            <p>
              All payments are securely processed through <strong>our secure payment gateway</strong> via Safaricom M-Pesa STK Push or card tokenization. Once training access is provisioned, the KSh 1,500 onboarding fee is non-refundable as it covers immediate digital infrastructure allocation, course licensing, and assessment evaluation resources.
            </p>
          </div>

          <div>
            <h3 style="color: #ffffff; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.6rem;">Section 4: Verified Partner Matching & Candidate Selection</h3>
            <p>
              Candidates who pass the role skill assessment with a score of <strong>80% or higher</strong> achieve "Talent Network" status. When a partner entity releases a project opportunity, candidates matching the specific skill matrix, experience level, and availability are submitted for client consideration. Final candidate selection rests solely with the hiring partner or project manager.
            </p>
          </div>

          <div>
            <h3 style="color: #ffffff; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.6rem;">Section 5: Intellectual Property & Client Confidentiality</h3>
            <p>
              Freelancers must adhere to strict non-disclosure obligations (NDAs) regarding partner codebases, client credentials, and proprietary dataset structures. Failure to maintain confidentiality will result in immediate profile deactivation and legal recourse under Kenyan and international law.
            </p>
          </div>

          <div style="text-align: center; margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
            <a href="#/ai/freelancers/apply" class="btn btn-primary">
              Return to Application Form
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}
