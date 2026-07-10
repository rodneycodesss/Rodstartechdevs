(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))m(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();function L(){const e=document.querySelector("#hero");e.innerHTML=`
    <section class="hero">
      <div class="hero-bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #16213e 100%); z-index: 0;"></div>
      <div class="hero-overlay"></div>
      <div class="glow-orb-1" style="z-index: 2;"></div>
      <div class="glow-orb-2" style="z-index: 2;"></div>
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <h1 id="typewriter-motto" style="line-height: 1.05 !important; min-height: 2.5em;">
              <span class="cursor" style="opacity: 0;">|</span>
            </h1>
            <p class="fade-in-up">Minimalist architecture. Scalable platforms. We provide enterprise-grade hosting for websites, emails, and custom domains, alongside specialized software development.</p>
            <div class="cta-buttons fade-in-up">
              <a href="/contact" class="btn btn-primary nav-link">
                Start Building
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="/services" class="btn btn-primary nav-link" style="color: rgba(255,255,255,0.8) !important;">
                Explore Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 8px; border-color: rgba(255,255,255,0.3);"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
            
            <div class="hero-stats fade-in-up">
              <div class="stat-item">
                <div class="stat-number" data-target="99.9">0</div>
                <div class="stat-label">Uptime Guarantee</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" data-target="24">0</div>
                <div class="stat-label">Hour Support</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" data-target="100">0</div>
                <div class="stat-label">Cloud Deployment</div>
              </div>
            </div>
          </div>
          
          <div class="hero-image fade-in-up">
            <img src="/RODSTAR.png" alt="Rodstar Logo" width="400" height="400" loading="eager" fetchpriority="high" decoding="sync" style="width: auto; height: auto; max-width: 400px;">
          </div>
        </div>
      </div>
      
      <!-- Animated Words Moving Marquee -->
      <div class="marquee-container fade-in-up">
        <div class="marquee-content">
          <span class="marquee-item">Web Hosting</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Enterprise Emails</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Custom Domains</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Scalable Architecture</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Cloud Deployments</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Full-Stack Engineering</span>
          <span class="marquee-item">•</span>
          <!-- Duplicate for seamless looping -->
          <span class="marquee-item">Web Hosting</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Enterprise Emails</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Custom Domains</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Scalable Architecture</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Cloud Deployments</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Full-Stack Engineering</span>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section" id="infrastructure" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('/home_network.png') center/cover !important;">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in-up">Core Infrastructure</h2>
          <p class="fade-in-up">Clean code, robust deployments, and managed infrastructure.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8"></rect><rect x="2" y="14" width="20" height="8"></rect><line x1="6" y1="6" x2="6" y2="6.01"></line><line x1="6" y1="18" x2="6" y2="18.01"></line></svg>
            </div>
            <h3>Managed Hosting</h3>
            <p>High-performance hosting for websites, enterprise emails, and domains with 99.9% uptime guarantees.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12M6 12h12"></path></svg>
            </div>
            <h3>Cloud Architecture</h3>
            <p>Scalable, secure, and distributed systems architected for modern digital products and massive traffic.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Bespoke Engineering</h3>
            <p>Custom software and web applications built with clean code and minimalist design principles.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="12" r="2"></circle></svg>
            </div>
            <h3>Digital Automation</h3>
            <p>Streamline your operations with automated pipelines, robust APIs, and intelligent workflow integrations.</p>
          </div>
        </div>
      </div>
    </section>
    
    
    <!-- CTA Section -->
    <section class="cta-section" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/homepage_hero.png') center/cover !important;">
      <div class="container">
        <div class="cta-content">
          <h2 class="fade-in-up">Ready to deploy?</h2>
          <p class="fade-in-up">Let's architect your next digital experience and scale your infrastructure.</p>
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary btn-large nav-link">
              Contact Engineering
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="/pricing" class="btn btn-outline btn-large nav-link" style="border-radius: 50px;">
              View Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  `,j(),M()}function j(){const e=document.querySelectorAll(".stat-number"),t=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){const c=parseFloat(s.target.getAttribute("data-target")),l=c/(2e3/16);let p=0;const v=setInterval(()=>{p+=l,p>=c&&(p=c,clearInterval(v)),s.target.getAttribute("data-target")==="99.9"?s.target.textContent=p.toFixed(1)+"%":s.target.textContent=Math.floor(p),s.target.getAttribute("data-target")==="100"&&(s.target.textContent=Math.floor(p)+"%"),s.target.getAttribute("data-target")==="24"&&(s.target.textContent=Math.floor(p)+"/7")},16);t.unobserve(s.target)}})});e.forEach(i=>t.observe(i));const o=document.querySelector("#typewriter-motto");if(o){let u=function(){if(!document.body.contains(o))return;c===0&&(o.innerHTML='<span class="gradient-text"></span><span class="cursor">|</span>');const l=o.querySelector(".gradient-text"),p=o.querySelector(".cursor");if(c<i.length)l&&(l.innerHTML+=i.charAt(c)),c++,setTimeout(u,60);else if(c<i.length+s.length)p&&p.remove(),o.innerHTML+=s.charAt(c-i.length)+'<span class="cursor">|</span>',c++,setTimeout(u,60);else{const v=o.querySelector(".cursor");v&&v.classList.add("blink")}};var m=u;const i="Engineering Growth",s=" Through Technology.";let c=0;setTimeout(u,400)}}function M(){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("animate-in")})},{threshold:.1});document.querySelectorAll(".fade-in-up").forEach(t=>{e.observe(t)})}function z(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#hero").style.display="block",L()}function I(){const e=document.querySelector("#about");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/boardroom.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">About Rodstar Tech</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">We are a team of passionate developers and designers committed to delivering exceptional digital solutions.</p>
      </div>
    </section>
    <section class="about section" style="padding-top: 4rem;">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h3>Our Mission</h3>
            <p>At Rodstar Tech Devs, we believe in the power of technology to transform businesses and improve lives. Our mission is to provide innovative, scalable, and user-friendly software solutions that help our clients achieve their goals.</p>
            
            <p>With years of experience in the industry, we have developed expertise across various technologies and platforms, enabling us to tackle projects of any complexity and scale.</p>
            
            <div class="stats">
              <div class="stat">
                <span class="stat-number">5+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat">
                <span class="stat-number">10+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
              <div class="stat">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Support</span>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <img src="/boardroom.png" alt="Engineering Boardroom" width="800" height="600" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 123, 255, 0.2); border: 1px solid rgba(255,255,255,0.1); width: 100%; height: auto; object-fit: cover; aspect-ratio: 4/3;" loading="lazy" decoding="async"/>
          </div>
        </div>
      </div>
    </section>
  `}function O(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#about").style.display="block",I()}function H(){const e=document.querySelector("#pricing");e.innerHTML=`
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
  `}function R(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#pricing").style.display="block",H()}function N(){const e=document.querySelector("#portfolio");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/cloud.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Our Portfolio</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Deploying massive applications natively on the cloud.</p>
      </div>
    </section>
    <section class="portfolio section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>NusuFi</h3>
              <p>A full-featured web3 platform for managing and investing in digital assets with a focus on security and low-cost investment.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Web3</span>
                <span class="tag">Blockchain</span>
                <span class="tag">DeFi</span>
                <span class="tag">NFTs</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>ElimuNexus LMS</h3>
              <p>A comprehensive learning management system for schools and  with student records with AI integration.</p>
              <div class="portfolio-tags">
                <span class="tag">Next.js</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Supabase</span>
                <span class="tag">AI</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>Moussad Realty</h3>
              <p>A premium real estate platform for verified listings, property investments, and long-term stays in Mombasa & Kisumu, featuring secure bookings and real-time mapping.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Real Estate</span>
                <span class="tag">Geolocation</span>
                <span class="tag">Map Integration</span>
                <span class="tag">Booking</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  `}function W(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#portfolio").style.display="block",N()}function $(){const e=document.querySelector("#team");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/boardroom.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Meet Our Team</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Our talented team of developers, managers, and marketers are here to bring your vision to life.</p>
      </div>
    </section>
    <section class="team section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="team-section-group" style="margin-bottom: 4rem;">
          <h3 class="team-group-title" style="text-align: left; margin: 0 0 2rem; font-size: 1.5rem; font-weight: 600; color: white; border-left: 4px solid var(--primary-color); padding-left: 1rem; text-transform: uppercase; letter-spacing: 1px;">Leadership & Strategy</h3>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">
                <img src="/Rodney-removebg-preview.png" alt="Rodney Gilbert" loading="lazy">
              </div>
              <h3>Rodney Gilbert</h3>
              <p class="role">CEO & Lead Developer</p>
              <p>Full-stack developer with expertise in modern web technologies and team leadership. Passionate about creating innovative solutions.</p>
            </div>
            
            <div class="team-member">
              <div class="member-avatar">
                <img src="/ASTRALIA.jpg" alt="Astralia Otieno" loading="lazy">
              </div>
              <h3>Astralia Otieno</h3>
              <p class="role">General Manager</p>
              <p>Experienced manager directing operations, organizing project lifecycles, and ensuring high-quality client deliverables. Focused on team cohesion and efficiency.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">
                <img src="/BRAYO.jpg" alt="Brian Gacao" loading="lazy">
              </div>
              <h3>Brian Gacao</h3>
              <p class="role">Business Developer</p>
              <p>Identifying strategic business opportunities, cultivating key partnerships, and driving growth. Focused on building long-term client relations and expanding market reach.</p>
            </div>
          </div>
        </div>

        <div class="team-section-group">
          <h3 class="team-group-title" style="text-align: left; margin: 0 0 2rem; font-size: 1.5rem; font-weight: 600; color: white; border-left: 4px solid var(--primary-color); padding-left: 1rem; text-transform: uppercase; letter-spacing: 1px;">Engineering & Growth</h3>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">SG</div>
              <h3>Sweeney Greg</h3>
              <p class="role">Backend Developer</p>
              <p>Specializing in secure databases, server-side algorithms, and third-party API integrations. Passionate about building robust backend infrastructure that scales.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">DK</div>
              <h3>Daphny Kemi</h3>
              <p class="role">Digital Marketing Intern</p>
              <p>Assisting in marketing outreach, content strategies, and social media enhancement. Eager to drive brand awareness and digital growth.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `}function _(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#team").style.display="block",$()}function G(){const e=document.querySelector("#contact");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/boardroom.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Get In Touch</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Ready to build something extraordinary? Let's talk.</p>
      </div>
    </section>
    <section class="contact section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Talk</h3>
            <p>We'd love to hear about your project and discuss how we can help you achieve your goals. Get in touch with us today!</p>
            
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>Email</h4>
                <p> enquiries@rodstartechdevs.co.ke</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <h4>Phone</h4>
                <p>+254 780 48 22 90</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h4>Office</h4>
                <p> Nairobi, Kenya</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">⏰</div>
              <div class="contact-details">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <form class="contact-form" id="contactForm">
            <div id="contactStatus" class="contact-status" aria-live="polite" aria-atomic="true"></div>
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="e.g. Rodney Gilbert">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="your.email@example.com">
            </div>
            
            <div class="form-group">
              <label for="company">Company (Optional)</label>
              <input type="text" id="company" name="company" placeholder="e.g. Moussad Realty">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="e.g. Custom Software Development Inquiry">
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" required placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `;const t=document.querySelector("#contactForm"),o=document.querySelector("#contactStatus"),m="https://formspree.io/f/xvgvayno";let i=null;function s(c,u="success",l=5e3){if(!o)return;i&&(clearTimeout(i),i=null),o.innerHTML=`
      <div class="notification notification--${u}" role="status">
        <div class="notification__content">${c}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `,o.querySelector(".notification");const p=o.querySelector(".notification__close");function v(){o&&(o.innerHTML="",i&&(clearTimeout(i),i=null))}p&&p.addEventListener("click",v),l>0&&(i=setTimeout(v,l))}t.addEventListener("submit",async c=>{c.preventDefault();const u=t.querySelector('button[type="submit"]'),l=u.textContent;u.textContent="Sending...",u.disabled=!0;const p=new FormData(t),v=Object.fromEntries(p.entries());try{const y=await fetch(m,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(v)});if(y.ok)s("Thank you — your message has been sent!","success",6e3),t.reset();else{const x=await y.json().catch(()=>null);console.error("Formspree error",y.status,x),s("There was a problem sending your message. Please try again later.","error",8e3)}}catch(y){console.error("Network error while sending form",y),s("Network error. Please check your connection and try again.","error",8e3)}finally{u.textContent=l,u.disabled=!1}})}function U(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#contact").style.display="block",G()}function K(){const e=document.querySelector("#notFound");e&&(e.innerHTML=`
    <section class="not-found section">
      <div class="container">
        <div class="not-found-content">
          <div class="not-found-graphic">
            <div class="error-code">404</div>
          </div>
          
          <div class="not-found-text">
            <h1>Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
            
            <div class="not-found-actions">
              <a href="#home" class="btn btn-primary">Go Back Home</a>
              <a href="#contact" class="btn btn-outline">Contact Us</a>
            </div>
            
            <div class="not-found-suggestions">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Meet Our Team</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `)}function Q(){K()}function V(){const e=document.querySelector("#privacy");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/privacy.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Privacy Policy</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">How we handle data, trade secrets, and operational privacy.</p>
      </div>
    </section>
    
    <section class="section" style="padding-top: 4rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <div class="legal-content" style="color: rgba(255,255,255,0.8); line-height: 1.8;">
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
  `}function X(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#privacy").style.display="block",window.scrollTo(0,0),V()}function Y(){const e=document.querySelector("#terms");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/terms.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Terms of Service</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Standard client agreements and operational policies.</p>
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
  `}function J(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#terms").style.display="block",window.scrollTo(0,0),Y()}const Z=[{title:"Laptops & Desktops",blurb:"Corporate-grade laptops, high-performance developer workstations, and ultrabooks from top-tier brands (HP, Dell, Lenovo, Apple).",tag:"Sourcing & Supply",icon:"💻",hue:"linear-gradient(135deg, rgba(0, 123, 255, 0.25), rgba(0, 0, 0, 0.6))",image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"},{title:"Networking Devices",blurb:"Enterprise switches, high-speed routers, access points, network cabinets, and structured cabling solutions.",tag:"Infrastructure",icon:"🌐",hue:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 40, 80, 0.7))",image:"https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"Computer Accessories",blurb:"Ergonomic keyboards, gaming/office mice, external SSDs, USB-C hubs, and productivity accessories.",tag:"Workspace",icon:"🔌",hue:"linear-gradient(135deg, rgba(91, 180, 255, 0.2), rgba(0, 0, 0, 0.6))",image:"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"Printers & Copiers",blurb:"Heavy-duty print stations, smart ink-tank printers, scanner-copier combos, and genuine toners/consumables.",tag:"Office Equipment",icon:"🖨️",hue:"linear-gradient(135deg, rgba(0, 86, 179, 0.3), rgba(0, 0, 0, 0.65))",image:"https://images.pexels.com/photos/1683498/pexels-photo-1683498.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"CCTV & Security",blurb:"Smart IP surveillance systems, HD cameras, biometric access control terminals, and electronic locks.",tag:"Security & Surveillance",icon:"🛡️",hue:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(26, 10, 46, 0.65))",image:"https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"Other Tech & Backups",blurb:"Uninterruptible Power Supplies (UPS), voltage regulators, smart IoT accessories, and custom gadgets.",tag:"Power & IoT",icon:"⚡",hue:"linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(22, 33, 62, 0.7))",image:"https://images.pexels.com/photos/45082/pexels-photo-45082.jpeg?auto=compress&cs=tinysrgb&w=400"}],ee=[{id:"mikrotik-rb951",name:"Mikrotik RB951",price:7500,category:"Routers & GPON",desc:"High performance wireless SOHO AP with a new generation Atheros CPU and robust processing power.",image:"/mikrotik_router.jpg"},{id:"f3-tenda",name:"F3 Tenda",price:950,category:"Routers & GPON",desc:"300Mbps wireless router designed for smart home networking life. Easy setup and high stability.",image:"/tenda_router.jpg"},{id:"cat6-indoor",name:"Cat 6 Indoor Cable",price:4e3,category:"Cables",desc:"High-speed, high-quality copper indoor network cable (305m roll) for local networking.",image:"/cat6_cable.png"},{id:"cat6-outdoor",name:"Cat 6 Outdoor Cable",price:6e3,category:"Cables",desc:"Weatherproof, double-shielded outdoor network cable (305m roll) for heavy-duty networking.",image:"/cat6_cable.png"},{id:"tape-small",name:"Insulating Tape (Small)",price:70,category:"Accessories & Management",desc:"Durable electrical insulating tape for wire wrapping and safe splicing.",image:"/electrical_tape.png"},{id:"tape-big",name:"Insulating Tape (Large)",price:130,category:"Accessories & Management",desc:"High-grade professional electrical insulating tape for heavy-duty wire protection.",image:"/electrical_tape.png"},{id:"adapter-small",name:"Adapter Box (Small)",price:300,category:"Accessories & Management",desc:"Small protective adapter casing/junction box for clean node connections.",image:"/adapter_box.png"},{id:"adapter-big",name:"Adapter Box (Big)",price:350,category:"Accessories & Management",desc:"Large weatherproof adapter box/junction box for enclosing connectors and splitters.",image:"/adapter_box.png"},{id:"gpon",name:"GPON ONU",price:1350,category:"Routers & GPON",desc:"Gigabit Passive Optical Network terminal for high-speed fiber-to-the-home internet access.",image:"/gpon_onu.jpg"},{id:"cable-tie-small",name:"Cable Ties (Small Size)",price:180,category:"Accessories & Management",desc:"Pack of small nylon cable zip ties for neat wire and cable management.",image:"/cable_ties.jpg"},{id:"cable-tie-big",name:"Cable Ties (Big Size)",price:250,category:"Accessories & Management",desc:"Pack of large, high-tensile strength nylon cable ties for securing cables.",image:"/cable_ties.jpg"},{id:"switch-8port",name:"Switch 8 Port",price:1200,category:"Switches",desc:"Compact 8-port Ethernet switch for fast desktop wired network expansion.",image:"/network_switch.jpg"},{id:"switch-gigaport",name:"Gigaport Switch",price:2450,category:"Switches",desc:"High-speed Gigabit Ethernet switch for zero-bottleneck data transfer across nodes.",image:"/network_switch_giga.jpg"},{id:"extension-standard",name:"Power Extension",price:450,category:"Accessories & Management",desc:"Multi-socket power extension strip with surge protection for office or home setups.",image:"/power_extension.jpg"},{id:"extension-10m",name:"Power Extension (10m)",price:1300,category:"Accessories & Management",desc:"Heavy-duty 10-meter long power extension cable with multiple sockets and surge protector.",image:"/power_extension_10m.jpg"}];function te(){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("animate-in")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".shop-page .fade-in-up").forEach(t=>e.observe(t))}function ie(){const e=document.querySelector("#shop"),t=Z.map(n=>`
    <article class="shop-category-card fade-in-up">
      <div class="shop-card-visual" style="position: relative;">
        <img src="${n.image}" alt="${n.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; pointer-events: none;" loading="lazy">
        <div style="position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.65)); pointer-events: none;"></div>
        <div class="shop-card-icon" style="position: relative; z-index: 1;" aria-hidden="true">${n.icon}</div>
      </div>
      <h3>${n.title}</h3>
      <p>${n.blurb}</p>
      <div class="shop-card-meta">
        <span class="shop-tag">${n.tag}</span>
        <span class="shop-tag" style="opacity:0.75;">Coming soon</span>
      </div>
    </article>
  `).join("");e.innerHTML=`
    <div class="shop-page">
      <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('/home_network.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
          <p class="shop-hero-badge fade-in-up">Rodstar Hardware · Supply & Sourcing</p>
          <h1 class="shop-hero-title fade-in-up">Premium Tech Sourcing & Hardware</h1>
          <p class="shop-hero-lead fade-in-up">We supply digital gadgets, laptops, computer accessories, networking equipment, printers, and other tech products for businesses and individuals across Kenya. Partnering with top-tier suppliers to deliver quality at scale.</p>
          <div class="shop-hero-ctas fade-in-up">
            <a href="#catalog-section" class="btn btn-primary">Browse Catalog</a>
            <a href="#order-form-section" class="btn btn-outline">Custom Sourcing Request</a>
          </div>
        </div>
      </section>

      <section class="shop-catalog section" id="catalog-section" aria-labelledby="shop-catalog-heading">
        <div class="container">
          <div class="shop-section-head fade-in-up">
            <h2 id="shop-catalog-heading">Available Stock & Hardware</h2>
            <p>Browse our in-stock items ready for immediate sourcing and local delivery across Kenya.</p>
          </div>
          
          <div class="shop-catalog-controls fade-in-up">
            <div class="search-bar-wrapper">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="productSearch" placeholder="Search hardware, brands, specs...">
            </div>
            
            <div class="filter-buttons-wrapper">
              <button class="filter-btn active" data-category="All">All</button>
              <button class="filter-btn" data-category="Routers & GPON">Routers & GPON</button>
              <button class="filter-btn" data-category="Cables">Cables</button>
              <button class="filter-btn" data-category="Switches">Switches</button>
              <button class="filter-btn" data-category="Accessories & Management">Accessories & Management</button>
            </div>
          </div>

          <div class="shop-products-grid" id="product-grid">
            <!-- Filtered products will render here -->
          </div>
        </div>
      </section>

      <section class="shop-workspace section" id="order-form-section" aria-labelledby="shop-workspace-heading">
        <div class="container">
          <div class="shop-grid-layout">
            <div class="shop-catalog-info">
              <div class="shop-section-head fade-in-up" style="text-align: left; margin-bottom: 2rem;">
                <h2 id="shop-workspace-heading">Sourcing Capabilities</h2>
                <p>Browse our core capabilities. We handle everything from bulk business setups to custom individual accessories.</p>
              </div>
              <div class="shop-categories-grid">
                ${t}
              </div>
            </div>

            <div class="shop-form-wrapper fade-in-up">
              <div class="urgent-order-card">
                <h3>Urgent Hardware Order Form</h3>
                <p>Need tech gadgets, laptops, or equipment urgently? Tell us your specifications, quantity, and delivery window, and our sourcing department will respond immediately with availability and pricing options.</p>
                
                <form class="urgent-order-form" id="urgentOrderForm">
                  <div id="orderStatus" class="contact-status" aria-live="polite" aria-atomic="true"></div>
                  
                  <div class="form-group">
                    <label for="orderName">Full Name</label>
                    <input type="text" id="orderName" name="name" required placeholder="Your full name">
                  </div>
                  
                  <div class="form-group">
                    <label for="orderEmail">Email Address</label>
                    <input type="email" id="orderEmail" name="email" required placeholder="your.email@example.com">
                  </div>

                  <div class="form-group">
                    <label for="orderPhone">Phone Number / WhatsApp</label>
                    <input type="tel" id="orderPhone" name="phone" required placeholder="e.g. +254 700 000 000">
                  </div>
                  
                  <div class="form-group">
                    <label for="orderCompany">Company / Organization (Optional)</label>
                    <input type="text" id="orderCompany" name="company" placeholder="e.g. Acme Tech Kenya">
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="orderUrgency">Delivery Urgency</label>
                      <select id="orderUrgency" name="urgency" required>
                        <option value="" disabled selected>Select urgency...</option>
                        <option value="Immediate (Within 24 Hours)">Immediate (Within 24 Hours)</option>
                        <option value="Urgent (Within 3 Days)">Urgent (Within 3 Days)</option>
                        <option value="Standard (Within 1 Week)">Standard (Within 1 Week)</option>
                        <option value="Bulk Sourcing / Sourcing Details Needed">Bulk Sourcing / Sourcing Details Needed</option>
                      </select>
                    </div>
                    
                    <div class="form-group">
                      <label for="orderQuantity">Quantity Needed</label>
                      <input type="number" id="orderQuantity" name="quantity" min="1" required placeholder="e.g. 5">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="orderItems">Items & Specifications Requested</label>
                    <div id="selectedItemsContainer" style="display: none; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); border-radius: 12px; padding: 1rem; margin-bottom: 0.75rem;">
                      <h4 style="font-size: 0.95rem; font-weight: 600; color: white; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                        <span>Selected Items</span>
                        <button type="button" id="clearCartBtn" style="background: transparent; border: none; color: #ff4d4d; font-size: 0.8rem; cursor: pointer; padding: 0; text-decoration: underline;">Clear All</button>
                      </h4>
                      <ul id="selectedItemsList" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
                      </ul>
                    </div>
                    <textarea id="orderItems" name="message" required placeholder="List laptops, accessories, printers, specs, or models you need..."></textarea>
                  </div>

                  <div class="form-group">
                    <label for="orderLocation">Delivery / Shipping Location</label>
                    <input type="text" id="orderLocation" name="location" required placeholder="e.g. Nairobi CBD, Westlands, Mombasa">
                  </div>

                  <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Submit Sourcing Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;const o=document.querySelector("#product-grid"),m=document.querySelector("#productSearch"),i=document.querySelectorAll(".filter-btn");let s="All",c="";function u(){const n=ee.filter(a=>{const h=s==="All"||a.category===s,g=a.name.toLowerCase().includes(c)||a.desc.toLowerCase().includes(c)||a.category.toLowerCase().includes(c);return h&&g});if(n.length===0){o.innerHTML=`
        <div class="shop-no-results fade-in-up animate-in">
          <p>No products found matching your search. Please submit a custom request below.</p>
        </div>
      `;return}o.innerHTML=n.map(a=>`
      <article class="shop-product-card fade-in-up animate-in">
        <div class="product-card-image-wrapper">
          <img src="${a.image}" alt="${a.name}" loading="lazy">
          <span class="product-category-tag">${a.category}</span>
        </div>
        <div class="product-card-body">
          <h3>${a.name}</h3>
          <p class="product-desc">${a.desc}</p>
          <div class="product-card-footer">
            <span class="product-price">KES ${a.price.toLocaleString()}</span>
            <button class="btn btn-primary product-action-btn" data-name="${a.name}" data-price="${a.price}">Inquire / Order</button>
          </div>
        </div>
      </article>
    `).join(""),v()}let l=[];function p(){const n=document.querySelector("#selectedItemsContainer"),a=document.querySelector("#selectedItemsList"),h=document.querySelector("#orderItems"),g=document.querySelector("#orderQuantity");if(!n||!a||!h||!g)return;if(l.length===0){n.style.display="none",a.innerHTML="",h.value="",g.value="",document.querySelectorAll(".product-action-btn").forEach(r=>{r.textContent="Inquire / Order"});return}n.style.display="block",a.innerHTML=l.map(r=>`
      <li style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-light); background: rgba(255,255,255,0.02); padding: 0.5rem 0.75rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
        <span style="font-weight: 500;">${r.name} <span style="opacity: 0.7; font-size: 0.75rem;">(x${r.quantity})</span></span>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <button type="button" class="cart-adjust-btn" data-name="${r.name}" data-action="decrease" style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: bold; line-height: 1;">-</button>
          <button type="button" class="cart-adjust-btn" data-name="${r.name}" data-action="increase" style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: bold; line-height: 1;">+</button>
          <button type="button" class="cart-remove-btn" data-name="${r.name}" style="background: transparent; border: none; color: #ff4d4d; cursor: pointer; font-size: 1.25rem; margin-left: 0.5rem; padding: 0; line-height: 1; display: inline-flex; align-items: center; justify-content: center;">&times;</button>
        </div>
      </li>
    `).join("");const b=`[Selected Hardware Items]
=========================
${l.map((r,d)=>`${d+1}. ${r.name} - Qty: ${r.quantity} - Est. KES ${(r.price*r.quantity).toLocaleString()}`).join(`
`)}

Total Estimated: KES ${l.reduce((r,d)=>r+d.price*d.quantity,0).toLocaleString()}`;h.value=b,g.value=l.reduce((r,d)=>r+d.quantity,0),a.querySelectorAll(".cart-adjust-btn").forEach(r=>{r.addEventListener("click",d=>{const f=d.target.getAttribute("data-name"),w=d.target.getAttribute("data-action"),S=l.find(C=>C.name===f);S&&(w==="increase"?S.quantity+=1:w==="decrease"&&(S.quantity-=1,S.quantity<=0&&(l=l.filter(C=>C.name!==f))),p())})}),a.querySelectorAll(".cart-remove-btn").forEach(r=>{r.addEventListener("click",d=>{const f=d.target.getAttribute("data-name");l=l.filter(w=>w.name!==f),p()})}),document.querySelectorAll(".product-action-btn").forEach(r=>{const d=r.getAttribute("data-name"),f=l.find(w=>w.name===d);f?r.textContent=`In Cart (${f.quantity})`:r.textContent="Inquire / Order"})}document.addEventListener("click",n=>{n.target&&n.target.id==="clearCartBtn"&&(l=[],p())});function v(){document.querySelectorAll(".product-action-btn").forEach(n=>{n.addEventListener("click",a=>{const h=a.target.getAttribute("data-name"),g=a.target.getAttribute("data-price"),b=l.find(d=>d.name===h);b?b.quantity+=1:l.push({name:h,price:parseInt(g),quantity:1}),p();const r=document.querySelector("#order-form-section");if(r){r.scrollIntoView({behavior:"smooth"});const d=r.querySelector(".urgent-order-card");d&&(d.classList.add("highlight-pulse"),setTimeout(()=>{d.classList.remove("highlight-pulse")},2e3))}})})}m.addEventListener("input",n=>{c=n.target.value.toLowerCase().trim(),u()}),i.forEach(n=>{n.addEventListener("click",()=>{i.forEach(a=>a.classList.remove("active")),n.classList.add("active"),s=n.getAttribute("data-category"),u()})}),u(),te();const y=document.querySelector("#urgentOrderForm"),x=document.querySelector("#orderStatus"),E="https://formspree.io/f/xvgvayno";let k=null;function T(n,a="success",h=5e3){if(!x)return;k&&(clearTimeout(k),k=null),x.innerHTML=`
      <div class="notification notification--${a}" role="status">
        <div class="notification__content">${n}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `,x.querySelector(".notification");const g=x.querySelector(".notification__close");function b(){x&&(x.innerHTML="",k&&(clearTimeout(k),k=null))}g&&g.addEventListener("click",b),h>0&&(k=setTimeout(b,h))}y.addEventListener("submit",async n=>{n.preventDefault();const a=y.querySelector('button[type="submit"]'),h=a.textContent;a.textContent="Sending Request...",a.disabled=!0;const g=new FormData(y),b=g.get("phone"),r=g.get("company")||"N/A",d=g.get("urgency"),f=g.get("quantity"),w=g.get("location"),S=g.get("message"),C={name:g.get("name"),email:g.get("email"),subject:`Urgent Hardware Sourcing Request: ${d}`,company:r,phone:b,urgency:d,quantity:f,location:w,message:`
[URGENT SHOP ORDER REQUEST]
----------------------------------
Company: ${r}
Phone/WhatsApp: ${b}
Urgency Level: ${d}
Quantity Needed: ${f}
Delivery Location: ${w}

Requested Items & Specs:
${S}
      `.trim()};try{const q=await fetch(E,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(C)});if(q.ok)T("Thank you — your sourcing request has been submitted. Our team will contact you shortly!","success",7e3),y.reset(),l=[],p();else{const B=await q.json().catch(()=>null);console.error("Formspree order error",q.status,B),T("There was a problem submitting your request. Please try again or contact us directly.","error",8e3)}}catch(q){console.error("Network error while submitting order",q),T("Network error. Please check your internet connection and try again.","error",8e3)}finally{a.textContent=h,a.disabled=!1}})}function oe(){document.querySelectorAll("main > section").forEach(t=>{t.style.display="none"});const e=document.querySelector("#shop");e.style.display="block",ie()}function se(){const e=document.querySelector("#development");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.82)), url('/cloud.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Software Development</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">End-to-end engineering for web, mobile, and cloud—clean architecture, secure delivery, and measurable outcomes.</p>
      </div>
    </section>
    <section class="services section" style="padding-top: 4rem;">
      <div class="container">
        <div class="services-intro" style="margin-bottom: 2.5rem;">
          <p style="text-align: center; color: var(--text-light); max-width: 720px; margin: 0 auto; font-size: 1.05rem; line-height: 1.65;">
            Rodstar Tech Devs builds production-grade software with the same discipline we apply to hosting and infrastructure: clear scopes, documented APIs, and deployments you can operate with confidence.
          </p>
        </div>
        <div class="services-grid">
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web applications" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Web applications</h3>
            <p>SPAs, dashboards, and marketing sites with performance-first builds, accessibility, and SEO-aware structure.</p>
          </div>
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Mobile engineering</h3>
            <p>Native and cross-platform releases with store-ready pipelines, crash reporting, and sensible offline behavior.</p>
          </div>
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="APIs" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>APIs & integrations</h3>
            <p>REST and event-driven services, third-party integrations, and internal tools that stay maintainable as you scale.</p>
          </div>
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>DevOps & reliability</h3>
            <p>CI/CD, environments, and observability so your team ships safely and rolls back quickly when needed.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="cta-section" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/homepage_hero.png') center/cover !important;">
      <div class="container">
        <div class="cta-content">
          <h2 class="fade-in-up">Start a development engagement</h2>
          <p class="fade-in-up">Tell us about your product, timeline, and constraints—we will respond with a practical technical plan.</p>
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary btn-large nav-link">Contact engineering</a>
            <a href="/services" class="btn btn-outline btn-large nav-link" style="border-radius: 50px;">View all services</a>
          </div>
        </div>
      </div>
    </section>
  `}function ae(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#development").style.display="block",se()}function re(){const e=document.querySelector("#services");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/cloud.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Our Services</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">We offer comprehensive software development services to meet all your digital needs.</p>
      </div>
    </section>
    <section class="services section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="services-grid">
          <div class="service-card">
            <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Hosting" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Enterprise Hosting</h3>
            <p>Premium managed hosting environments featuring custom domain registration databases, dedicated enterprise emails, and high-availability servers structured for maximal uptime.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web Arch" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Web Architecture</h3>
            <p>High-end single page applications built inherently scalable with modern javascript environments. We create responsive, instantaneous, and cinematic web structures.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile Apps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Mobile App Deployment</h3>
            <p>Native mobile applications structurally compiled for iOS and Android. Cross-platform engineering pipelines to deploy high-velocity user experiences directly to app stores.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="UX Design" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>UI/UX Systems</h3>
            <p>Glassmorphism, high-contrast dark modes, and dynamic geometry. We engineer interface experiences that prioritize raw digital immersion and absolute conversion rates.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Cloud" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Cloud Solutions</h3>
            <p>Elastic infrastructure setups running parallel load balancing using AWS, Vercel, and hybrid structures. We scale your raw networking data infinitely.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Custom Code" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Custom Software Systems</h3>
            <p>Tailored computational systems engineered explicitly for complex datasets. Ranging from Fintech POS ledgers, CRM algorithms to multi-node operational architecture.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>DevOps & CI/CD Pipelines</h3>
            <p>Automated software delivery streams guaranteeing your production environments sync flawlessly directly with your active coding networks via zero-latency pipelines.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Digital Marketing" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Digital Marketing</h3>
            <p>Strategic online marketing, search engine optimization (SEO), and social media campaigns designed to grow your brand and drive active user acquisition.</p>
          </div>

          <div class="service-card">
            <img src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Data Entry" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Data Entry & Management</h3>
            <p>Accurate, structured, and secure data entry services to keep your business records organized, up-to-date, and optimized for smooth operations.</p>
          </div>

          <div class="service-card">
            <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Data Analysis" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Data Analysis</h3>
            <p>Deep-dive data processing, visual dashboard modeling, and statistical insights to help your business make data-backed strategic decisions.</p>
          </div>

          <div class="service-card">
            <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Data Science" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Data Science</h3>
            <p>Predictive modeling, machine learning integration, and advanced analytical pipelines to transform raw data into intelligent automation.</p>
          </div>

          <div class="service-card">
            <img src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Maintenance & Support" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Maintenance & Support</h3>
            <p>Dedicated maintenance, regular updates, security patching, and hosting support for existing websites, portals, and software systems.</p>
          </div>
        </div>
      </div>
    </section>
  `}function ne(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#services").style.display="block",re()}function le(){const e=document.querySelector("#navigation");e.innerHTML=`
    <nav class="navbar">
      <div class="container">
        <div class="nav-container">
          <a href="/" class="logo">
            <img src="/RODSTAR.png" alt="Rodstar Tech Devs" width="120" height="120" style="height: 38px; width: auto; object-fit: contain;" loading="eager" fetchpriority="high">
          </a>
          <ul class="nav-menu">
            <li><a href="/" class="nav-link">Home</a></li>
            <li class="nav-dropdown">
              <a href="/services" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Services
                <span class="nav-chevron" aria-hidden="true"></span>
              </a>
              <ul class="nav-dropdown-menu" role="menu">
                <li role="none"><a href="/development" class="nav-link nav-dropdown-link" role="menuitem">Development & Services</a></li>
                <li role="none"><a href="/shop" class="nav-link nav-dropdown-link" role="menuitem">Shop & Sourcing</a></li>
              </ul>
            </li>
            <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
            <li><a href="/about" class="nav-link">About</a></li>
            <li><a href="/team" class="nav-link">Team</a></li>
            <li><a href="/pricing" class="nav-link">Pricing</a></li>
            <li><a href="/contact" class="nav-link">Contact</a></li>
            <li>
              <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
                <span class="theme-toggle-icon">☀️</span>
              </button>
            </li>
          </ul>
          <button type="button" class="mobile-menu-btn" aria-label="Open menu">☰</button>
          <div class="mobile-menu">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Services</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/development" class="nav-link">Development & Services</a>
                    <a href="/shop" class="nav-link">Shop & Sourcing</a>
                  </div>
                </details>
              </li>
              <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
              <li><a href="/about" class="nav-link">About</a></li>
              <li><a href="/team" class="nav-link">Team</a></li>
              <li><a href="/pricing" class="nav-link">Pricing</a></li>
              <li><a href="/contact" class="nav-link">Contact</a></li>
              <li style="padding: 1rem 1rem 0.5rem; display: flex; justify-content: center;">
                <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
                  <span class="theme-toggle-icon" style="margin-right: 0.5rem;">☀️</span> Theme
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  `}function ce(){const e=document.querySelector("#footer");e.innerHTML=`
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <img src="/RODSTAR.png" alt="Rodstar Logo" width="120" height="120" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem; display: block; box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);" loading="lazy" decoding="async">
            <p>We are a minimalist digital infrastructure company. Delivering premium managed hosting, enterprise emails, custom domains, and bespoke software systems designed for scale.</p>
            <div class="social-links" style="display: flex; align-items: center; gap: 1rem;">
              <a href="#" class="social-icon" aria-label="Instagram" style="display: flex; align-items: center; justify-content: center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><circle cx="12" cy="12" r="3" fill="white"></circle><circle cx="18" cy="6" r="1" fill="white"></circle></svg></a>
              <a href="#" class="social-icon" aria-label="X" style="display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display: block; margin: 0; padding: 0;">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="TikTok" style="display: flex; align-items: center; justify-content: center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 9.5c-.5-.2-1-.4-1.5-.3V12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.3 0 .6.05.9.1V6.5c-.6-.1-1.1-.15-1.7-.15-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6v-2.5c1.1.8 2.4 1.3 3.8 1.4v-2.2c-.5 0-1-.05-1.5-.2z"></path></svg></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Infrastructure</h3>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Managed Web Hosting</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Enterprise Emails</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Custom Domains</a>
            <a href="/services" class="nav-link">Cloud Deployments</a>
            <a href="/services" class="nav-link">System Architecture</a>
          </div>
          
          <div class="footer-section">
            <h3>Company</h3>
            <a href="/about" class="nav-link">About Us</a>
            <a href="/team" class="nav-link">Engineering Team</a>
            <a href="/portfolio" class="nav-link">Portfolio</a>
            <a href="/development" class="nav-link">Development</a>
            <a href="/shop" class="nav-link">Shop</a>
            <a href="/contact" class="nav-link">Contact Sales</a>
          </div>
          
          <div class="footer-section">
            <h3>Reach Out</h3>
            <p style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg> <a href="mailto:enquiries@rodstartechdevs.co.ke" style="display:inline;">enquiries@rodstartechdevs.co.ke</a></p>
            <p style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <a href="tel:+254780482290" style="display:inline;">+254780482290</a></p>
            <p style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Nairobi, Kenya (Remote)</p>
            <a href="https://wa.me/254780482290" class="whatsapp-btn" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266l-.335.194-.347.059 1.327 3.849.274-.447c1.203-1.73 3.02-2.804 5.031-2.804 3.165 0 5.742 2.573 5.742 5.73 0 1.575-.548 3.06-1.55 4.286l.3.292.045.035c.78.774 1.217 1.814 1.217 2.932 0 3.077-2.512 5.59-5.589 5.59-3.076 0-5.589-2.512-5.589-5.589 0-2.049.979-3.977 2.631-5.21l.287-.213.046-.034c.3-.222.432-.632.328-1.01l-1.298-3.76-.358.057C5.64 3.05 2.767 5.9 2.767 9.467c0 3.81 3.1 6.91 6.91 6.91s6.91-3.1 6.91-6.91c0-3.167-2.29-5.834-5.348-6.51l-.334-.059z"></path></svg> Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Rodstar Tech. All rights reserved.</p>
          <div style="display: flex; gap: 2rem;">
            <a href="/privacy" class="nav-link">Privacy Policy</a>
            <a href="/terms" class="nav-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `}function de(){const e=document.body.classList.toggle("light-theme");localStorage.setItem("theme",e?"light":"dark"),pe(e)}function pe(e){document.querySelectorAll(".theme-toggle-icon").forEach(t=>{t.textContent=e?"🌙":"☀️",t.style.transform=e?"rotate(360deg)":"rotate(0deg)"})}document.addEventListener("click",e=>{e.target.closest(".theme-toggle-btn")&&de()});const A={"/":z,"/about":O,"/services":ne,"/pricing":R,"/portfolio":W,"/team":_,"/contact":U,"/privacy":X,"/terms":J,"/shop":oe,"/development":ae},P=new Set(Object.keys(A));function ge(){const e=window.location.hash.replace(/^#/,"");if(e&&e!=="/")return;let t=window.location.pathname||"/";t=t.replace(/\/index\.html$/i,"")||"/",t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1));const o="/".replace(/\/$/,"");if(o&&t.startsWith(o)&&(t=t.slice(o.length)||"/"),t.startsWith("/")||(t=`/${t}`),t==="/"||!P.has(t))return;const m="/".replace(/\/$/,""),i=m===""?"/":`${m}/`;window.history.replaceState(null,"",`${window.location.origin}${i}#${t}`)}function F(){ge();const e=window.location.hash.slice(1)||"/",t=e.startsWith("/")?e:"/"+e,o=A[t]||Q,m=document.querySelector("#app");!A[t]?m.innerHTML=`
      <div class="app">
        <nav id="navigation"></nav>
        <main>
          <section id="notFound"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `:m.innerHTML=`
      <div class="app">
        <nav id="navigation"></nav>
        <main>
          <section id="hero"></section>
          <section id="about"></section>
          <section id="services"></section>
          <section id="pricing"></section>
          <section id="portfolio"></section>
          <section id="team"></section>
          <section id="contact"></section>
          <section id="privacy"></section>
          <section id="terms"></section>
          <section id="development"></section>
          <section id="shop"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `,le(),ce(),o(),window.scrollTo(0,0),me(t),ue(t)}function me(e){var m,i;document.querySelectorAll(".nav-link").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".nav-dropdown").forEach(s=>s.classList.remove("is-active-route")),new Set(["/services","/shop","/development"]).has(e)&&((m=document.querySelector(".nav-dropdown"))==null||m.classList.add("is-active-route"),(i=document.querySelector(".nav-dropdown-toggle"))==null||i.classList.add("active"));const o=document.querySelector(`.nav-link[href="${e}"]`);o&&o.classList.add("active")}const D={"/":"Rodstar Tech Devs - Professional Software Development","/about":"About Us | Rodstar Tech Devs","/services":"Services | Rodstar Tech Devs","/development":"Software Development | Rodstar Tech Devs","/pricing":"Pricing | Rodstar Tech Devs","/portfolio":"Portfolio | Rodstar Tech Devs","/team":"Team | Rodstar Tech Devs","/contact":"Contact | Rodstar Tech Devs","/privacy":"Privacy Policy | Rodstar Tech Devs","/terms":"Terms of Service | Rodstar Tech Devs","/shop":"Shop | Rodstar Tech Devs"};function ue(e){if(!P.has(e)){document.title="Page Not Found | Rodstar Tech Devs";return}document.title=D[e]||D["/"]}window.addEventListener("popstate",()=>{F()});window.addEventListener("hashchange",()=>{F()});document.addEventListener("click",e=>{if(e.target.matches(".nav-link")||e.target.closest(".nav-link")){e.preventDefault();const o=(e.target.matches(".nav-link")?e.target:e.target.closest(".nav-link")).getAttribute("href");o.startsWith("/")&&(window.location.hash=o)}});document.addEventListener("DOMContentLoaded",()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{F()},{timeout:1e3}):setTimeout(()=>{F()},100)});document.addEventListener("click",e=>{e.target.closest(".mobile-menu-btn")&&(e.stopPropagation(),document.querySelector(".mobile-menu").classList.toggle("active")),e.target.closest(".mobile-menu .nav-link")&&document.querySelector(".mobile-menu").classList.remove("active")});
