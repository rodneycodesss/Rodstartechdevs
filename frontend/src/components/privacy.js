export function setupPrivacy() {
  const privacy = document.querySelector('#privacy')
  
  privacy.innerHTML = `
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> SECURITY & CONFIDENTIALITY
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Privacy Policy & Data Security</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          How we handle data, trade secrets, zero-trust access, and operational privacy across our engineering platforms.
        </p>
      </div>
    </section>
    
    <section class="section" style="padding-top: 3rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <div class="legal-content glass-panel" style="padding: 3rem 2.5rem;">
          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">1. Information Collection</h3>
          <p style="margin-bottom: 1.5rem;">We only collect standard communications data, minimal tracking parameters to optimize site load performance, and necessary project blueprints submitted explicitly by our clients through secure channels to facilitate software architecture services.</p>
          
          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">2. Confidentiality Extent</h3>
          <p style="margin-bottom: 1.5rem;">By engaging with our engineering division, we initiate a strict bilateral confidentiality agreement ensuring that highly sensitive algorithmic assets are protected. All trade secrets, database architectures, unreleased application materials, and enterprise deployment strategies are held in rigorous isolation.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">3. Post-Project Privacy Maintenance</h3>
          <p style="margin-bottom: 1.5rem;">Rodstar Tech Devs explicitly guarantees the classification of your proprietary project data for a minimum duration of 3 years following final software deployment, shielding internal technological details from competitors.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">4. Third-Party Intelligence</h3>
          <p style="margin-bottom: 1.5rem;">We never lease, distribute, or unethically transmit your corporate secrets to outside agencies. If your digital products require processing traffic through external networks (like automated payment gateways or global servers), that localized data relies on the encryption standards maintained by those respective platform providers.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">5. Security of Source Code</h3>
          <p style="margin-bottom: 1.5rem;">Every component engineered by our teams operates under state-of-the-art secure transmission protocols. We heavily utilize zero-trust access control across cloud environments to eliminate vulnerabilities while scaling data processing.</p>
        </div>
      </div>
    </section>
  `
}
