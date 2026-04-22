export function setupTerms() {
  const terms = document.querySelector('#terms')
  
  terms.innerHTML = `
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/public/terms.png') center/cover; padding: 12rem 0 6rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); margin-top: -5rem;">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: 3.5rem; margin-bottom: 1rem; color: white !important;">Terms of Service</h2>
        <p class="section-subtitle fade-in-up" style="font-size: 1.25rem;">Standard client agreements and operational policies.</p>
      </div>
    </section>
    
    <section class="section" style="padding-top: 4rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <div class="legal-content" style="color: rgba(255,255,255,0.8); line-height: 1.8;">
          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">1. Scope of Services</h3>
          <p style="margin-bottom: 1.5rem;">Rodstar Tech Devs provides custom software development, web and mobile applications, UI/UX design, e-commerce platform deployment, Web3 architecture, and technical consulting. Specific deliverables, features, and timeline boundaries are established exclusively per independent Statement of Work (SOW) agreements.</p>
          
          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">2. Project Deliverables & Timeline</h3>
          <p style="margin-bottom: 1.5rem;">We deliver production-ready code against predefined milestones. Delays caused by the failure of the client to provide necessary API keys, materials, or feedback may necessitate timeline revisions.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">3. Financing & Payment Terms</h3>
          <p style="margin-bottom: 1.5rem;">Services are billed proportionally across development milestones. Project kickoff initiates strictly upon receipt of an initial retainer. We reserve the right to enforce standardized late-payment penalties and halt development operations for delinquent invoices.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">4. Hosting & External Third-Party APIs</h3>
          <p style="margin-bottom: 1.5rem;">Unless explicitly bundled into an enterprise agreement, standard service fees do not include external licensing, domain registration, monthly server instances (AWS/Vercel/etc.), or third-party scalable SaaS APIs. The client remains solely responsible for funding operational cloud expenses beyond our direct development scope.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">5. Intellectual Property</h3>
          <p style="margin-bottom: 1.5rem;">Rodstar Tech Devs retains ownership of our pre-existing proprietary tools, fundamental abstractions, and baseline methodologies. Upon complete remittance of project invoices, the client is granted a non-exclusive, worldwide, perpetual license to utilize the finalized architectural deliverables. The client may not reverse engineer, resell, or distribute our proprietary closed-source structural tools.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">6. Platform Maintenance</h3>
          <p style="margin-bottom: 1.5rem;">Post-launch maintenance covers essential bug fixes and security patching. This expressly excludes comprehensive overhauls, significant database scaling, new architectural features, or rectifying critical errors injected maliciously or accidentally by client administrators.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">7. Warranties & Limitation of Liability</h3>
          <p style="margin-bottom: 1.5rem;">Web architecture is inherently complex and we do not guarantee mathematically error-free software. Our maximum aggregate liability under any circumstance is strictly limited to the gross project fees paid by the client. The client agrees to indemnify us against any external third-party digital claims, unauthorized network breaches, or infrastructure misuse.</p>

          <h3 style="color: white; margin-bottom: 1rem; margin-top: 2rem;">8. Dispute Resolution & Governing Law</h3>
          <p style="margin-bottom: 1.5rem;">Any unresolved development disputes shall submit to binding arbitration. These digital services are exclusively governed by the laws of the Republic of Kenya.</p>
        </div>
      </div>
    </section>
  `
}
