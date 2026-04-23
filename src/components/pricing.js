export function setupPricing() {
  const pricing = document.querySelector('#pricing')
  
  pricing.innerHTML = `
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/cloud.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Our Pricing Plans</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Choose the perfect scalable plan for your business needs</p>
      </div>
    </section>
    <section class="pricing-section section" style="padding-top: 4rem;">
      <div class="container">
        
                <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Starter</h3>
              <div class="price">
                <span class="currency">KSH</span>
                <span class="amount">15,000</span>
                <span class="period">/project</span>
              </div>
            </div>
            <div class="pricing-features">
              <ul>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic Website (5 pages)</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Responsive Design</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Contact Form</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> SEO Optimization</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> 1 Month Support</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic Analytics</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Mobile Optimization</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Social Media Integration</li>
              </ul>
            </div>
            <div class="pricing-footer">
              <a href="/contact" class="btn btn-primary nav-link">Get Started</a>
            </div>
          </div>
          
          <div class="pricing-card featured">
            <div class="pricing-badge">Most Popular</div>
            <div class="pricing-header">
              <h3>Professional</h3>
              <div class="price">
                <span class="currency">KSH</span>
                <span class="amount">75,000</span>
                <span class="period">/project</span>
              </div>
            </div>
            <div class="pricing-features">
              <ul>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom Website (10 pages)</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced UI/UX Design</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> E-commerce Integration</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Content Management System</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> 3 Months Support</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced Analytics</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Performance Optimization</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Security Features</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Payment Gateway Integration</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Admin Dashboard</li>
              </ul>
            </div>
            <div class="pricing-footer">
              <a href="/contact" class="btn btn-primary nav-link">Get Started</a>
            </div>
          </div>
          
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Enterprise</h3>
              <div class="price">
                <span class="currency">KSH</span>
                <span class="amount">150,000</span>
                <span class="period">/project</span>
              </div>
            </div>
            <div class="pricing-features">
              <ul>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Full-Stack Application</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom Features & APIs</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Database Design</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Third-party Integrations</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> 6 Months Support</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced Security</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Scalability Planning</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Performance Monitoring</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Training & Documentation</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-language Support</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced Reporting</li>
              </ul>
            </div>
            <div class="pricing-footer">
              <a href="/contact" class="btn btn-primary nav-link">Get Started</a>
            </div>
          </div>
        </div>
        
        <div class="custom-pricing-section">
          <div class="custom-pricing-card">
            <div class="custom-pricing-header">
              <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: inline; margin-right: 8px; color: #00D4FF;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> Custom Solutions</h3>
              <p>Tailored to your specific business needs</p>
            </div>
            <div class="custom-pricing-content">
              <div class="custom-features">
                <h4>What's Included:</h4>
                <ul>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Personalized consultation & planning</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom feature development</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Scalable architecture design</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Integration with existing systems</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Dedicated project manager</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Extended support & maintenance</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Performance optimization</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 8px; color: #00D4FF;"><polyline points="20 6 9 17 4 12"></polyline></svg> Security audit & implementation</li>
                </ul>
              </div>
              <div class="custom-pricing-info">
                <div class="price-range">
                  <span class="range-label">Starting from:</span>
                  <span class="range-price">KSH 200,000</span>
                </div>
                <p class="custom-note">Pricing varies based on project complexity, features, and timeline requirements.</p>
                <div class="custom-cta">
                  <a href="/contact" class="btn btn-primary btn-large nav-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    Get Custom Quote
                  </a>
                  <p class="response-time">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="pricing-note">
          <p><strong>Payment Terms:</strong> We offer flexible payment plans - 50% upfront, 50% upon completion. For custom projects, we can arrange milestone-based payments.</p>
        </div>
      </div>
    </section>
  `
} 