(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function F(){const e=document.querySelector("#hero");e.innerHTML=`
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
  `,C(),T()}function C(){const e=document.querySelectorAll(".stat-number"),t=new IntersectionObserver(s=>{s.forEach(i=>{if(i.isIntersecting){const a=parseFloat(i.target.getAttribute("data-target")),d=a/(2e3/16);let c=0;const l=setInterval(()=>{c+=d,c>=a&&(c=a,clearInterval(l)),i.target.getAttribute("data-target")==="99.9"?i.target.textContent=c.toFixed(1)+"%":i.target.textContent=Math.floor(c),i.target.getAttribute("data-target")==="100"&&(i.target.textContent=Math.floor(c)+"%"),i.target.getAttribute("data-target")==="24"&&(i.target.textContent=Math.floor(c)+"/7")},16);t.unobserve(i.target)}})});e.forEach(s=>t.observe(s));const o=document.querySelector("#typewriter-motto");if(o){let r=function(){if(!document.body.contains(o))return;a===0&&(o.innerHTML='<span class="gradient-text"></span><span class="cursor">|</span>');const d=o.querySelector(".gradient-text"),c=o.querySelector(".cursor");if(a<s.length)d&&(d.innerHTML+=s.charAt(a)),a++,setTimeout(r,60);else if(a<s.length+i.length)c&&c.remove(),o.innerHTML+=i.charAt(a-s.length)+'<span class="cursor">|</span>',a++,setTimeout(r,60);else{const l=o.querySelector(".cursor");l&&l.classList.add("blink")}};var n=r;const s="Engineering Growth",i=" Through Technology.";let a=0;setTimeout(r,400)}}function T(){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("animate-in")})},{threshold:.1});document.querySelectorAll(".fade-in-up").forEach(t=>{e.observe(t)})}function D(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#hero").style.display="block",F()}function q(){const e=document.querySelector("#about");e.innerHTML=`
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
  `}function P(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#about").style.display="block",q()}function A(){const e=document.querySelector("#services");e.innerHTML=`
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
        </div>
      </div>
    </section>
  `}function B(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#services").style.display="block",A()}function E(){const e=document.querySelector("#pricing");e.innerHTML=`
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
  `}function L(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#pricing").style.display="block",E()}function M(){const e=document.querySelector("#portfolio");e.innerHTML=`
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
              <h3>DevSoko</h3>
              <p>A platform for freelancers to find clients and projects, with a focus on security and reliability.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Biometrics</span>
                <span class="tag">Security</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  `}function j(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#portfolio").style.display="block",M()}function H(){const e=document.querySelector("#team");e.innerHTML=`
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/boardroom.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Meet Our Team</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Our talented team of developers, designers, and project managers are here to bring your vision to life.</p>
      </div>
    </section>
    <section class="team section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">RG</div>
            <h3>Rodney Gilbert</h3>
            <p class="role">CEO & Lead Developer</p>
            <p>Full-stack developer with expertise in modern web technologies and team leadership. Passionate about creating innovative solutions.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">EF</div>
            <h3>Eddy Frank</h3>
            <p class="role">Senior Developer & Designer</p>
            <p>Specializes in React, Vue.js, backend development, and modern CSS frameworks. Creates beautiful and responsive user interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  `}function z(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#team").style.display="block",H()}function O(){const e=document.querySelector("#contact");e.innerHTML=`
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
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="company">Company (Optional)</label>
              <input type="text" id="company" name="company">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required>
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
  `;const t=document.querySelector("#contactForm"),o=document.querySelector("#contactStatus"),n="https://formspree.io/f/xvgvayno";let s=null;function i(a,r="success",d=5e3){if(!o)return;s&&(clearTimeout(s),s=null),o.innerHTML=`
      <div class="notification notification--${r}" role="status">
        <div class="notification__content">${a}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `,o.querySelector(".notification");const c=o.querySelector(".notification__close");function l(){o&&(o.innerHTML="",s&&(clearTimeout(s),s=null))}c&&c.addEventListener("click",l),d>0&&(s=setTimeout(l,d))}t.addEventListener("submit",async a=>{a.preventDefault();const r=t.querySelector('button[type="submit"]'),d=r.textContent;r.textContent="Sending...",r.disabled=!0;const c=new FormData(t),l=Object.fromEntries(c.entries());try{const p=await fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)});if(p.ok)i("Thank you — your message has been sent!","success",6e3),t.reset();else{const u=await p.json().catch(()=>null);console.error("Formspree error",p.status,u),i("There was a problem sending your message. Please try again later.","error",8e3)}}catch(p){console.error("Network error while sending form",p),i("Network error. Please check your connection and try again.","error",8e3)}finally{r.textContent=d,r.disabled=!1}})}function R(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#contact").style.display="block",O()}function I(){const e=document.querySelector("#notFound");e&&(e.innerHTML=`
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
  `)}function W(){I()}function N(){const e=document.querySelector("#privacy");e.innerHTML=`
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
  `}function U(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#privacy").style.display="block",window.scrollTo(0,0),N()}function $(){const e=document.querySelector("#terms");e.innerHTML=`
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
  `}function _(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#terms").style.display="block",window.scrollTo(0,0),$()}const G=[{title:"Laptops & Desktops",blurb:"Corporate-grade laptops, high-performance developer workstations, and ultrabooks from top-tier brands (HP, Dell, Lenovo, Apple).",tag:"Sourcing & Supply",icon:"💻",hue:"linear-gradient(135deg, rgba(0, 123, 255, 0.25), rgba(0, 0, 0, 0.6))"},{title:"Networking Devices",blurb:"Enterprise switches, high-speed routers, access points, network cabinets, and structured cabling solutions.",tag:"Infrastructure",icon:"🌐",hue:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 40, 80, 0.7))"},{title:"Computer Accessories",blurb:"Ergonomic keyboards, gaming/office mice, external SSDs, USB-C hubs, and productivity accessories.",tag:"Workspace",icon:"🔌",hue:"linear-gradient(135deg, rgba(91, 180, 255, 0.2), rgba(0, 0, 0, 0.6))"},{title:"Printers & Copiers",blurb:"Heavy-duty print stations, smart ink-tank printers, scanner-copier combos, and genuine toners/consumables.",tag:"Office Equipment",icon:"🖨️",hue:"linear-gradient(135deg, rgba(0, 86, 179, 0.3), rgba(0, 0, 0, 0.65))"},{title:"CCTV & Security",blurb:"Smart IP surveillance systems, HD cameras, biometric access control terminals, and electronic locks.",tag:"Security & Surveillance",icon:"🛡️",hue:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(26, 10, 46, 0.65))"},{title:"Other Tech & Backups",blurb:"Uninterruptible Power Supplies (UPS), voltage regulators, smart IoT accessories, and custom gadgets.",tag:"Power & IoT",icon:"⚡",hue:"linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(22, 33, 62, 0.7))"}];function K(){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("animate-in")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".shop-page .fade-in-up").forEach(t=>e.observe(t))}function V(){const e=document.querySelector("#shop"),t=G.map(r=>`
    <article class="shop-category-card fade-in-up">
      <div class="shop-card-visual" style="background: ${r.hue};">
        <div class="shop-card-icon" aria-hidden="true">${r.icon}</div>
        <div class="shop-card-placeholder" aria-hidden="true"></div>
      </div>
      <h3>${r.title}</h3>
      <p>${r.blurb}</p>
      <div class="shop-card-meta">
        <span class="shop-tag">${r.tag}</span>
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
            <a href="#order-form-section" class="btn btn-primary">Place Urgent Order</a>
            <a href="/contact" class="btn btn-outline nav-link">Contact Sourcing Team</a>
          </div>
        </div>
      </section>

      <section class="shop-construction section" aria-labelledby="shop-construction-heading">
        <div class="container">
          <div class="shop-construction-inner fade-in-up">
            <div class="shop-construction-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
            </div>
            <h2 id="shop-construction-heading">Catalog Sourcing In Progress 📦</h2>
            <p>Our online storefront and interactive product catalog are updating shortly. In the meantime, we are fully active in sourcing and supply operations. You can place urgent hardware, laptop, copier, or digital gadget requests directly below using our urgent order request form.</p>
          </div>
        </div>
      </section>

      <section class="shop-workspace section" id="order-form-section" aria-labelledby="shop-workspace-heading">
        <div class="container">
          <div class="shop-grid-layout">
            <div class="shop-catalog-info">
              <div class="shop-section-head fade-in-up" style="text-align: left; margin-bottom: 2rem;">
                <h2 id="shop-workspace-heading">Sourcing Capabilities</h2>
                <p>Browse our core categories. We handle everything from bulk business setups to custom individual accessories.</p>
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
  `,K();const o=document.querySelector("#urgentOrderForm"),n=document.querySelector("#orderStatus"),s="https://formspree.io/f/xvgvayno";let i=null;function a(r,d="success",c=5e3){if(!n)return;i&&(clearTimeout(i),i=null),n.innerHTML=`
      <div class="notification notification--${d}" role="status">
        <div class="notification__content">${r}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `,n.querySelector(".notification");const l=n.querySelector(".notification__close");function p(){n&&(n.innerHTML="",i&&(clearTimeout(i),i=null))}l&&l.addEventListener("click",p),c>0&&(i=setTimeout(p,c))}o.addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector('button[type="submit"]'),c=d.textContent;d.textContent="Sending Request...",d.disabled=!0;const l=new FormData(o),p=l.get("phone"),u=l.get("company")||"N/A",h=l.get("urgency"),y=l.get("quantity"),f=l.get("location"),x=l.get("message"),k={name:l.get("name"),email:l.get("email"),subject:`Urgent Hardware Sourcing Request: ${h}`,company:u,phone:p,urgency:h,quantity:y,location:f,message:`
[URGENT SHOP ORDER REQUEST]
----------------------------------
Company: ${u}
Phone/WhatsApp: ${p}
Urgency Level: ${h}
Quantity Needed: ${y}
Delivery Location: ${f}

Requested Items & Specs:
${x}
      `.trim()};try{const m=await fetch(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(k)});if(m.ok)a("Thank you — your sourcing request has been submitted. Our team will contact you shortly!","success",7e3),o.reset();else{const S=await m.json().catch(()=>null);console.error("Formspree order error",m.status,S),a("There was a problem submitting your request. Please try again or contact us directly.","error",8e3)}}catch(m){console.error("Network error while submitting order",m),a("Network error. Please check your internet connection and try again.","error",8e3)}finally{d.textContent=c,d.disabled=!1}})}function Q(){document.querySelectorAll("main > section").forEach(t=>{t.style.display="none"});const e=document.querySelector("#shop");e.style.display="block",V()}function X(){const e=document.querySelector("#development");e.innerHTML=`
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
  `}function Y(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#development").style.display="block",X()}function J(){const e=document.querySelector("#navigation");e.innerHTML=`
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
                <li role="none"><a href="/development" class="nav-link nav-dropdown-link" role="menuitem">Development</a></li>
                <li role="none"><a href="/shop" class="nav-link nav-dropdown-link" role="menuitem">Shop</a></li>
              </ul>
            </li>
            <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
            <li><a href="/about" class="nav-link">About</a></li>
            <li><a href="/team" class="nav-link">Team</a></li>
            <li><a href="/pricing" class="nav-link">Pricing</a></li>
            <li><a href="/contact" class="nav-link">Contact</a></li>
          </ul>
          <button type="button" class="mobile-menu-btn" aria-label="Open menu">☰</button>
          <div class="mobile-menu">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Services</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/services" class="nav-link">All services</a>
                    <a href="/development" class="nav-link">Development</a>
                    <a href="/shop" class="nav-link">Shop</a>
                  </div>
                </details>
              </li>
              <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
              <li><a href="/about" class="nav-link">About</a></li>
              <li><a href="/team" class="nav-link">Team</a></li>
              <li><a href="/pricing" class="nav-link">Pricing</a></li>
              <li><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `}function Z(){const e=document.querySelector("#footer");e.innerHTML=`
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
  `}const v={"/":D,"/about":P,"/services":B,"/pricing":L,"/portfolio":j,"/team":z,"/contact":R,"/privacy":U,"/terms":_,"/shop":Q,"/development":Y},w=new Set(Object.keys(v));function ee(){const e=window.location.hash.replace(/^#/,"");if(e&&e!=="/")return;let t=window.location.pathname||"/";t=t.replace(/\/index\.html$/i,"")||"/",t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1));const o="/".replace(/\/$/,"");if(o&&t.startsWith(o)&&(t=t.slice(o.length)||"/"),t.startsWith("/")||(t=`/${t}`),t==="/"||!w.has(t))return;const n="/".replace(/\/$/,""),s=n===""?"/":`${n}/`;window.history.replaceState(null,"",`${window.location.origin}${s}#${t}`)}function g(){ee();const e=window.location.hash.slice(1)||"/",t=e.startsWith("/")?e:"/"+e,o=v[t]||W,n=document.querySelector("#app");!v[t]?n.innerHTML=`
      <div class="app">
        <nav id="navigation"></nav>
        <main>
          <section id="notFound"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `:n.innerHTML=`
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
    `,J(),Z(),o(),window.scrollTo(0,0),te(t),ie(t)}function te(e){var n,s;document.querySelectorAll(".nav-link").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".nav-dropdown").forEach(i=>i.classList.remove("is-active-route")),new Set(["/services","/shop","/development"]).has(e)&&((n=document.querySelector(".nav-dropdown"))==null||n.classList.add("is-active-route"),(s=document.querySelector(".nav-dropdown-toggle"))==null||s.classList.add("active"));const o=document.querySelector(`.nav-link[href="${e}"]`);o&&o.classList.add("active")}const b={"/":"Rodstar Tech Devs - Professional Software Development","/about":"About Us | Rodstar Tech Devs","/services":"Services | Rodstar Tech Devs","/development":"Software Development | Rodstar Tech Devs","/pricing":"Pricing | Rodstar Tech Devs","/portfolio":"Portfolio | Rodstar Tech Devs","/team":"Team | Rodstar Tech Devs","/contact":"Contact | Rodstar Tech Devs","/privacy":"Privacy Policy | Rodstar Tech Devs","/terms":"Terms of Service | Rodstar Tech Devs","/shop":"Shop | Rodstar Tech Devs"};function ie(e){if(!w.has(e)){document.title="Page Not Found | Rodstar Tech Devs";return}document.title=b[e]||b["/"]}window.addEventListener("popstate",()=>{g()});window.addEventListener("hashchange",()=>{g()});document.addEventListener("click",e=>{if(e.target.matches(".nav-link")||e.target.closest(".nav-link")){e.preventDefault();const o=(e.target.matches(".nav-link")?e.target:e.target.closest(".nav-link")).getAttribute("href");o.startsWith("/")&&(window.location.hash=o)}});document.addEventListener("DOMContentLoaded",()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{g()},{timeout:1e3}):setTimeout(()=>{g()},100)});document.addEventListener("click",e=>{e.target.closest(".mobile-menu-btn")&&(e.stopPropagation(),document.querySelector(".mobile-menu").classList.toggle("active")),e.target.closest(".mobile-menu .nav-link")&&document.querySelector(".mobile-menu").classList.remove("active")});
