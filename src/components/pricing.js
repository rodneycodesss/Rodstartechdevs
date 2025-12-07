export function setupPricing() {
  const pricing = document.querySelector('#pricing')
  
  pricing.innerHTML = `
    <section class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Pricing Plans</h2>
          <p>Choose the perfect plan for your business needs</p>
        </div>
        
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
                <li><i class="fas fa-check"></i> Basic Website (5 pages)</li>
                <li><i class="fas fa-check"></i> Responsive Design</li>
                <li><i class="fas fa-check"></i> Contact Form</li>
                <li><i class="fas fa-check"></i> SEO Optimization</li>
                <li><i class="fas fa-check"></i> 1 Month Support</li>
                <li><i class="fas fa-check"></i> Basic Analytics</li>
                <li><i class="fas fa-check"></i> Mobile Optimization</li>
                <li><i class="fas fa-check"></i> Social Media Integration</li>
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
                <li><i class="fas fa-check"></i> Custom Website (10 pages)</li>
                <li><i class="fas fa-check"></i> Advanced UI/UX Design</li>
                <li><i class="fas fa-check"></i> E-commerce Integration</li>
                <li><i class="fas fa-check"></i> Content Management System</li>
                <li><i class="fas fa-check"></i> 3 Months Support</li>
                <li><i class="fas fa-check"></i> Advanced Analytics</li>
                <li><i class="fas fa-check"></i> Performance Optimization</li>
                <li><i class="fas fa-check"></i> Security Features</li>
                <li><i class="fas fa-check"></i> Payment Gateway Integration</li>
                <li><i class="fas fa-check"></i> Admin Dashboard</li>
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
                <li><i class="fas fa-check"></i> Full-Stack Application</li>
                <li><i class="fas fa-check"></i> Custom Features & APIs</li>
                <li><i class="fas fa-check"></i> Database Design</li>
                <li><i class="fas fa-check"></i> Third-party Integrations</li>
                <li><i class="fas fa-check"></i> 6 Months Support</li>
                <li><i class="fas fa-check"></i> Advanced Security</li>
                <li><i class="fas fa-check"></i> Scalability Planning</li>
                <li><i class="fas fa-check"></i> Performance Monitoring</li>
                <li><i class="fas fa-check"></i> Training & Documentation</li>
                <li><i class="fas fa-check"></i> Multi-language Support</li>
                <li><i class="fas fa-check"></i> Advanced Reporting</li>
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
              <h3><i class="fas fa-crown"></i> Custom Solutions</h3>
              <p>Tailored to your specific business needs</p>
            </div>
            <div class="custom-pricing-content">
              <div class="custom-features">
                <h4>What's Included:</h4>
                <ul>
                  <li><i class="fas fa-check"></i> Personalized consultation & planning</li>
                  <li><i class="fas fa-check"></i> Custom feature development</li>
                  <li><i class="fas fa-check"></i> Scalable architecture design</li>
                  <li><i class="fas fa-check"></i> Integration with existing systems</li>
                  <li><i class="fas fa-check"></i> Dedicated project manager</li>
                  <li><i class="fas fa-check"></i> Extended support & maintenance</li>
                  <li><i class="fas fa-check"></i> Performance optimization</li>
                  <li><i class="fas fa-check"></i> Security audit & implementation</li>
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
                    <i class="fas fa-comments"></i>
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