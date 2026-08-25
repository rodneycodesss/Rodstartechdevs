(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();function j(){const e=document.querySelector("#hero");e.style.position="relative",e.style.width="100%",e.style.overflow="hidden",e.innerHTML=`
    <!-- Dynamic Cyber Canvas (All-Round Cyber Particle Overlay) -->
    <canvas id="hero-cyber-canvas" class="hero-cyber-canvas"></canvas>
    
    <div class="hero-overlay"></div>
    <div class="glow-orb-1"></div>
    <div class="glow-orb-2"></div>

    <!-- 1. Main Hero Split Section -->
    <section class="hero-main-block">
      <div class="container">
        <div class="hero-layout">
          
          <div class="hero-content">
            <div class="ai-badge-pill fade-in-up">
              <span class="pulse-dot"></span>
              RODSTAR AI ENGINE v3.5 • ONLINE
            </div>

            <h1 id="typewriter-motto" class="hero-title">
              <span class="gradient-text">Engineering Growth</span>
              <span class="cursor">|</span>
            </h1>
            
            <p class="hero-subtext fade-in-up">
              Enterprise-grade AI software development, high-availability web hosting, custom domains, and scalable cloud architecture tailored for ambitious digital platforms.
            </p>

            <div class="cta-buttons fade-in-up">
              <a href="/contact" class="btn btn-primary nav-link">
                Start Building
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="/services" class="btn btn-outline nav-link">
                Explore Services
              </a>
              <button type="button" class="btn btn-tour" data-action="start-tour">
                <span class="pulse-dot" style="width:6px;height:6px;"></span> Take AI Tour
              </button>
            </div>
            
            <div class="hero-stats fade-in-up">
              <div class="stat-item glass-panel">
                <div class="stat-number" data-target="99.9">0</div>
                <div class="stat-label">Uptime SLA Guarantee</div>
              </div>
              <div class="stat-item glass-panel">
                <div class="stat-number" data-target="24">0</div>
                <div class="stat-label">Hour Support Lifecycle</div>
              </div>
              <div class="stat-item glass-panel">
                <div class="stat-number" data-target="100">0</div>
                <div class="stat-label">Cloud Deployment Rate</div>
              </div>
            </div>
          </div>
          
          <!-- Interactive AI Architecture Terminal Widget (Positioned ~2/3 cm below fixed header) -->
          <div class="hero-terminal-container fade-in-up" id="hero-ai-console">
            <div class="terminal-glass-card glass-panel">
              <div class="terminal-header">
                <div class="terminal-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="terminal-title">rodstar-ai-terminal v3.5</div>
                <div class="terminal-badge">LIVE 14ms</div>
              </div>

              <div class="terminal-body">
                <div class="terminal-prompt-selector">
                  <button class="prompt-chip active" data-prompt="ai-arch">⚡ AI Web Architecture</button>
                  <button class="prompt-chip" data-prompt="cloud-host">☁️ Enterprise Cloud</button>
                  <button class="prompt-chip" data-prompt="api-dev">🔧 Custom API Engine</button>
                </div>

                <div class="terminal-screen" id="terminal-screen-output">
                  <div class="line comment">// Selecting AI Architectural Blueprint...</div>
                  <div class="line output"><span class="keyword">const</span> system = <span class="string">"RODSTAR AI ENGINE"</span>;</div>
                  <div class="line output"><span class="keyword">await</span> system.deploy({ target: <span class="string">"Global Edge Network"</span> });</div>
                  <div class="line success">✔ Status: High-Availability Cloud Mesh Ready [99.99%]</div>
                </div>

                <div class="terminal-footer">
                  <span class="prompt-symbol">&gt;</span>
                  <input type="text" id="terminal-user-input" placeholder="Type prompt..." readonly value="Run System Health & AI Blueprint Check">
                  <button type="button" id="btn-run-terminal" class="terminal-run-btn">Run Prompt</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Companies & Enterprise Partners Worked With -->
    <section class="companies-section section">
      <div class="container">
        <p class="companies-title fade-in-up">TRUSTED BY INDUSTRY LEADERS, SCHOOLS & INNOVATIVE ENTERPRISES</p>
        <div class="companies-grid fade-in-up">
          <div class="company-badge glass-panel">
            <span class="company-icon">🏫</span> Applegate Christian School - Kakamega
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🏨</span> Alma Guest House - Mbita
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🏝️</span> The Isle Cottages - Mbita
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🏢</span> Moussad Realty
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">💎</span> NusuFi
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🎓</span> ElimuNexus
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">⚖️</span> HakiAfya AI
          </div>
        </div>
      </div>
    </section>

    <!-- 3. CEO's Perspective / Statement Section ("CEO's Say") -->
    <section class="ceo-say-section section">
      <div class="container">
        <div class="ceo-glass-card glass-panel fade-in-up">
          <div class="ceo-card-grid">
            <div class="ceo-avatar-col">
              <div class="ceo-avatar-wrapper">
                <div class="avatar-holo-ring"></div>
                <img src="/RODNEY20261.JPG" alt="Rodney Gilbert - CEO" class="ceo-avatar-img">
              </div>
              <div class="ceo-status-pill">● FOUNDER & LEAD ARCHITECT</div>
            </div>
            
            <div class="ceo-content-col">
              <div class="ai-badge-pill" style="margin-bottom: 1rem;">EXECUTIVE PERSPECTIVE</div>
              <h2 class="ceo-quote-title gradient-text">"Technology Should Eliminate Friction & Amplify Growth"</h2>
              <blockquote class="ceo-quote-text">
                "At Rodstar Tech Devs, our core engineering philosophy is simple: we build software systems that operate with absolute reliability, transparent performance, and minimalist speed. We don't just write code; we architect resilient digital foundations that empower businesses and institutions to thrive in an AI-driven era."
              </blockquote>
              <div class="ceo-meta">
                <h4 class="ceo-name">Rodney Gilbert</h4>
                <p class="ceo-title">CEO & Lead Developer, Rodstar Tech Devs</p>
              </div>
              <div style="margin-top: 1.5rem;">
                <a href="/contact" class="btn btn-outline nav-link" style="padding: 0.6rem 1.4rem; font-size: 0.88rem;">
                  Consult With Our Engineering Team →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Glimpse of Services Showcase -->
    <section class="services-glimpse-section section" id="infrastructure">
      <div class="container">
        <div class="section-header">
          <div class="ai-badge-pill" style="margin: 0 auto 1rem;">OUR CAPABILITIES</div>
          <h2 class="section-title fade-in-up">Services At A Glance</h2>
          <p class="section-subtitle fade-in-up">Architected for high availability, security, and digital conversion.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6" y2="6.01"></line><line x1="6" y1="18" x2="6" y2="18.01"></line></svg>
            </div>
            <h3>Enterprise Hosting & Domains</h3>
            <p>Managed hosting for websites, enterprise emails, and domain registrations backed by 99.9% uptime SLA guarantees.</p>
            <a href="/services" class="glimpse-link nav-link">Learn More →</a>
          </div>

          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12M6 12h12"></path></svg>
            </div>
            <h3>Cloud & Microservices</h3>
            <p>Resilient microservice architectures with automated load balancing, fault tolerance, and high-speed data routing.</p>
            <a href="/development" class="glimpse-link nav-link">Learn More →</a>
          </div>

          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Bespoke AI Engineering</h3>
            <p>Custom software applications, neural API integrations, and modern glassmorphic interfaces built with precision.</p>
            <a href="/development" class="glimpse-link nav-link">Learn More →</a>
          </div>

          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="12" r="2"></circle></svg>
            </div>
            <h3>Hardware & Tech Sourcing</h3>
            <p>Supply of commercial gadgets, networking routers, enterprise servers, and computer accessories across Kenya.</p>
            <a href="/shop" class="glimpse-link nav-link">Learn More →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Verified Client & Partner Testimonials Section (Featuring Applegate School) -->
    <section class="testimonials-section section">
      <div class="container">
        <div class="section-header">
          <div class="ai-badge-pill" style="margin: 0 auto 1rem;">CLIENT SATISFACTION</div>
          <h2 class="section-title fade-in-up">What Our Clients Say</h2>
          <p class="section-subtitle fade-in-up">Verified testimonials from academic leaders, tech executives, and enterprise partners.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "Rodstar Tech Devs engineered our digital school management portal and enterprise cloud hosting. Their software stability and prompt technical support have been outstanding."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Applegate School Administration</h4>
                <p>Applegate School, Kenya</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "Rodstar Tech Devs delivered our real estate platform ahead of schedule. Their cloud architecture and geolocation mapping run flawlessly with zero downtime."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Eng. Michael Omondi</h4>
                <p>CTO, Moussad Realty</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "The AI integration and database scaling developed by Rodney and his team transformed our learning platform. We handle over 20,000 active students seamlessly."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Dr. Sarah Chebet</h4>
                <p>Director, ElimuNexus LMS</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "Fast, professional, and exceptionally skilled. The custom Web3 interface and high-speed API endpoints exceeded our security and speed expectations."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Kevin Vance</h4>
                <p>Product Lead, NusuFi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Animated Words Marquee Ticker -->
    <div class="marquee-container fade-in-up">
      <div class="marquee-content">
        <span class="marquee-item">🏫 Applegate School Partner</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🤖 AI Software Engineering</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🌐 Enterprise Web Hosting</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">✉️ Secure Business Emails</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🔒 Managed Custom Domains</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">⚡ High-Speed Edge Networks</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🛡️ Cloud Security & DevOps</span>
        <span class="marquee-item">•</span>
        <!-- Duplicate for seamless loop -->
        <span class="marquee-item">🏫 Applegate School Partner</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🤖 AI Software Engineering</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🌐 Enterprise Web Hosting</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">✉️ Secure Business Emails</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🔒 Managed Custom Domains</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">⚡ High-Speed Edge Networks</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🛡️ Cloud Security & DevOps</span>
      </div>
    </div>

    <!-- 7. Final High-Conversion CTA Section -->
    <section class="cta-section" style="padding: 5rem 0;">
      <div class="container">
        <div class="cta-content glass-panel" style="padding: 3.5rem 2rem; text-align: center;">
          <div class="ai-badge-pill" style="margin: 0 auto 1.5rem;">READY TO ELEVATE YOUR TECH?</div>
          <h2 class="fade-in-up gradient-text" style="font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; margin-bottom: 1rem;">Architect Your Digital Future with Rodstar Tech Devs</h2>
          <p class="fade-in-up" style="max-width: 650px; margin: 0 auto 2.5rem; color: var(--text-light);">Empower your business or institution with enterprise web hosting, dedicated engineering, and modern AI platforms.</p>
          
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary nav-link">
              Contact Engineering
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="/pricing" class="btn btn-outline nav-link">
              View Solutions & Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  `,G(),U(),W(),$()}function G(){const e=document.querySelector("#hero-cyber-canvas");if(!e)return;const t=e.getContext("2d");let a=e.width=window.innerWidth,r=e.height=window.innerHeight;window.addEventListener("resize",()=>{a=e.width=window.innerWidth,r=e.height=window.innerHeight});const i=Array.from({length:45},()=>({x:Math.random()*a,y:Math.random()*r,radius:Math.random()*2+1,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,alpha:Math.random()*.5+.2}));function s(){if(document.body.contains(e)){t.clearRect(0,0,a,r);for(let n=0;n<i.length;n++){const o=i[n];o.x+=o.vx,o.y+=o.vy,(o.x<0||o.x>a)&&(o.vx*=-1),(o.y<0||o.y>r)&&(o.vy*=-1),t.beginPath(),t.arc(o.x,o.y,o.radius,0,Math.PI*2),t.fillStyle=`rgba(0, 212, 255, ${o.alpha})`,t.fill();for(let l=n+1;l<i.length;l++){const c=i[l],v=o.x-c.x,y=o.y-c.y,u=Math.sqrt(v*v+y*y);u<120&&(t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(c.x,c.y),t.strokeStyle=`rgba(0, 119, 255, ${.15*(1-u/120)})`,t.lineWidth=.8,t.stroke())}}requestAnimationFrame(s)}}s()}function W(){const e=document.querySelectorAll(".prompt-chip"),t=document.querySelector("#terminal-screen-output"),a=document.querySelector("#terminal-user-input"),r=document.querySelector("#btn-run-terminal"),i={"ai-arch":{input:"Execute AI Architecture Synthesis",lines:[{type:"comment",text:"// Synthesizing High-Availability Architecture..."},{type:"output",text:"const app = new RodstarAIStack({ edge: true, ssl: 'ECC-384' });"},{type:"output",text:"await app.optimizePerformance({ targetUptime: '99.99%' });"},{type:"success",text:"✔ Architecture Compiled: Scalable Edge Ready [Latency: 12ms]"}]},"cloud-host":{input:"Check Enterprise Cloud & Domains Health",lines:[{type:"comment",text:"// Verifying Cloud Server Cluster Status..."},{type:"output",text:"Cluster Health: ONLINE | Domains DNSSEC: ENABLED"},{type:"output",text:"Enterprise Email Relay: 100% Delivery Verified"},{type:"success",text:"✔ All Systems Operational Across Global Edge Regions"}]},"api-dev":{input:"Build Custom API & Automation Route",lines:[{type:"comment",text:"// Generating Microservice API Endpoints..."},{type:"output",text:"POST /v1/ai/automate -> 200 OK [Response: 9ms]"},{type:"output",text:"Connected Webhook -> Realtime Payment & Order Sync"},{type:"success",text:"✔ Secure API Endpoint Deployed Successfully"}]}};e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(l=>l.classList.remove("active")),s.classList.add("active");const n=s.getAttribute("data-prompt"),o=i[n];o&&(a&&(a.value=o.input),t&&(t.innerHTML=`<div class="line comment">// Running ${o.input}...</div>`,setTimeout(()=>{t.innerHTML=o.lines.map(l=>`<div class="line ${l.type}">${l.text}</div>`).join("")},300)))})}),r&&r.addEventListener("click",()=>{t&&(t.innerHTML+='<div class="line comment">// Processing custom terminal command...</div><div class="line success">✔ Command Verified & Logged</div>',t.scrollTop=t.scrollHeight)})}function U(){const e=document.querySelectorAll(".stat-number"),t=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){const n=parseFloat(s.target.getAttribute("data-target")),l=n/(2e3/16);let c=0;const v=setInterval(()=>{c+=l,c>=n&&(c=n,clearInterval(v)),s.target.getAttribute("data-target")==="99.9"?s.target.textContent=c.toFixed(1)+"%":s.target.getAttribute("data-target")==="100"?s.target.textContent=Math.floor(c)+"%":s.target.getAttribute("data-target")==="24"?s.target.textContent=Math.floor(c)+"/7":s.target.textContent=Math.floor(c)},16);t.unobserve(s.target)}})});e.forEach(i=>t.observe(i));const a=document.querySelector("#typewriter-motto");if(a){let o=function(){if(!document.body.contains(a))return;n===0&&(a.innerHTML='<span class="gradient-text"></span><span class="cursor">|</span>');const l=a.querySelector(".gradient-text"),c=a.querySelector(".cursor");if(n<i.length)l&&(l.innerHTML+=i.charAt(n)),n++,setTimeout(o,50);else if(n<i.length+s.length)c&&c.remove(),a.innerHTML+=s.charAt(n-i.length)+'<span class="cursor">|</span>',n++,setTimeout(o,50);else{const v=a.querySelector(".cursor");v&&v.classList.add("blink")}};var r=o;const i="Engineering Growth",s=" Through AI & Technology.";let n=0;setTimeout(o,300)}}function $(){const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&a.target.classList.add("animate-in")})},{threshold:.1});document.querySelectorAll(".fade-in-up").forEach(t=>{e.observe(t)})}function V(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#hero").style.display="block",j()}function _(){const e=document.querySelector("#about");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> ABOUT RODSTAR TECH DEVS
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Rodstar Tech Devs — Engineering Next-Gen Digital Solutions</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Passionate software engineers, cloud architects, and digital strategists committed to delivering high-performance platforms.
        </p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about section" style="padding-top: 3rem;">
      <div class="container">
        <div class="about-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: center;">
          
          <div class="about-text glass-panel" style="padding: 2.5rem;">
            <h3 style="color: #ffffff; font-size: 1.6rem; font-weight: 700; margin-bottom: 1.2rem;">Our Engineering Mission</h3>
            <p style="color: var(--text-light); line-height: 1.65; margin-bottom: 1.2rem;">
              At Rodstar Tech Devs, we harness the power of artificial intelligence, cloud microservices, and minimalist web architecture to transform businesses. Our mission is to engineer robust, high-availability software platforms that empower startups and enterprises to scale without limits.
            </p>

            <p style="color: var(--text-light); line-height: 1.65; margin-bottom: 2rem;">
              Backed by continuous innovation, modern security standards, and 99.9% uptime SLA commitments, our specialized team delivers end-to-end web hosting, enterprise email systems, bespoke API pipelines, and custom software.
            </p>
            
            <div class="stats" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">50+</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Projects Delivered</span>
              </div>
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">100%</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Client Satisfaction</span>
              </div>
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">99.9%</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Uptime SLA</span>
              </div>
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">24/7</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Ops Support</span>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="glass-panel" style="padding: 0.8rem; border-color: rgba(0,212,255,0.3) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 25px rgba(0,82,255,0.25);">
              <img src="/boardroom.png" alt="Engineering Boardroom" width="800" height="600" style="border-radius: 12px; width: 100%; height: auto; object-fit: cover; aspect-ratio: 4/3; display: block;" loading="lazy" decoding="async"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function Y(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#about").style.display="block",_()}function K(){const e=document.querySelector("#pricing");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> TRANSPARENT SCALABLE TIERS
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Solutions & Engineering Pricing</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Transparent pricing tiers designed for startups, growing enterprises, and custom software deployments.
        </p>
      </div>
    </section>
    <section class="pricing-section section" style="padding-top: 3rem;">
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
  `}function X(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#pricing").style.display="block",K()}function Q(){const e=document.querySelector("#portfolio");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> PROVEN PRODUCTION PLATFORMS
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Engineered for Scalability</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Deploying mission-critical applications, web3 platforms, real estate software, and AI LMS platforms natively on the cloud.
        </p>
      </div>
    </section>

    <section class="portfolio section" style="padding-top: 3rem;">
      <div class="container">
        
        <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          
          <div class="portfolio-item glass-panel fade-in-up">
            <div class="portfolio-content">
              <div class="ai-badge-pill" style="margin-bottom: 0.8rem; font-size: 0.72rem; padding: 0.25rem 0.75rem;">FINTECH & DEFI</div>
              <h3 style="color: #ffffff; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem;">NusuFi Platform</h3>
              <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">A full-featured web3 platform for managing and investing in digital assets with high-frequency security protocols and low-cost transaction ledgers.</p>
              <div class="portfolio-tags" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <span class="tag skill-tag">React</span>
                <span class="tag skill-tag">TypeScript</span>
                <span class="tag skill-tag">Web3</span>
                <span class="tag skill-tag">Blockchain</span>
                <span class="tag skill-tag">DeFi</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item glass-panel fade-in-up">
            <div class="portfolio-content">
              <div class="ai-badge-pill" style="margin-bottom: 0.8rem; font-size: 0.72rem; padding: 0.25rem 0.75rem;">EDTECH & AI</div>
              <h3 style="color: #ffffff; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem;">ElimuNexus LMS</h3>
              <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">A comprehensive AI-driven learning management system for schools, automating student record processing and interactive curriculum insights.</p>
              <div class="portfolio-tags" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <span class="tag skill-tag">Next.js</span>
                <span class="tag skill-tag">TypeScript</span>
                <span class="tag skill-tag">Supabase</span>
                <span class="tag skill-tag">AI Integration</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item glass-panel fade-in-up">
            <div class="portfolio-content">
              <div class="ai-badge-pill" style="margin-bottom: 0.8rem; font-size: 0.72rem; padding: 0.25rem 0.75rem;">PROPTECH & GEOLOCATION</div>
              <h3 style="color: #ffffff; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem;">Moussad Realty</h3>
              <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">A premium real estate portal for verified listings, property investments, and long-term stays featuring secure booking integration and live spatial mapping.</p>
              <div class="portfolio-tags" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <span class="tag skill-tag">React</span>
                <span class="tag skill-tag">TypeScript</span>
                <span class="tag skill-tag">Real Estate</span>
                <span class="tag skill-tag">Geolocation API</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function J(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#portfolio").style.display="block",Q()}function Z(){const e=document.querySelector("#team");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="hero-overlay" style="background: rgba(3,7,18,0.75);"></div>
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> RODSTAR TALENT MATRIX • V3.5
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Meet Our Engineering & Leadership Team</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Architects, strategists, and developers engineering next-generation software, cloud infrastructure, and AI solutions.
        </p>
      </div>
    </section>

    <!-- Interactive 3D Team Command Center -->
    <section class="team section" style="padding-top: 4rem;">
      <div class="container">
        
        <!-- Department Filter Pills -->
        <div class="team-filter-bar fade-in-up">
          <button class="team-filter-btn active" data-dept="all">All Members</button>
          <button class="team-filter-btn" data-dept="leadership">Leadership & Strategy</button>
          <button class="team-filter-btn" data-dept="engineering">Engineering & AI</button>
          <button class="team-filter-btn" data-dept="growth">Operations & Growth</button>
        </div>

        <!-- 3D Holographic Team Grid -->
        <div class="team-holo-grid" id="team-holo-grid">
          
          <!-- Rodney Gilbert -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="leadership engineering">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/RODNEY20261.JPG" alt="Rodney Gilbert" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • LEAD ARCHITECT
              </div>
              <h3 class="team-name">Rodney Gilbert</h3>
              <p class="team-role">CEO & Lead Developer</p>
              <p class="team-bio">
                Full-stack developer with expertise in modern web technologies, cloud deployments, and team leadership. Passionate about creating innovative AI solutions.
              </p>
              
              <div class="team-skills">
                <span class="skill-tag">Full-Stack AI</span>
                <span class="skill-tag">Cloud Architecture</span>
                <span class="skill-tag">Team Lead</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="rodney">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Desmond Migai -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="leadership growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/desmond.jpeg" alt="Desmond Migai" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • OPS DIRECTORY
              </div>
              <h3 class="team-name">Desmond Migai</h3>
              <p class="team-role">General Operations Manager</p>
              <p class="team-bio">
                Experienced manager directing operations, organizing project lifecycles, and ensuring high-quality client deliverables. Focused on team cohesion and efficiency.
              </p>

              <div class="team-skills">
                <span class="skill-tag">Sprint Operations</span>
                <span class="skill-tag">Quality Assurance</span>
                <span class="skill-tag">Client Delivery</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="desmond">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Brian Gacao -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="leadership growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/BRAYO.jpg" alt="Brian Gacao" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • BIZ STRATEGY
              </div>
              <h3 class="team-name">Brian Gacao</h3>
              <p class="team-role">Business Developer</p>
              <p class="team-bio">
                Identifying strategic business opportunities, cultivating key partnerships, and driving growth. Focused on building long-term client relations and expanding market reach.
              </p>

              <div class="team-skills">
                <span class="skill-tag">Strategic Growth</span>
                <span class="skill-tag">Partnerships</span>
                <span class="skill-tag">Client Relations</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="brian">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Sweeney Greg -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="engineering">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/SWEENEY.jpg" alt="Sweeney Greg" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • BACKEND OPS
              </div>
              <h3 class="team-name">Sweeney Greg</h3>
              <p class="team-role">Backend Developer</p>
              <p class="team-bio">
                Specializing in secure databases, server-side algorithms, and third-party API integrations. Passionate about building robust backend infrastructure that scales.
              </p>

              <div class="team-skills">
                <span class="skill-tag">PostgreSQL & DBs</span>
                <span class="skill-tag">Node / APIs</span>
                <span class="skill-tag">Backend Scaling</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="sweeney">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Daphny Kemi -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/DAPHNY.jpg" alt="Daphny Kemi" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • DIGITAL MEDIA
              </div>
              <h3 class="team-name">Daphny Kemi</h3>
              <p class="team-role">Digital Marketing Intern</p>
              <p class="team-bio">
                Assisting in marketing outreach, content strategies, and social media enhancement. Eager to drive brand awareness and digital growth across multi-channel platforms.
              </p>

              <div class="team-skills">
                <span class="skill-tag">Digital Growth</span>
                <span class="skill-tag">Content Strategy</span>
                <span class="skill-tag">Social Media</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="daphny">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Astralia -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="engineering growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/ASTRALIA.jpg" alt="Astralia" loading="lazy" class="team-avatar-img" onerror="this.onerror=null; this.src='ASTRALIA.jpg';">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • SOFTWARE ARCHITECT
              </div>
              <h3 class="team-name">Astralia</h3>
              <p class="team-role">Systems & Web Engineer</p>
              <p class="team-bio">
                Designing sleek user interfaces, custom web applications, and responsive cloud services. Passionate about modern UI aesthetics and high-performance frontend architecture.
              </p>

              <div class="team-skills">
                <span class="skill-tag">UI/UX Systems</span>
                <span class="skill-tag">Web Engineering</span>
                <span class="skill-tag">Cloud Services</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="astralia">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Modal Drawer for Member Profile Inspection -->
    <div class="member-modal-overlay" id="member-modal">
      <div class="member-modal-card glass-panel">
        <button class="member-modal-close" id="modal-close-btn">&times;</button>
        <div id="member-modal-content"></div>
      </div>
    </div>
  `,ee(),te(),ie()}function ee(){document.querySelectorAll(".team-holo-card").forEach(t=>{t.addEventListener("mousemove",a=>{const r=t.getBoundingClientRect(),i=a.clientX-r.left,s=a.clientY-r.top,n=r.width/2,o=r.height/2,l=(s-o)/o*-10,c=(i-n)/n*10;t.style.transform=`perspective(1000px) rotateX(${l}deg) rotateY(${c}deg) translateY(-8px)`}),t.addEventListener("mouseleave",()=>{t.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"})})}function te(){const e=document.querySelectorAll(".team-filter-btn"),t=document.querySelectorAll(".team-holo-card");e.forEach(a=>{a.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),a.classList.add("active");const r=a.getAttribute("data-dept");t.forEach(i=>{const s=i.getAttribute("data-dept")||"";r==="all"||s.includes(r)?(i.style.display="block",i.style.animation="fadeIn 0.4s ease"):i.style.display="none"})})})}function ie(){const e=document.querySelector("#member-modal"),t=document.querySelector("#member-modal-content"),a=document.querySelector("#modal-close-btn"),r={rodney:{name:"Rodney Gilbert",role:"CEO & Lead Developer",avatar:"/RODNEY20261.JPG",status:"● ACTIVE - SYSTEM ARCHITECTURE",bio:"Rodney leads software engineering, system architecture, and client solution design at Rodstar Tech Devs. Specialist in full-stack JavaScript, cloud edge networks, and AI platform integration.",metrics:[{label:"Experience",val:"7+ Years"},{label:"Projects Delivered",val:"50+"},{label:"Core Focus",val:"AI & Web Scaling"}]},desmond:{name:"Desmond Migai",role:"General Operations Manager",avatar:"/desmond.jpeg",status:"● ACTIVE - SPRINT MANAGEMENT",bio:"Desmond directs company operations, project delivery timelines, and client satisfaction metrics. Ensures engineering sprints meet high quality standards and seamless deployment schedules.",metrics:[{label:"Operations Managed",val:"100%"},{label:"On-Time Rate",val:"99.8%"},{label:"Core Focus",val:"Agile Leadership"}]},brian:{name:"Brian Gacao",role:"Business Developer",avatar:"/BRAYO.jpg",status:"● ACTIVE - STRATEGIC PARTNERSHIPS",bio:"Brian oversees business growth, client relations, and market expansion strategies for Rodstar Tech Devs, connecting regional enterprises with cutting-edge tech hosting solutions.",metrics:[{label:"Partnerships",val:"25+"},{label:"Client Retention",val:"98%"},{label:"Core Focus",val:"Enterprise Growth"}]},sweeney:{name:"Sweeney Greg",role:"Backend Developer",avatar:"/SWEENEY.jpg",status:"● ACTIVE - CLOUD INFRASTRUCTURE",bio:"Sweeney architects secure backend APIs, database clusters, and server-side automation logic, establishing high-availability microservices for complex web apps.",metrics:[{label:"Uptime Managed",val:"99.9%"},{label:"DB Latency",val:"<15ms"},{label:"Core Focus",val:"Microservices & APIs"}]},daphny:{name:"Daphny Kemi",role:"Digital Marketing Intern",avatar:"/DAPHNY.jpg",status:"● ACTIVE - DIGITAL ENGAGEMENT",bio:"Daphny drives digital outreach, brand positioning, and content strategies across web and social channels, elevating brand awareness for Rodstar's technology ecosystem.",metrics:[{label:"Campaign Growth",val:"+140%"},{label:"Reach",val:"Multi-Channel"},{label:"Core Focus",val:"Digital Strategy"}]},astralia:{name:"Astralia",role:"Systems & Web Engineer",avatar:"/ASTRALIA.jpg",status:"● ACTIVE - UI/UX SYSTEMS",bio:"Astralia designs sleek user interfaces, custom web applications, and responsive cloud services, crafting high-performance frontend systems for enterprise platforms.",metrics:[{label:"Design Systems",val:"100%"},{label:"UI Performance",val:"Sub-50ms"},{label:"Core Focus",val:"UI/UX & Web Apps"}]}};document.addEventListener("click",i=>{const s=i.target.closest(".btn-inspect-member");if(s){const n=s.getAttribute("data-member"),o=r[n];if(!o)return;t.innerHTML=`
        <div style="text-align: center;">
          <img src="${o.avatar}" alt="${o.name}" style="width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 2px solid #00D4FF; margin-bottom: 1rem; box-shadow: 0 0 25px rgba(0,212,255,0.4);">
          <div class="team-status-pill" style="margin: 0 auto 0.8rem; display: inline-flex;">${o.status}</div>
          <h3 style="font-size: 1.6rem; color: #fff; font-weight: 700; margin-bottom: 0.2rem;">${o.name}</h3>
          <p style="color: #00D4FF; font-weight: 600; font-size: 0.95rem; margin-bottom: 1.2rem;">${o.role}</p>
          <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.5rem;">${o.bio}</p>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-bottom: 1.5rem; background: rgba(3,7,18,0.8); padding: 1rem; border-radius: 12px; border: 1px solid rgba(0,119,255,0.2);">
            ${o.metrics.map(l=>`
              <div>
                <div style="color: #00D4FF; font-weight: 700; font-size: 1.1rem;">${l.val}</div>
                <div style="color: var(--text-light); font-size: 0.75rem;">${l.label}</div>
              </div>
            `).join("")}
          </div>

          <a href="/contact" class="btn btn-primary nav-link" style="width: 100%;">Initiate Direct Inquiry</a>
        </div>
      `,e.classList.add("active")}}),a&&a.addEventListener("click",()=>e.classList.remove("active")),e&&e.addEventListener("click",i=>{i.target===e&&e.classList.remove("active")})}function ae(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#team").style.display="block",Z()}function se(){const e=document.querySelector("#contact");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> DIRECT INQUIRY & CONSULTATION
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Let's Build Something Extraordinary</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Connect with our senior software engineers and cloud architects to discuss your custom project requirements.
        </p>
      </div>
    </section>
    <section class="contact section" style="padding-top: 3rem;">
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
  `;const t=document.querySelector("#contactForm"),a=document.querySelector("#contactStatus"),r="https://formspree.io/f/xvgvayno";let i=null;function s(n,o="success",l=5e3){if(!a)return;i&&(clearTimeout(i),i=null),a.innerHTML=`
      <div class="notification notification--${o}" role="status">
        <div class="notification__content">${n}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `,a.querySelector(".notification");const c=a.querySelector(".notification__close");function v(){a&&(a.innerHTML="",i&&(clearTimeout(i),i=null))}c&&c.addEventListener("click",v),l>0&&(i=setTimeout(v,l))}t.addEventListener("submit",async n=>{n.preventDefault();const o=t.querySelector('button[type="submit"]'),l=o.textContent;o.textContent="Sending...",o.disabled=!0;const c=new FormData(t),v=Object.fromEntries(c.entries());try{const y=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(v)});if(y.ok)s("Thank you — your message has been sent!","success",6e3),t.reset();else{const u=await y.json().catch(()=>null);console.error("Formspree error",y.status,u),s("There was a problem sending your message. Please try again later.","error",8e3)}}catch(y){console.error("Network error while sending form",y),s("Network error. Please check your connection and try again.","error",8e3)}finally{o.textContent=l,o.disabled=!1}})}function oe(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#contact").style.display="block",se()}function ne(){const e=document.querySelector("#notFound");e&&(e.innerHTML=`
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
  `)}function re(){ne()}function le(){const e=document.querySelector("#privacy");e.innerHTML=`
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
  `}function ce(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#privacy").style.display="block",window.scrollTo(0,0),le()}function de(){const e=document.querySelector("#terms");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> OPERATIONAL GOVERNANCE & AGREEMENTS
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Terms of Service</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Standard client agreements, engineering milestones, hosting policies, and intellectual property governance.
        </p>
      </div>
    </section>
    
    <section class="section" style="padding-top: 3rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <div class="legal-content glass-panel" style="padding: 3rem 2.5rem;">
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
  `}function pe(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#terms").style.display="block",window.scrollTo(0,0),de()}const me=[{title:"Laptops & Desktops",blurb:"Corporate-grade laptops, high-performance developer workstations, and ultrabooks from top-tier brands (HP, Dell, Lenovo, Apple).",tag:"Sourcing & Supply",icon:"💻",hue:"linear-gradient(135deg, rgba(0, 123, 255, 0.25), rgba(0, 0, 0, 0.6))",image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"},{title:"Networking Devices",blurb:"Enterprise switches, high-speed routers, access points, network cabinets, and structured cabling solutions.",tag:"Infrastructure",icon:"🌐",hue:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 40, 80, 0.7))",image:"https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"Computer Accessories",blurb:"Ergonomic keyboards, gaming/office mice, external SSDs, USB-C hubs, and productivity accessories.",tag:"Workspace",icon:"🔌",hue:"linear-gradient(135deg, rgba(91, 180, 255, 0.2), rgba(0, 0, 0, 0.6))",image:"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"Printers & Copiers",blurb:"Heavy-duty print stations, smart ink-tank printers, scanner-copier combos, and genuine toners/consumables.",tag:"Office Equipment",icon:"🖨️",hue:"linear-gradient(135deg, rgba(0, 86, 179, 0.3), rgba(0, 0, 0, 0.65))",image:"https://images.pexels.com/photos/1683498/pexels-photo-1683498.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"CCTV & Security",blurb:"Smart IP surveillance systems, HD cameras, biometric access control terminals, and electronic locks.",tag:"Security & Surveillance",icon:"🛡️",hue:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(26, 10, 46, 0.65))",image:"https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=400"},{title:"Other Tech & Backups",blurb:"Uninterruptible Power Supplies (UPS), voltage regulators, smart IoT accessories, and custom gadgets.",tag:"Power & IoT",icon:"⚡",hue:"linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(22, 33, 62, 0.7))",image:"https://images.pexels.com/photos/45082/pexels-photo-45082.jpeg?auto=compress&cs=tinysrgb&w=400"}],ge=[{id:"mikrotik-rb951",name:"Mikrotik RB951",price:7500,category:"Routers & GPON",desc:"High performance wireless SOHO AP with a new generation Atheros CPU and robust processing power.",image:"/mikrotik_router.jpg"},{id:"f3-tenda",name:"F3 Tenda",price:950,category:"Routers & GPON",desc:"300Mbps wireless router designed for smart home networking life. Easy setup and high stability.",image:"/tenda_router.jpg"},{id:"cat6-indoor",name:"Cat 6 Indoor Cable",price:4e3,category:"Cables",desc:"High-speed, high-quality copper indoor network cable (305m roll) for local networking.",image:"/cat6_cable.png"},{id:"cat6-outdoor",name:"Cat 6 Outdoor Cable",price:6e3,category:"Cables",desc:"Weatherproof, double-shielded outdoor network cable (305m roll) for heavy-duty networking.",image:"/cat6_cable.png"},{id:"tape-small",name:"Insulating Tape (Small)",price:70,category:"Accessories & Management",desc:"Durable electrical insulating tape for wire wrapping and safe splicing.",image:"/electrical_tape.png"},{id:"tape-big",name:"Insulating Tape (Large)",price:130,category:"Accessories & Management",desc:"High-grade professional electrical insulating tape for heavy-duty wire protection.",image:"/electrical_tape.png"},{id:"adapter-small",name:"Adapter Box (Small)",price:300,category:"Accessories & Management",desc:"Small protective adapter casing/junction box for clean node connections.",image:"/adapter_box.png"},{id:"adapter-big",name:"Adapter Box (Big)",price:350,category:"Accessories & Management",desc:"Large weatherproof adapter box/junction box for enclosing connectors and splitters.",image:"/adapter_box.png"},{id:"gpon",name:"GPON ONU",price:1350,category:"Routers & GPON",desc:"Gigabit Passive Optical Network terminal for high-speed fiber-to-the-home internet access.",image:"/gpon_onu.jpg"},{id:"cable-tie-small",name:"Cable Ties (Small Size)",price:180,category:"Accessories & Management",desc:"Pack of small nylon cable zip ties for neat wire and cable management.",image:"/cable_ties.jpg"},{id:"cable-tie-big",name:"Cable Ties (Big Size)",price:250,category:"Accessories & Management",desc:"Pack of large, high-tensile strength nylon cable ties for securing cables.",image:"/cable_ties.jpg"},{id:"switch-8port",name:"Switch 8 Port",price:1200,category:"Switches",desc:"Compact 8-port Ethernet switch for fast desktop wired network expansion.",image:"/network_switch.jpg"},{id:"switch-gigaport",name:"Gigaport Switch",price:2450,category:"Switches",desc:"High-speed Gigabit Ethernet switch for zero-bottleneck data transfer across nodes.",image:"/network_switch_giga.jpg"},{id:"extension-standard",name:"Power Extension",price:450,category:"Accessories & Management",desc:"Multi-socket power extension strip with surge protection for office or home setups.",image:"/power_extension.jpg"},{id:"extension-10m",name:"Power Extension (10m)",price:1300,category:"Accessories & Management",desc:"Heavy-duty 10-meter long power extension cable with multiple sockets and surge protector.",image:"/power_extension_10m.jpg"}];function ue(){const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&a.target.classList.add("animate-in")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".shop-page .fade-in-up").forEach(t=>e.observe(t))}function he(){const e=document.querySelector("#shop"),t=me.map(m=>`
    <article class="shop-category-card fade-in-up">
      <div class="shop-card-visual" style="position: relative;">
        <img src="${m.image}" alt="${m.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; pointer-events: none;" loading="lazy">
        <div style="position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.65)); pointer-events: none;"></div>
        <div class="shop-card-icon" style="position: relative; z-index: 1;" aria-hidden="true">${m.icon}</div>
      </div>
      <h3>${m.title}</h3>
      <p>${m.blurb}</p>
      <div class="shop-card-meta">
        <span class="shop-tag">${m.tag}</span>
        <span class="shop-tag" style="opacity:0.75;">Coming soon</span>
      </div>
    </article>
  `).join("");e.innerHTML=`
    <div class="shop-page">
      <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
        <div class="container" style="position: relative; z-index: 2;">
          <div class="ai-badge-pill fade-in-up" style="margin-bottom: 1rem;">
            <span class="pulse-dot"></span> HARDWARE & SOLUTIONS CATALOG
          </div>
          <h1 class="shop-hero-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Premium Tech Sourcing & Hardware</h1>
          <p class="shop-hero-lead fade-in-up" style="max-width: 720px; margin: 0 auto 2rem; color: var(--text-light);">We supply digital gadgets, laptops, computer accessories, networking equipment, printers, and other tech products for businesses and individuals across Kenya.</p>
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
  `;const a=document.querySelector("#product-grid"),r=document.querySelector("#productSearch"),i=document.querySelectorAll(".filter-btn");let s="All",n="";function o(){const m=ge.filter(d=>{const b=s==="All"||d.category===s,h=d.name.toLowerCase().includes(n)||d.desc.toLowerCase().includes(n)||d.category.toLowerCase().includes(n);return b&&h});if(m.length===0){a.innerHTML=`
        <div class="shop-no-results fade-in-up animate-in">
          <p>No products found matching your search. Please submit a custom request below.</p>
        </div>
      `;return}a.innerHTML=m.map(d=>`
      <article class="shop-product-card fade-in-up animate-in">
        <div class="product-card-image-wrapper">
          <img src="${d.image}" alt="${d.name}" loading="lazy">
          <span class="product-category-tag">${d.category}</span>
        </div>
        <div class="product-card-body">
          <h3>${d.name}</h3>
          <p class="product-desc">${d.desc}</p>
          <div class="product-card-footer">
            <span class="product-price">KES ${d.price.toLocaleString()}</span>
            <button class="btn btn-primary product-action-btn" data-name="${d.name}" data-price="${d.price}">Inquire / Order</button>
          </div>
        </div>
      </article>
    `).join(""),v()}let l=[];function c(){const m=document.querySelector("#selectedItemsContainer"),d=document.querySelector("#selectedItemsList"),b=document.querySelector("#orderItems"),h=document.querySelector("#orderQuantity");if(!m||!d||!b||!h)return;if(l.length===0){m.style.display="none",d.innerHTML="",b.value="",h.value="",document.querySelectorAll(".product-action-btn").forEach(p=>{p.textContent="Inquire / Order"});return}m.style.display="block",d.innerHTML=l.map(p=>`
      <li style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-light); background: rgba(255,255,255,0.02); padding: 0.5rem 0.75rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
        <span style="font-weight: 500;">${p.name} <span style="opacity: 0.7; font-size: 0.75rem;">(x${p.quantity})</span></span>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <button type="button" class="cart-adjust-btn" data-name="${p.name}" data-action="decrease" style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: bold; line-height: 1;">-</button>
          <button type="button" class="cart-adjust-btn" data-name="${p.name}" data-action="increase" style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: bold; line-height: 1;">+</button>
          <button type="button" class="cart-remove-btn" data-name="${p.name}" style="background: transparent; border: none; color: #ff4d4d; cursor: pointer; font-size: 1.25rem; margin-left: 0.5rem; padding: 0; line-height: 1; display: inline-flex; align-items: center; justify-content: center;">&times;</button>
        </div>
      </li>
    `).join("");const w=`[Selected Hardware Items]
=========================
${l.map((p,g)=>`${g+1}. ${p.name} - Qty: ${p.quantity} - Est. KES ${(p.price*p.quantity).toLocaleString()}`).join(`
`)}

Total Estimated: KES ${l.reduce((p,g)=>p+g.price*g.quantity,0).toLocaleString()}`;b.value=w,h.value=l.reduce((p,g)=>p+g.quantity,0),d.querySelectorAll(".cart-adjust-btn").forEach(p=>{p.addEventListener("click",g=>{const x=g.target.getAttribute("data-name"),S=g.target.getAttribute("data-action"),E=l.find(I=>I.name===x);E&&(S==="increase"?E.quantity+=1:S==="decrease"&&(E.quantity-=1,E.quantity<=0&&(l=l.filter(I=>I.name!==x))),c())})}),d.querySelectorAll(".cart-remove-btn").forEach(p=>{p.addEventListener("click",g=>{const x=g.target.getAttribute("data-name");l=l.filter(S=>S.name!==x),c()})}),document.querySelectorAll(".product-action-btn").forEach(p=>{const g=p.getAttribute("data-name"),x=l.find(S=>S.name===g);x?p.textContent=`In Cart (${x.quantity})`:p.textContent="Inquire / Order"})}document.addEventListener("click",m=>{m.target&&m.target.id==="clearCartBtn"&&(l=[],c())});function v(){document.querySelectorAll(".product-action-btn").forEach(m=>{m.addEventListener("click",d=>{const b=d.target.getAttribute("data-name"),h=d.target.getAttribute("data-price"),w=l.find(g=>g.name===b);w?w.quantity+=1:l.push({name:b,price:parseInt(h),quantity:1}),c();const p=document.querySelector("#order-form-section");if(p){p.scrollIntoView({behavior:"smooth"});const g=p.querySelector(".urgent-order-card");g&&(g.classList.add("highlight-pulse"),setTimeout(()=>{g.classList.remove("highlight-pulse")},2e3))}})})}r.addEventListener("input",m=>{n=m.target.value.toLowerCase().trim(),o()}),i.forEach(m=>{m.addEventListener("click",()=>{i.forEach(d=>d.classList.remove("active")),m.classList.add("active"),s=m.getAttribute("data-category"),o()})}),o(),ue();const y=document.querySelector("#urgentOrderForm"),u=document.querySelector("#orderStatus"),F="https://formspree.io/f/xvgvayno";let A=null;function R(m,d="success",b=5e3){if(!u)return;A&&(clearTimeout(A),A=null),u.innerHTML=`
      <div class="notification notification--${d}" role="status">
        <div class="notification__content">${m}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `,u.querySelector(".notification");const h=u.querySelector(".notification__close");function w(){u&&(u.innerHTML="",A&&(clearTimeout(A),A=null))}h&&h.addEventListener("click",w),b>0&&(A=setTimeout(w,b))}y.addEventListener("submit",async m=>{m.preventDefault();const d=y.querySelector('button[type="submit"]'),b=d.textContent;d.textContent="Sending Request...",d.disabled=!0;const h=new FormData(y),w=h.get("phone"),p=h.get("company")||"N/A",g=h.get("urgency"),x=h.get("quantity"),S=h.get("location"),E=h.get("message"),I={name:h.get("name"),email:h.get("email"),subject:`Urgent Hardware Sourcing Request: ${g}`,company:p,phone:w,urgency:g,quantity:x,location:S,message:`
[URGENT SHOP ORDER REQUEST]
----------------------------------
Company: ${p}
Phone/WhatsApp: ${w}
Urgency Level: ${g}
Quantity Needed: ${x}
Delivery Location: ${S}

Requested Items & Specs:
${E}
      `.trim()};try{const D=await fetch(F,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(I)});if(D.ok)R("Thank you — your sourcing request has been submitted. Our team will contact you shortly!","success",7e3),y.reset(),l=[],c();else{const H=await D.json().catch(()=>null);console.error("Formspree order error",D.status,H),R("There was a problem submitting your request. Please try again or contact us directly.","error",8e3)}}catch(D){console.error("Network error while submitting order",D),R("Network error. Please check your internet connection and try again.","error",8e3)}finally{d.textContent=b,d.disabled=!1}})}function ve(){document.querySelectorAll("main > section").forEach(t=>{t.style.display="none"});const e=document.querySelector("#shop");e.style.display="block",he()}function ye(){const e=document.querySelector("#development");e.innerHTML=`
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> FULL-STACK ENGINEERING PIPELINES
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Software Engineering & Cloud Delivery</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          End-to-end engineering for web, mobile, and cloud—clean architecture, secure delivery, and measurable outcomes.
        </p>
      </div>
    </section>

    <section class="services section" style="padding-top: 3rem;">
      <div class="container">
        <div class="services-intro" style="margin-bottom: 3rem;">
          <p style="text-align: center; color: var(--text-light); max-width: 720px; margin: 0 auto; font-size: 1.05rem; line-height: 1.65;" class="glass-panel" style="padding: 1.5rem 2rem;">
            Rodstar Tech Devs builds production-grade software with the same discipline we apply to hosting and infrastructure: clear scopes, documented APIs, and deployments you can operate with confidence.
          </p>
        </div>
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;">
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web applications" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Web Applications</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">SPAs, dashboards, and marketing sites with performance-first builds, accessibility, and SEO-aware structure.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Mobile Engineering</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Native and cross-platform releases with store-ready pipelines, crash reporting, and sensible offline behavior.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="APIs" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">APIs & Integrations</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">REST and event-driven services, third-party integrations, and internal tools that stay maintainable as you scale.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">DevOps & Reliability</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">CI/CD, environments, and observability so your team ships safely and rolls back quickly when needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seamless CTA Section -->
    <section class="cta-section" style="padding: 4rem 0;">
      <div class="container">
        <div class="cta-content glass-panel" style="padding: 3.5rem 2rem; text-align: center;">
          <h2 class="fade-in-up gradient-text" style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Start a Development Engagement</h2>
          <p class="fade-in-up" style="max-width: 650px; margin: 0 auto 2.5rem; color: var(--text-light);">Tell us about your product, timeline, and constraints—we will respond with a practical technical plan.</p>
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary nav-link">Contact Engineering</a>
            <a href="/services" class="btn btn-outline nav-link">View All Services</a>
          </div>
        </div>
      </div>
    </section>
  `}function fe(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#development").style.display="block",ye()}function be(){const e=document.querySelector("#services");e.innerHTML=`
    <!-- Page Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="hero-overlay" style="background: rgba(3,7,18,0.75);"></div>
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> RODSTAR CAPABILITIES • ENTERPRISE SUITE
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Full-Spectrum AI & Cloud Engineering</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          End-to-end software development, high-availability web hosting, and predictive data automation built for scalable growth.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Hosting" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Enterprise Hosting</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Premium managed hosting environments featuring custom domain registration databases, dedicated enterprise emails, and high-availability servers structured for maximal uptime SLA.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web Arch" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">AI Web Architecture</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">High-end web applications built inherently scalable with modern JavaScript, React, and Next.js environments. We create responsive, instantaneous, and cinematic digital web platforms.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile Apps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Mobile App Deployment</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Native mobile applications structurally compiled for iOS and Android. Cross-platform engineering pipelines to deploy high-velocity user experiences directly to major app stores.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="UX Design" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">UI/UX Systems</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Glassmorphism, high-contrast dark modes, and dynamic micro-animations. We engineer interface experiences that prioritize raw digital immersion and absolute conversion rates.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Cloud" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Cloud Infrastructure</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Elastic cloud infrastructure setups running parallel load balancing using AWS, Edge CDNs, and hybrid clusters to handle massive scale traffic effortlessly.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Custom Code" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Custom Software Systems</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Tailored computational software engineered explicitly for complex datasets. Ranging from Fintech POS ledgers, CRM algorithms to multi-node operational architecture.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">DevOps & CI/CD Pipelines</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Automated software delivery streams guaranteeing your production environments sync flawlessly directly with your active coding networks via zero-latency pipelines.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Digital Marketing" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Digital Growth & SEO</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Strategic online marketing, search engine optimization (SEO), and social media growth campaigns designed to elevate your brand presence and user conversion rates.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Data Science" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">AI Data Science</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Predictive modeling, machine learning integration, and advanced analytical pipelines to transform raw enterprise data into intelligent automation streams.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Maintenance & Support" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">24/7 SLA Maintenance</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Dedicated maintenance, security patching, hosting uptime support, and continuous feature monitoring for enterprise portals, applications, and networks.</p>
          </div>
        </div>

      </div>
    </section>
  `}function we(){document.querySelectorAll("main > section").forEach(e=>{e.style.display="none"}),document.querySelector("#services").style.display="block",be()}function xe(){const e=document.querySelector("#blog");e&&(e.innerHTML=`
    <div class="blog-page page-hero">
      <div class="container">
        
        <!-- Header / Title -->
        <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
          <div class="ai-badge-pill fade-in-up">
            <span class="pulse-dot"></span> EXECUTIVE BRIEFINGS & PR DISPATCHES
          </div>
          <h1 class="section-title fade-in-up gradient-text" style="font-size: clamp(2.2rem, 4.5vw, 3.8rem);">
            The Neural Ledger
          </h1>
          <p class="section-subtitle fade-in-up">
            Decoding Intelligence, Cloud Architecture, SOC2 Compliance, and Sovereign AI Infrastructure.
          </p>
        </div>

        <!-- Interactive Shadcn Tag Filter Cloud -->
        <div class="filter-cloud fade-in-up" id="blog-tag-cloud">
          <button class="tag-chip active" data-filter="all">All Insights</button>
          <button class="tag-chip" data-filter="ai-governance">AI Governance</button>
          <button class="tag-chip" data-filter="cloud-arch">Cloud Architecture</button>
          <button class="tag-chip" data-filter="security">Security & Compliance</button>
          <button class="tag-chip" data-filter="case-studies">Enterprise Case Studies</button>
        </div>

        <!-- Featured PR Executive Whitepaper Story Card -->
        <div class="featured-pr-card glass-panel fade-in-up">
          <div class="featured-pr-grid">
            <div class="featured-pr-content">
              <span class="pr-tag-badge">★ FEATURED EXECUTIVE WHITEPAPER</span>
              <h2 class="featured-pr-title gradient-text">
                Sovereign AI Infrastructure: Achieving Sub-50ms Model Inference with Zero Data Retention
              </h2>
              <p class="featured-pr-excerpt">
                An architectural analysis by Rodstar Tech Devs on deploying private neural models within isolated VPC boundaries. Learn how we eliminate vendor lock-in, guarantee SOC2 Type II compliance, and process high-frequency real-time payloads.
              </p>
              
              <div class="pr-meta">
                <div class="pr-author-info">
                  <img src="/RODNEY20261.JPG" alt="Rodney Gilbert" class="pr-author-avatar">
                  <div>
                    <div class="pr-author-name">Rodney Gilbert</div>
                    <div class="pr-author-role">Founder & CEO, Rodstar Tech Devs</div>
                  </div>
                </div>
                
                <div style="display: flex; gap: 1rem; align-items: center;">
                  <button type="button" class="btn btn-primary btn-read-article" data-article-id="featured-whitepaper" style="padding: 0.65rem 1.4rem; font-size: 0.88rem;">
                    Read Executive Blueprint →
                  </button>
                </div>
              </div>
            </div>

            <div class="featured-pr-visual" style="text-align: center;">
              <div class="glass-panel" style="padding: 2rem; border-color: rgba(0, 212, 255, 0.4) !important; background: rgba(3, 7, 18, 0.9) !important;">
                <div class="pulse-dot" style="margin: 0 auto 1rem; width: 14px; height: 14px;"></div>
                <div style="font-size: 0.82rem; color: #00D4FF; font-weight: 700; margin-bottom: 0.5rem;">BENCHMARK REPORT v3.5</div>
                <div style="font-size: 2rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">&lt; 38.4 ms</div>
                <div style="font-size: 0.8rem; color: var(--text-light);">Average Edge Inference Latency</div>
                <div style="margin-top: 1.2rem; padding-top: 1rem; border-top: 1px solid rgba(0, 119, 255, 0.2); font-size: 0.76rem; color: #27C93F;">
                  ✔ SOC2 Type II & ISO 27001 Verified
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Content Grid (3 Columns) -->
        <div class="articles-grid" id="articles-grid-container">
          
          <!-- Article 1 -->
          <article class="article-card glass-panel fade-in-up" data-category="security">
            <div>
              <div class="article-category">Security & Compliance</div>
              <h3 class="article-title">Navigating SOC2 Type II & ISO 27001 Compliance in Microservice Deployment</h3>
              <p class="article-excerpt">How modern tech platforms safeguard tenant isolation, encryption key rotation, and automated audit trails in multi-cloud container environments.</p>
            </div>
            <div class="article-footer-meta">
              <span>5 Min Read • Oct 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-1">Read Article →</button>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="article-card glass-panel fade-in-up" data-category="case-studies">
            <div>
              <div class="article-category">Case Studies</div>
              <h3 class="article-title">Scaling Digital Education: How Applegate School & ElimuNexus Built a 99.99% SLA Portal</h3>
              <p class="article-excerpt">Case study on architecting a zero-downtime student portal handling 20,000+ simultaneous daily requests with automated fee processing.</p>
            </div>
            <div class="article-footer-meta">
              <span>6 Min Read • Sep 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-2">Read Case Study →</button>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="article-card glass-panel fade-in-up" data-category="cloud-arch">
            <div>
              <div class="article-category">Cloud Architecture</div>
              <h3 class="article-title">High-Frequency API Gateway Architectures: Lessons in Ultra-Low Latency</h3>
              <p class="article-excerpt">Deep-dive into custom reverse proxy caching, HTTP/3 QUIC protocol optimization, and regional edge routing at Rodstar Tech Devs.</p>
            </div>
            <div class="article-footer-meta">
              <span>8 Min Read • Sep 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-3">Read Article →</button>
            </div>
          </article>

          <!-- Article 4 -->
          <article class="article-card glass-panel fade-in-up" data-category="ai-governance">
            <div>
              <div class="article-category">AI Governance</div>
              <h3 class="article-title">Enterprise LLM Fine-Tuning: Protecting Proprietary IP with On-Premise Mesh Networks</h3>
              <p class="article-excerpt">Strategies for training custom open-weights models (Llama 3, Qwen, DeepSeek) without exposing proprietary enterprise data to third parties.</p>
            </div>
            <div class="article-footer-meta">
              <span>7 Min Read • Aug 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-4">Read Article →</button>
            </div>
          </article>

          <!-- Article 5 -->
          <article class="article-card glass-panel fade-in-up" data-category="case-studies">
            <div>
              <div class="article-category">Case Studies</div>
              <h3 class="article-title">Real Estate Portfolios: Geolocation Data Mapping for Moussad Realty</h3>
              <p class="article-excerpt">How vector indexing and responsive 3D property viewports increased digital conversion rates by 42% for commercial real estate platforms.</p>
            </div>
            <div class="article-footer-meta">
              <span>4 Min Read • Aug 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-5">Read Case Study →</button>
            </div>
          </article>

          <!-- Article 6 -->
          <article class="article-card glass-panel fade-in-up" data-category="cloud-arch">
            <div>
              <div class="article-category">Cloud Architecture</div>
              <h3 class="article-title">The Future of Web3 APIs and Decentralized Data Verification</h3>
              <p class="article-excerpt">Integrating cryptographically verifiable audit logs and smart contract middleware into traditional corporate SQL database systems.</p>
            </div>
            <div class="article-footer-meta">
              <span>6 Min Read • Jul 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-6">Read Article →</button>
            </div>
          </article>

        </div>

        <!-- Lead Generation & PR Engine Card -->
        <div class="newsletter-card glass-panel fade-in-up">
          <div class="ai-badge-pill" style="margin-bottom: 1rem;">EXECUTIVE DISPATCH</div>
          <h2 class="gradient-text" style="font-size: 2rem; font-weight: 700; margin-bottom: 0.8rem;">Subscribe to Executive Insights</h2>
          <p style="color: var(--text-light); max-width: 620px; margin: 0 auto;">Receive quarterly whitepapers, architectural blueprints, and press briefings directly from our lead engineering team.</p>
          
          <form class="newsletter-form" id="pr-newsletter-form">
            <input type="email" class="newsletter-input" required placeholder="Enter corporate email address (e.g. cto@enterprise.com)">
            <button type="submit" class="btn btn-primary" style="padding: 0.85rem 1.6rem; white-space: nowrap;">
              Subscribe Free →
            </button>
          </form>
          <div id="newsletter-status" style="margin-top: 1rem; font-size: 0.85rem; display: none;"></div>
        </div>

      </div>
    </div>

    <!-- Reading Drawer Modal Backdrop -->
    <div class="blog-modal-backdrop" id="blog-reading-modal">
      <div class="blog-modal-card glass-panel">
        <button type="button" class="blog-modal-close" id="btn-close-blog-modal">&times;</button>
        <div id="blog-modal-content"></div>
      </div>
    </div>
  `,Se(),ke(),Ae())}function Se(){const e=document.querySelectorAll("#blog-tag-cloud .tag-chip"),t=document.querySelectorAll("#articles-grid-container .article-card");e.forEach(a=>{a.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),a.classList.add("active");const r=a.getAttribute("data-filter");t.forEach(i=>{const s=i.getAttribute("data-category");r==="all"||r===s?i.style.display="flex":i.style.display="none"})})})}function ke(){const e=document.querySelector("#blog-reading-modal"),t=document.querySelector("#blog-modal-content"),a=document.querySelector("#btn-close-blog-modal"),r={"featured-whitepaper":{title:"Sovereign AI Infrastructure: Achieving Sub-50ms Model Inference",author:"Rodney Gilbert • Founder & CEO",category:"EXECUTIVE WHITEPAPER",content:`
        <h3>Executive Summary</h3>
        <p>In 2026, enterprise data sovereignty has become a non-negotiable prerequisite for AI adoption. Public API endpoints introduce latency volatility and data exposure risks. Rodstar Tech Devs architects private neural inference clusters within dedicated VPC boundaries.</p>
        <h4>Key Takeaways</h4>
        <ul>
          <li><strong>Zero Data Retention:</strong> Strict ephemeral payload processing with immediate memory scrubbing.</li>
          <li><strong>Sub-50ms Edge Response:</strong> Model quantization and TensorRT execution environments.</li>
          <li><strong>Compliance Alignment:</strong> Built according to SOC2 Type II and ISO 27001 audit standards.</li>
        </ul>
        <p>Contact our system architects to request the full 45-page PDF whitepaper and benchmark suite.</p>
      `},"art-1":{title:"Navigating SOC2 Type II & ISO 27001 Compliance",author:"Rodstar Engineering Team",category:"SECURITY & COMPLIANCE",content:`
        <h3>Enterprise Compliance Frameworks</h3>
        <p>Modern microservice deployments must prove compliance through automated evidence collection, encrypted telemetry, and role-based access control (RBAC).</p>
        <p>Rodstar Tech Devs integrates automated security scanners and continuous log auditing across all managed cloud environments.</p>
      `},"art-2":{title:"Scaling Digital Education: Applegate School & ElimuNexus Case Study",author:"Rodstar Client Solutions Group",category:"CASE STUDY",content:`
        <h3>Academic Cloud Portal Scalability</h3>
        <p>Applegate School and ElimuNexus required a robust, high-availability platform capable of handling peak student exam submissions and real-time fee verifications.</p>
        <p>Through containerized microservices and automated database load balancing, we achieved 99.99% operational uptime throughout the academic cycle.</p>
      `}};document.querySelectorAll(".btn-read-article").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-article-id"),n=r[s]||{title:"Executive Briefing: Rodstar Tech Devs",author:"Rodstar Engineering Team",category:"INSIGHTS",content:"<p>Detailed technical documentation available upon request. Contact our engineering team for full specifications.</p>"};t.innerHTML=`
        <div class="pr-tag-badge">${n.category}</div>
        <h2 style="font-size: 1.8rem; font-weight: 700; color: #ffffff; margin-bottom: 0.8rem; line-height: 1.25;">${n.title}</h2>
        <div style="font-size: 0.85rem; color: #00D4FF; margin-bottom: 1.8rem; font-weight: 600;">Published by ${n.author}</div>
        <div style="line-height: 1.7; color: var(--text-light); font-size: 0.98rem;">${n.content}</div>
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(0, 119, 255, 0.2); display: flex; gap: 1rem;">
          <a href="/contact" class="btn btn-primary nav-link" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;">Request Full PDF Whitepaper →</a>
        </div>
      `,e.classList.add("active")})}),a&&a.addEventListener("click",()=>{e.classList.remove("active")}),e&&e.addEventListener("click",i=>{i.target===e&&e.classList.remove("active")})}function Ae(){const e=document.querySelector("#pr-newsletter-form"),t=document.querySelector("#newsletter-status");e&&e.addEventListener("submit",a=>{a.preventDefault(),t&&(t.style.display="block",t.style.color="#00D4FF",t.textContent="✔ Thank you for subscribing. The latest Executive Whitepaper has been dispatched to your email."),e.reset()})}function Ee(){document.querySelectorAll("main > section").forEach(t=>{t.style.display="none"});const e=document.querySelector("#blog");e&&(e.style.display="block"),xe()}function Ce(){const e=document.querySelector("#ai-hub");e&&(e.innerHTML=`
    <div class="ai-hub-page page-hero">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
          <div class="ai-badge-pill fade-in-up">
            <span class="pulse-dot"></span> RODSTAR AI BRANCH • ENTERPRISE CORE
          </div>
          <h1 class="section-title fade-in-up gradient-text" style="font-size: clamp(2.4rem, 5vw, 4rem);">
            Autonomous Intelligence. Enterprise Precision.
          </h1>
          <p class="section-subtitle fade-in-up">
            Deploy custom fine-tuned LLMs, autonomous agent workflows, and real-time data pipelines with zero data retention and sub-50ms latency.
          </p>

          <div class="cta-buttons fade-in-up" style="justify-content: center; gap: 1rem; margin-top: 1.5rem;">
            <a href="/contact" class="btn btn-primary nav-link">
              Schedule AI Infrastructure Audit
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <button type="button" class="btn btn-tour" data-action="start-tour">
              <span class="pulse-dot" style="width:6px;height:6px;"></span> Explore AI Workflow Tour
            </button>
          </div>
        </div>

        <!-- Live Glassmorphic Metrics Ticker Bar -->
        <div class="metrics-ticker-bar fade-in-up">
          <div class="metric-ticker-card glass-panel">
            <div class="metric-ticker-value">99.9%</div>
            <div class="metric-ticker-label">Model Accuracy SLA</div>
          </div>
          <div class="metric-ticker-card glass-panel">
            <div class="metric-ticker-value">&lt; 38ms</div>
            <div class="metric-ticker-label">Edge Inference Latency</div>
          </div>
          <div class="metric-ticker-card glass-panel">
            <div class="metric-ticker-value">0 Bytes</div>
            <div class="metric-ticker-label">Data Retention Guarantee</div>
          </div>
          <div class="metric-ticker-card glass-panel">
            <div class="metric-ticker-value">SOC2 & ISO</div>
            <div class="metric-ticker-label">Audit Compliant</div>
          </div>
        </div>

        <!-- Core Capabilities Matrix (4 Card Glass Grid) -->
        <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
          <div class="ai-badge-pill" style="margin: 0 auto 1rem;">CAPABILITIES MATRIX</div>
          <h2 class="section-title fade-in-up gradient-text">Enterprise AI Solutions</h2>
          <p class="section-subtitle fade-in-up">Architected for strict compliance, high throughput, and zero vendor lock-in.</p>
        </div>

        <div class="capabilities-grid">
          
          <!-- Card 1 -->
          <div class="capability-card glass-panel fade-in-up">
            <div class="capability-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>
            </div>
            <h3 class="capability-title">Custom LLM Fine-Tuning</h3>
            <p class="capability-desc">Adapt open-weights neural models (Llama 3, Qwen, DeepSeek) on your proprietary company data. Deployed within private VPCs for total IP protection.</p>
            <div class="capability-tags">
              <span class="capability-tag">Llama 3 / Qwen</span>
              <span class="capability-tag">LoRA Adaptation</span>
              <span class="capability-tag">Private VPC</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="capability-card glass-panel fade-in-up">
            <div class="capability-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <h3 class="capability-title">Autonomous Agent Workflows</h3>
            <p class="capability-desc">Self-correcting AI agentic pipelines that automate complex business tasks across ERP systems, customer support channels, and academic management portals.</p>
            <div class="capability-tags">
              <span class="capability-tag">ReAct Loop</span>
              <span class="capability-tag">Tool Calling</span>
              <span class="capability-tag">Auto-Recovery</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="capability-card glass-panel fade-in-up">
            <div class="capability-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"></path></svg>
            </div>
            <h3 class="capability-title">Enterprise Data Pipelines</h3>
            <p class="capability-desc">High-frequency vector indexing, hybrid RAG (Retrieval-Augmented Generation), and real-time data ingestion for instant knowledge retrieval.</p>
            <div class="capability-tags">
              <span class="capability-tag">Hybrid RAG</span>
              <span class="capability-tag">Vector DB</span>
              <span class="capability-tag">Sub-20ms Search</span>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="capability-card glass-panel fade-in-up">
            <div class="capability-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3 class="capability-title">Predictive Analytics & Edge AI</h3>
            <p class="capability-desc">On-device neural inference and predictive operational telemetry that forecasts business trends, prevents server downtime, and accelerates analytics.</p>
            <div class="capability-tags">
              <span class="capability-tag">Edge Inference</span>
              <span class="capability-tag">Anomaly Detection</span>
              <span class="capability-tag">Realtime Telemetry</span>
            </div>
          </div>

        </div>

        <!-- Interactive AI Sandbox Demo Widget -->
        <div class="sandbox-card glass-panel fade-in-up" id="ai-sandbox-widget">
          <div class="section-header" style="text-align: center; margin-bottom: 1rem;">
            <div class="ai-badge-pill">INTERACTIVE SANDBOX</div>
            <h2 class="gradient-text" style="font-size: 2rem; font-weight: 700;">Simulated AI Workflow Engine</h2>
            <p style="color: var(--text-light); max-width: 600px; margin: 0.5rem auto 0;">Test real-time neural mesh state routing and pipeline latency.</p>
          </div>

          <div class="sandbox-layout">
            <div class="sandbox-controls">
              <button class="sandbox-btn active" data-flow="support">
                <div class="sandbox-btn-title">🤖 Customer Support Agent Workflow</div>
                <div class="sandbox-btn-desc">NLP Query Parsing → Intent Routing → Auto-Resolution</div>
              </button>
              
              <button class="sandbox-btn" data-flow="finance">
                <div class="sandbox-btn-title">💎 Financial Risk Assessment Pipeline</div>
                <div class="sandbox-btn-desc">Payload Scrubbing → Fraud Vector Analysis → Scoring</div>
              </button>

              <button class="sandbox-btn" data-flow="school">
                <div class="sandbox-btn-title">🏫 School Portal Fee Automator</div>
                <div class="sandbox-btn-desc">Applegate Portal Sync → Payment Verification → Receipt</div>
              </button>
            </div>

            <div class="sandbox-visualizer">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(0, 119, 255, 0.2); padding-bottom: 0.75rem;">
                <span style="font-size: 0.8rem; color: #00D4FF; font-weight: 700;">MESH PIPELINE STATE</span>
                <span class="pulse-dot" style="background:#27C93F; box-shadow:0 0 10px #27C93F;"></span>
              </div>

              <div class="mesh-nodes-container">
                <div class="mesh-node">INPUT</div>
                <div class="mesh-line"></div>
                <div class="mesh-node" style="background: rgba(0, 212, 255, 0.2);">RODSTAR AI</div>
                <div class="mesh-line"></div>
                <div class="mesh-node" style="border-color: #27C93F;">RESULT</div>
              </div>

              <div id="sandbox-output-log" style="font-family: inherit; font-size: 0.8rem; color: var(--text-light); background: rgba(3, 7, 18, 0.8); padding: 0.85rem; border-radius: 8px;">
                <div style="color: #64748B;">// Processing: Customer Support Agent Workflow...</div>
                <div style="color: #00D4FF;">✔ Query Verified & Routed [Latency: 14.2ms]</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust & Compliance Section -->
        <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
          <div class="ai-badge-pill" style="margin: 0 auto 1rem;">GOVERNANCE & TRUST</div>
          <h2 class="section-title fade-in-up gradient-text">Enterprise Data Sovereignty</h2>
          <p class="section-subtitle fade-in-up">Rigorous security controls engineered for corporate decision-makers and CTOs.</p>
        </div>

        <div class="compliance-grid fade-in-up">
          <div class="compliance-badge-card glass-panel">
            <div class="compliance-badge-icon">🛡️</div>
            <div class="compliance-badge-title">SOC2 Type II</div>
            <div class="compliance-badge-desc">Continuous audit logging, access controls, and vulnerability scans.</div>
          </div>

          <div class="compliance-badge-card glass-panel">
            <div class="compliance-badge-icon">🔒</div>
            <div class="compliance-badge-title">ISO 27001</div>
            <div class="compliance-badge-desc">Strict information security management system (ISMS) protocols.</div>
          </div>

          <div class="compliance-badge-card glass-panel">
            <div class="compliance-badge-icon">🌐</div>
            <div class="compliance-badge-title">GDPR & Kenya DPA</div>
            <div class="compliance-badge-desc">Full compliance with regional data privacy laws and encryption standards.</div>
          </div>

          <div class="compliance-badge-card glass-panel">
            <div class="compliance-badge-icon">⚡</div>
            <div class="compliance-badge-title">99.99% SLA</div>
            <div class="compliance-badge-desc">Redundant multi-region edge failover with zero single points of failure.</div>
          </div>
        </div>

        <!-- Primary High-Conversion CTA Callout Card -->
        <div class="glass-panel fade-in-up" style="padding: 4rem 2.5rem; text-align: center; border-color: rgba(0, 212, 255, 0.4) !important;">
          <div class="ai-badge-pill" style="margin: 0 auto 1.5rem;">READY TO SCALE YOUR AI INFRASTRUCTURE?</div>
          <h2 class="gradient-text" style="font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; margin-bottom: 1rem;">
            Schedule an AI Infrastructure Audit with Our Systems Architects
          </h2>
          <p style="max-width: 680px; margin: 0 auto 2.5rem; color: var(--text-light); font-size: 1.05rem;">
            Our senior engineering team will evaluate your current software stack, analyze data latency bottlenecks, and design a custom AI deployment blueprint.
          </p>

          <div class="cta-buttons" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary nav-link" style="padding: 0.85rem 2rem;">
              Book Technical Consultation →
            </a>
            <a href="/blog" class="btn btn-outline nav-link" style="padding: 0.85rem 1.8rem;">
              Read Executive Whitepapers
            </a>
          </div>
        </div>

      </div>
    </div>
  `,Te())}function Te(){const e=document.querySelectorAll("#ai-sandbox-widget .sandbox-btn"),t=document.querySelector("#sandbox-output-log"),a={support:{log:['<div style="color: #64748B;">// Processing: Customer Support Agent Workflow...</div>','<div style="color: #F8FAFC;">Step 1: Parse User Natural Language Intent...</div>','<div style="color: #38BDF8;">Step 2: Query Knowledge Vector Base (RAG)...</div>','<div style="color: #00D4FF; font-weight: 600;">✔ Auto-Resolution Generated [Latency: 14.2ms]</div>']},finance:{log:['<div style="color: #64748B;">// Processing: Financial Risk Assessment Pipeline...</div>','<div style="color: #F8FAFC;">Step 1: Sanitize Ephemeral Payload Data...</div>','<div style="color: #38BDF8;">Step 2: Run Fraud Vector Classifier...</div>','<div style="color: #27C93F; font-weight: 600;">✔ Risk Score Calculated: 0.02 (APPROVED) [Latency: 18.5ms]</div>']},school:{log:['<div style="color: #64748B;">// Processing: School Portal Fee Automator...</div>','<div style="color: #F8FAFC;">Step 1: Sync Applegate Student Ledger...</div>','<div style="color: #38BDF8;">Step 2: Verify M-Pesa / Bank Webhook Transaction...</div>','<div style="color: #00D4FF; font-weight: 600;">✔ Digital Receipt Issued & Logged [Latency: 11.8ms]</div>']}};e.forEach(r=>{r.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),r.classList.add("active");const i=r.getAttribute("data-flow"),s=a[i];t&&s&&(t.innerHTML='<div style="color: #64748B;">// Initializing Mesh Connection...</div>',setTimeout(()=>{t.innerHTML=s.log.join("")},250))})})}function Ie(){document.querySelectorAll("main > section").forEach(t=>{t.style.display="none"});const e=document.querySelector("#ai-hub");e&&(e.style.display="block"),Ce()}function De(){const e=document.querySelector("#support");e&&(e.innerHTML=`
    <div class="support-page page-hero">
      <div class="container">
        
        <!-- Header -->
        <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
          <div class="ai-badge-pill fade-in-up">
            <span class="pulse-dot"></span> OPEN INNOVATION & PARTNERSHIP INITIATIVE
          </div>
          <h1 class="section-title fade-in-up gradient-text" style="font-size: clamp(2.2rem, 4.5vw, 3.8rem);">
            Support & Partner With Us
          </h1>
          <p class="section-subtitle fade-in-up">
            Fund our open-source AI benchmarks and academic EdTech grants — or collaborate with our engineering team on strategic enterprise technology ventures.
          </p>
        </div>

        <!-- Track Switcher -->
        <div class="track-switcher fade-in-up">
          <button class="track-btn active" data-target="track-donate">💚 Direct Funding & Sponsorship</button>
          <button class="track-btn" data-target="track-partner">🤝 Project Partnership Application</button>
        </div>

        <!-- TRACK 1: Direct Financial Support & Sponsorship -->
        <div id="track-donate" class="support-track-content">
          <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
            <h2 class="gradient-text" style="font-size: 1.8rem; font-weight: 700;">Financial Sponsorship Channels</h2>
            <p style="color: var(--text-light); max-width: 600px; margin: 0.5rem auto 0;">All financial contributions directly support local academic portal deployment, open-source AI models, and student hardware sourcing across Kenya.</p>
          </div>

          <div class="payment-methods-grid fade-in-up">
            
            <!-- Paystack Direct Link Store Card -->
            <div class="payment-card glass-panel" style="border-color: rgba(0, 212, 255, 0.4) !important;">
              <div class="payment-icon-box">💳</div>
              <h3 class="payment-title">Paystack Online Checkout</h3>
              <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1.2rem;">Donate securely via Cards (Visa/Mastercard), M-Pesa automated checkout, or Apple Pay.</p>
              
              <a href="https://paystack.shop/pay/jeasxalcgv" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; padding: 0.75rem; font-size: 0.9rem; justify-content: center; text-decoration: none;">
                Pay via Official Paystack Portal →
              </a>
              <div style="font-size: 0.76rem; color: #00D4FF; margin-top: 0.8rem;">
                🔒 SSL Encrypted • Instant Paystack Verification
              </div>
            </div>

            <!-- M-Pesa Paybill / Till -->
            <div class="payment-card glass-panel">
              <div class="payment-icon-box">📱</div>
              <h3 class="payment-title">M-Pesa Mobile Pay</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Instant mobile money support via M-Pesa Till or Buy Goods.</p>
              <div class="payment-detail">TILL: 9285061</div>
              <p style="font-size: 0.78rem; color: #00D4FF;">Name: RODSTAR TECH DEVS</p>
            </div>

            <!-- Crypto / Web3 -->
            <div class="payment-card glass-panel">
              <div class="payment-icon-box">💎</div>
              <h3 class="payment-title">Crypto & Web3 Grants</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Support via USDT (TRC20 / ERC20) or Bitcoin / Ethereum.</p>
              <div class="payment-detail" style="font-size: 0.75rem; word-break: break-all;">Contact for address</div>
              <p style="font-size: 0.78rem; color: #00D4FF;">USDT / ETH / BTC Network</p>
            </div>

          </div>

          <!-- Impact Stories -->
          <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
            <div class="ai-badge-pill" style="margin: 0 auto 1rem;">COMMUNITY IMPACT</div>
            <h2 class="gradient-text" style="font-size: 1.8rem; font-weight: 700;">Where Your Support Goes</h2>
          </div>

          <div class="impact-grid fade-in-up">
            <div class="impact-card glass-panel">
              <h4>🏫 Academic EdTech Grants</h4>
              <p>Funding digital portals, cloud bandwidth, and student portal infrastructure for regional partner institutions in Kenya.</p>
            </div>
            
            <div class="impact-card glass-panel">
              <h4>🤖 Open-Source Local AI Models</h4>
              <p>Benchmarking and fine-tuning open-weights LLMs for African languages and specialized regional domain data.</p>
            </div>

            <div class="impact-card glass-panel">
              <h4>💻 Hardware Sourcing & Refurbishment</h4>
              <p>Supplying refurbished laptops, routers, and computer accessories to underprivileged students and coding bootcamps.</p>
            </div>
          </div>
        </div>

        <!-- TRACK 2: Strategic Project Partnership Request Form (Formspree Integrated) -->
        <div id="track-partner" class="support-track-content" style="display: none;">
          <div class="partnership-card glass-panel fade-in-up">
            <div class="section-header" style="text-align: center; margin-bottom: 1.5rem;">
              <div class="ai-badge-pill">JOINT VENTURES & COLLABORATIONS</div>
              <h2 class="gradient-text" style="font-size: 2rem; font-weight: 700;">Partner With Rodstar Tech Devs</h2>
              <p style="color: var(--text-light); max-width: 600px; margin: 0.5rem auto 0;">Submit a proposal for joint software engineering, enterprise AI deployment, or academic infrastructure co-sponsorship.</p>
            </div>

            <form id="partnership-form">
              <input type="hidden" name="_subject" value="New Partnership Application - Rodstar Tech Devs">
              
              <div class="partnership-form-grid">
                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Full Name / Authorized Lead *</label>
                  <input type="text" name="name" class="support-input" required placeholder="e.g. Dr. Michael Omondi">
                </div>

                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Organization / Institution Name *</label>
                  <input type="text" name="organization" class="support-input" required placeholder="e.g. ElimuNexus / Astral Tech">
                </div>

                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Corporate Email Address *</label>
                  <input type="email" name="email" class="support-input" required placeholder="e.g. partner@enterprise.com">
                </div>

                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Partnership Track *</label>
                  <select name="partnership_track" class="support-select" required>
                    <option value="Joint AI & Neural Venture">🤖 Joint AI & Neural Venture</option>
                    <option value="Academic EdTech Co-Sponsorship">🏫 Academic EdTech Co-Sponsorship</option>
                    <option value="Enterprise Cloud Deployment">☁️ Enterprise Cloud Deployment</option>
                    <option value="Hardware Sourcing Collaboration">💻 Hardware Sourcing Collaboration</option>
                  </select>
                </div>

                <div class="form-group-full">
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Project Proposal / Collaboration Abstract *</label>
                  <textarea name="message" class="support-textarea" rows="5" required placeholder="Describe your proposed project goals, required technical scope, estimated budget range, and timeline expectations..."></textarea>
                </div>
              </div>

              <div style="margin-top: 2rem; text-align: center;">
                <button type="submit" class="btn btn-primary" style="padding: 0.85rem 2.2rem; font-size: 0.95rem;">
                  Submit Partnership Proposal →
                </button>
              </div>
              
              <div id="partnership-status" style="margin-top: 1.2rem; text-align: center; font-size: 0.88rem; display: none;"></div>
            </form>
          </div>
        </div>

      </div>
    </div>
  `,Fe(),Pe())}function Fe(){const e=document.querySelectorAll(".track-btn"),t=document.querySelectorAll(".support-track-content");e.forEach(a=>{a.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),a.classList.add("active");const r=a.getAttribute("data-target");t.forEach(i=>{i.id===r?i.style.display="block":i.style.display="none"})})})}function Pe(){const e=document.querySelector("#partnership-form"),t=document.querySelector("#partnership-status"),a="https://formspree.io/f/xvgvayno";e&&e.addEventListener("submit",async r=>{r.preventDefault();const i=e.querySelector('button[type="submit"]'),s=i.textContent;i.textContent="Submitting Proposal...",i.disabled=!0;const n=new FormData(e),o=Object.fromEntries(n.entries());try{(await fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(t&&(t.style.display="block",t.style.color="#00D4FF",t.textContent="✔ Thank you! Your partnership proposal has been submitted successfully. Our executive team will review and reply within 24 hours."),e.reset()):t&&(t.style.display="block",t.style.color="#FF5F56",t.textContent="✖ There was an issue submitting your proposal. Please try again or email us directly at enquiries@rodstartechdevs.co.ke.")}catch(l){console.error("Formspree network error",l),t&&(t.style.display="block",t.style.color="#FF5F56",t.textContent="✖ Network connection error. Please check your internet connection and try again.")}finally{i.textContent=s,i.disabled=!1}})}function Re(){document.querySelectorAll("main > section").forEach(t=>{t.style.display="none"});const e=document.querySelector("#support");e&&(e.style.display="block"),De()}function Le(){const e=document.querySelector("#navigation");e.innerHTML=`
    <nav class="navbar" id="main-navbar">
      <div class="container">
        <div class="nav-container">
          <a href="/" class="logo">
            <img src="/RODSTAR.png" alt="Rodstar Tech Devs" width="120" height="36" style="height: 36px; width: auto; object-fit: contain; display: block;" onerror="this.onerror=null; this.src='RODSTAR.png';" loading="eager" fetchpriority="high">
          </a>
          
          <!-- Floating Glassmorphism Desktop Navigation -->
          <ul class="nav-menu">
            <li><a href="/" class="nav-link">Home</a></li>
            
            <!-- Solutions & AI Dropdown -->
            <li class="nav-dropdown">
              <a href="/ai-hub" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Solutions & AI
                <span class="nav-chevron" aria-hidden="true"></span>
              </a>
              <ul class="nav-dropdown-menu" role="menu">
                <li role="none">
                  <a href="/ai-hub" class="nav-link nav-dropdown-link" role="menuitem" style="color: #00D4FF; font-weight: 700;">
                    🤖 Rodstar AI Hub
                  </a>
                </li>
                <li role="none"><a href="/development" class="nav-link nav-dropdown-link" role="menuitem">⚡ Development & Services</a></li>
                <li role="none"><a href="/shop" class="nav-link nav-dropdown-link" role="menuitem">🛒 Hardware Shop & Sourcing</a></li>
                <li role="none"><a href="/services" class="nav-link nav-dropdown-link" role="menuitem">☁️ Cloud Infrastructure</a></li>
              </ul>
            </li>

            <!-- Company & PR Dropdown -->
            <li class="nav-dropdown">
              <a href="/about" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Company & PR
                <span class="nav-chevron" aria-hidden="true"></span>
              </a>
              <ul class="nav-dropdown-menu" role="menu">
                <li role="none"><a href="/about" class="nav-link nav-dropdown-link" role="menuitem">🏢 About Us</a></li>
                <li role="none"><a href="/team" class="nav-link nav-dropdown-link" role="menuitem">👥 Engineering Team</a></li>
                <li role="none"><a href="/portfolio" class="nav-link nav-dropdown-link" role="menuitem">📁 Portfolio & Case Studies</a></li>
                <li role="none"><a href="/blog" class="nav-link nav-dropdown-link" role="menuitem">📰 The Neural Ledger (Blog)</a></li>
                <li role="none"><a href="/support" class="nav-link nav-dropdown-link" role="menuitem" style="color:#27C93F; font-weight:700;">💚 Support & Partner</a></li>
              </ul>
            </li>

            <li><a href="/pricing" class="nav-link">Pricing</a></li>
            <li><a href="/contact" class="nav-link">Contact</a></li>

            <li>
              <button type="button" class="btn btn-tour" data-action="start-tour" style="padding: 0.35rem 0.9rem; font-size: 0.82rem; min-height: 34px;">
                <span class="pulse-dot" style="width:6px;height:6px;"></span> AI Tour
              </button>
            </li>
          </ul>

          <button type="button" class="mobile-menu-btn" aria-label="Open menu">☰</button>
          
          <!-- Full Mobile Menu (Preserves All Page Direct Links) -->
          <div class="mobile-menu">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li><a href="/ai-hub" class="nav-link" style="color:#00D4FF; font-weight:700;">🤖 Rodstar AI Hub</a></li>
              <li><a href="/support" class="nav-link" style="color:#27C93F; font-weight:700;">💚 Support & Partner</a></li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Solutions & Services</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/ai-hub" class="nav-link">Rodstar AI Hub</a>
                    <a href="/development" class="nav-link">Development & Services</a>
                    <a href="/shop" class="nav-link">Hardware Shop & Sourcing</a>
                    <a href="/services" class="nav-link">Cloud Infrastructure</a>
                  </div>
                </details>
              </li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Company & PR Insights</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/blog" class="nav-link">The Neural Ledger (Blog)</a>
                    <a href="/support" class="nav-link">Support & Partner With Us</a>
                    <a href="/about" class="nav-link">About Us</a>
                    <a href="/team" class="nav-link">Engineering Team</a>
                    <a href="/portfolio" class="nav-link">Portfolio Showcase</a>
                  </div>
                </details>
              </li>
              <li><a href="/pricing" class="nav-link">Pricing & Plans</a></li>
              <li><a href="/contact" class="nav-link">Contact Sales</a></li>
              <li style="padding: 0.75rem 1rem;">
                <button type="button" class="btn btn-tour" data-action="start-tour" style="width:100%; justify-content:center;">
                  <span class="pulse-dot"></span> Start AI Platform Tour
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  `,qe()}function qe(){const e=document.querySelector("#main-navbar");if(!e)return;let t=window.scrollY;window.addEventListener("scroll",()=>{const a=window.scrollY;a>t&&a>70?e.classList.add("navbar-hidden"):e.classList.remove("navbar-hidden"),t=a},{passive:!0})}function Me(){const e=document.querySelector("#footer");e.innerHTML=`
    <footer class="footer" id="interactive-footer">
      <!-- Cursor-Tracking Dynamic Spotlight Canvas Background -->
      <canvas id="footer-spotlight-canvas" class="footer-spotlight-canvas"></canvas>
      
      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Live System Operational Pill -->
        <div style="display: flex; justify-content: center; margin-bottom: 3.5rem;">
          <div class="ai-badge-pill" style="margin-bottom: 0;">
            <span class="pulse-dot"></span> RODSTAR EDGE MESH • 99.99% SLA ONLINE
          </div>
        </div>

        <div class="footer-content">
          <!-- Brand Info -->
          <div class="footer-section">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.2rem; flex-wrap: wrap;">
              <img src="/RODSTAR.png" alt="Rodstar Tech Devs Logo" width="50" height="50" style="width: 50px; height: 50px; min-width: 50px; min-height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4); display: block; flex-shrink: 0;" onerror="this.onerror=null; this.src='RODSTAR.png';" loading="eager" fetchpriority="high">
              <span style="font-size: 1.35rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; word-break: break-word;">RODSTAR TECH DEVS</span>
            </div>
            
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.65; margin-bottom: 1.5rem; word-break: break-word;">
              Enterprise digital infrastructure, high-availability web hosting, custom domains, corporate emails, and bespoke AI software engineering built for global scale by Rodstar Tech Devs.
            </p>

            <!-- Horizontally Aligned Social Links Mapped to Official Profiles -->
            <div class="social-links">
              <a href="https://www.instagram.com/rodstartechdevs" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://x.com/rodstartechdevs" class="social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@rodstartechdevs" class="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer" title="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 9.5c-.5-.2-1-.4-1.5-.3V12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.3 0 .6.05.9.1V6.5c-.6-.1-1.1-.15-1.7-.15-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6v-2.5c1.1.8 2.4 1.3 3.8 1.4v-2.2c-.5 0-1-.05-1.5-.2z"></path></svg>
              </a>
              <a href="https://github.com/rodstartechdevs" class="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/rodstartechdevs" class="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <!-- Column 2: Infrastructure & AI -->
          <div class="footer-section">
            <h3>Infrastructure & AI</h3>
            <a href="/ai-hub" class="nav-link" style="color: #00D4FF !important; font-weight: 700;">Rodstar AI Hub</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Managed Web Hosting</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Enterprise Emails</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Custom Domains</a>
            <a href="/services" class="nav-link">Cloud Edge Networks</a>
          </div>
          
          <!-- Column 3: Solutions & Company -->
          <div class="footer-section">
            <h3>Company & Support</h3>
            <a href="/support" class="nav-link" style="color: #27C93F !important; font-weight: 700;">💚 Support & Partner</a>
            <a href="/blog" class="nav-link">The Neural Ledger (Blog)</a>
            <a href="/about" class="nav-link">About Us</a>
            <a href="/team" class="nav-link">Engineering Team</a>
            <a href="/portfolio" class="nav-link">Portfolio</a>
            <a href="/development" class="nav-link">Development</a>
            <a href="/shop" class="nav-link">Hardware Shop</a>
            <a href="/pricing" class="nav-link">Pricing & Plans</a>
          </div>
          
          <!-- Column 4: Contact Connectors -->
          <div class="footer-section">
            <h3>Contact Sales</h3>
            <p style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; word-break: break-all;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2" style="flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg> 
              <a href="mailto:enquiries@rodstartechdevs.co.ke" style="display:inline; color: var(--text-light); word-break: break-all;">enquiries@rodstartechdevs.co.ke</a>
            </p>
            <p style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2" style="flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 
              <a href="tel:+254780482290" style="display:inline; color: var(--text-light);">+254 780 482 290</a>
            </p>
            <p style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--text-light);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2" style="flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
              Nairobi, Kenya
            </p>
            
            <a href="https://wa.me/254780482290" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266l-.335.194-.347.059 1.327 3.849.274-.447c1.203-1.73 3.02-2.804 5.031-2.804 3.165 0 5.742 2.573 5.742 5.73 0 1.575-.548 3.06-1.55 4.286l.3.292.045.035c.78.774 1.217 1.814 1.217 2.932 0 3.077-2.512 5.59-5.589 5.59-3.076 0-5.589-2.512-5.589-5.589 0-2.049.979-3.977 2.631-5.21l.287-.213.046-.034c.3-.222.432-.632.328-1.01l-1.298-3.76-.358.057C5.64 3.05 2.767 5.9 2.767 9.467c0 3.81 3.1 6.91 6.91 6.91s6.91-3.1 6.91-6.91c0-3.167-2.29-5.834-5.348-6.51l-.334-.059z"></path></svg> Instant WhatsApp Chat
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Rodstar Tech Devs. All rights reserved.</p>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <a href="/privacy" class="nav-link">Privacy Policy</a>
            <a href="/terms" class="nav-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,ze()}function ze(){const e=document.querySelector("#interactive-footer"),t=document.querySelector("#footer-spotlight-canvas");if(!e||!t)return;const a=t.getContext("2d");let r=t.width=e.clientWidth,i=t.height=e.clientHeight,s=r/2,n=i/2,o=r/2,l=i/2,c=!1;function v(){!e||!t||(r=t.width=e.clientWidth,i=t.height=e.clientHeight)}window.addEventListener("resize",v),e.addEventListener("mousemove",u=>{const F=e.getBoundingClientRect();o=u.clientX-F.left,l=u.clientY-F.top,c=!0}),e.addEventListener("mouseleave",()=>{c=!1});function y(){if(document.body.contains(t)){if(s+=(o-s)*.08,n+=(l-n)*.08,a.clearRect(0,0,r,i),c||Math.abs(o-s)>1){const u=a.createRadialGradient(s,n,0,s,n,380);u.addColorStop(0,"rgba(0, 212, 255, 0.22)"),u.addColorStop(.4,"rgba(0, 82, 255, 0.12)"),u.addColorStop(.8,"rgba(3, 7, 18, 0.05)"),u.addColorStop(1,"transparent"),a.fillStyle=u,a.fillRect(0,0,r,i)}requestAnimationFrame(y)}}y()}function Oe(){const e=document.body.classList.toggle("light-theme");localStorage.setItem("theme",e?"light":"dark"),Ne(e)}function Ne(e){document.querySelectorAll(".theme-toggle-icon").forEach(t=>{t.textContent=e?"🌙":"☀️",t.style.transform=e?"rotate(360deg)":"rotate(0deg)"})}document.addEventListener("click",e=>{e.target.closest(".theme-toggle-btn")&&Oe()});const L={"/":V,"/about":Y,"/services":we,"/pricing":X,"/portfolio":J,"/team":ae,"/contact":oe,"/privacy":ce,"/terms":pe,"/shop":ve,"/development":fe,"/blog":Ee,"/ai-hub":Ie,"/support":Re},N=new Set(Object.keys(L));function Be(){const e=window.location.hash.replace(/^#/,"");if(e&&e!=="/")return;let t=window.location.pathname||"/";t=t.replace(/\/index\.html$/i,"")||"/",t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1));const a="/".replace(/\/$/,"");if(a&&t.startsWith(a)&&(t=t.slice(a.length)||"/"),t.startsWith("/")||(t=`/${t}`),t==="/"||!N.has(t))return;const r="/".replace(/\/$/,""),i=r===""?"/":`${r}/`;window.history.replaceState(null,"",`${window.location.origin}${i}#${t}`)}function q(){Be();const e=window.location.hash.slice(1)||"/",t=e.startsWith("/")?e:"/"+e,a=L[t]||re,r=document.querySelector("#app");!L[t]?r.innerHTML=`
      <div class="app">
        <!-- Global All-Round AI Background Video Layer -->
        <video class="global-video-bg" autoplay loop muted playsinline>
          <source src="https://cdn.pixabay.com/video/2019/04/16/22888-331623910_large.mp4" type="video/mp4">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43285-large.mp4" type="video/mp4">
        </video>
        <div class="global-video-overlay"></div>

        <nav id="navigation"></nav>
        <main>
          <section id="notFound"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `:r.innerHTML=`
      <div class="app">
        <!-- Global All-Round AI Background Video Layer -->
        <video class="global-video-bg" autoplay loop muted playsinline>
          <source src="https://cdn.pixabay.com/video/2019/04/16/22888-331623910_large.mp4" type="video/mp4">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43285-large.mp4" type="video/mp4">
        </video>
        <div class="global-video-overlay"></div>

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
          <section id="blog"></section>
          <section id="ai-hub"></section>
          <section id="support"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `,Le(),Me(),a(),window.scrollTo(0,0),He(t),je(t)}function He(e){var s,n;document.querySelectorAll(".nav-link").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".nav-dropdown").forEach(o=>o.classList.remove("is-active-route"));const t=document.querySelectorAll(".nav-dropdown"),a=new Set(["/services","/shop","/development","/ai-hub"]),r=new Set(["/about","/team","/portfolio","/blog","/support"]);a.has(e)&&t[0]&&(t[0].classList.add("is-active-route"),(s=t[0].querySelector(".nav-dropdown-toggle"))==null||s.classList.add("active")),r.has(e)&&t[1]&&(t[1].classList.add("is-active-route"),(n=t[1].querySelector(".nav-dropdown-toggle"))==null||n.classList.add("active"));const i=document.querySelector(`.nav-link[href="${e}"]`);i&&i.classList.add("active")}const O={"/":"Rodstar Tech Devs - Professional Software Development","/about":"About Us | Rodstar Tech Devs","/services":"Services | Rodstar Tech Devs","/development":"Software Development | Rodstar Tech Devs","/pricing":"Pricing | Rodstar Tech Devs","/portfolio":"Portfolio | Rodstar Tech Devs","/team":"Team | Rodstar Tech Devs","/contact":"Contact | Rodstar Tech Devs","/privacy":"Privacy Policy | Rodstar Tech Devs","/terms":"Terms of Service | Rodstar Tech Devs","/shop":"Shop | Rodstar Tech Devs","/blog":"The Neural Ledger | Rodstar Tech Devs","/ai-hub":"Rodstar AI Hub | Autonomous Enterprise Intelligence","/support":"Support & Partner | Rodstar Tech Devs"};function je(e){if(!N.has(e)){document.title="Page Not Found | Rodstar Tech Devs";return}document.title=O[e]||O["/"]}window.addEventListener("hashchange",q);const P=[{element:"#navigation",title:"1. Brand & Navigation Bar",description:"Explore Rodstar Tech Devs navigation. Fast access to AI services, software development, team hub, hardware shop, and instant AI tour."},{element:"#typewriter-motto",title:"2. Next-Gen Engineering Vision",description:"We build enterprise software, high-availability web hosting, corporate emails, and bespoke AI platforms designed for scale."},{element:"#hero-ai-console",title:"3. Interactive AI Console",description:"Test live AI architectural blueprints, system health, and calculate instant deployment latency right inside our live terminal widget."},{element:".ceo-say-section",title:"4. Executive CEO Statement",description:"Hear from Rodney Gilbert (Founder & CEO) on our engineering philosophy: technology should eliminate friction and amplify growth."},{element:".testimonials-section",title:"5. Verified Client Satisfaction",description:"Read reviews from enterprise partners including Applegate Christian School, Alma Guest House, The Isle Cottages, Moussad Realty, NusuFi, ElimuNexus, and HakiAfya AI."}];let C=0,k=null,f=null,T=null;function Ge(){C=0,We(),M(C)}function We(){let e=document.querySelector(".driver-popover-overlay"),t=document.querySelector(".driver-tooltip-card");if(e&&t){k=e,f=t,k.classList.add("active"),f.style.display="block";return}k=document.createElement("div"),k.className="driver-popover-overlay active",f=document.createElement("div"),f.className="driver-tooltip-card",f.style.display="block",document.body.appendChild(k),document.body.appendChild(f),k.addEventListener("click",a=>{a.target===k&&z()})}function M(e){if(e>=P.length||e<0){z();return}const t=P[e],a=document.querySelector(t.element);T&&T.classList.remove("spotlight-active-element"),a?(a.scrollIntoView({behavior:"smooth",block:"center"}),a.classList.add("spotlight-active-element"),T=a,setTimeout(()=>{if(!document.body.contains(a))return;const r=a.getBoundingClientRect(),i=Math.min(360,window.innerWidth-32);let s=r.bottom+16,n=r.left+r.width/2-i/2;s+220>window.innerHeight&&(s=Math.max(16,r.top-230)),n<16&&(n=16),n+i>window.innerWidth-16&&(n=window.innerWidth-i-16),f.style.top=`${Math.max(20,s)}px`,f.style.left=`${n}px`,f.style.width=`${i}px`,f.style.display="block",f.innerHTML=`
        <div class="driver-tooltip-header">
          <span class="driver-tooltip-title">${t.title}</span>
          <span class="driver-step-badge">${e+1}/${P.length}</span>
        </div>
        <div class="driver-tooltip-body">${t.description}</div>
        <div class="driver-tooltip-actions">
          <button class="driver-btn-skip">Close</button>
          <button class="driver-btn-next">${e===P.length-1?"Finish Tour ✓":"Next Step →"}</button>
        </div>
      `,f.querySelector(".driver-btn-skip").addEventListener("click",z),f.querySelector(".driver-btn-next").addEventListener("click",()=>{C++,M(C)})},450)):(C++,M(C))}function z(){k&&k.classList.remove("active"),f&&(f.style.display="none"),T&&(T.classList.remove("spotlight-active-element"),T=null)}function Ue(){document.addEventListener("click",e=>{e.target.closest('[data-action="start-tour"]')&&(e.preventDefault(),Ge())})}function $e(){const e=localStorage.getItem("rodstar_theme")||"dark";e==="light"?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme"),B(e)}function B(e){document.querySelectorAll(".theme-toggle-icon").forEach(t=>{t.textContent=e==="light"?"🌙":"☀️"})}document.addEventListener("DOMContentLoaded",()=>{$e(),Ue(),"requestIdleCallback"in window?requestIdleCallback(()=>{q()},{timeout:1e3}):setTimeout(()=>{q()},100)});document.addEventListener("click",e=>{if(e.target.closest(".theme-toggle-btn")){e.preventDefault();const s=document.body.classList.toggle("light-theme")?"light":"dark";localStorage.setItem("rodstar_theme",s),B(s);return}if(e.target.closest(".mobile-menu-btn")){e.stopPropagation();const i=document.querySelector(".mobile-menu");i&&i.classList.toggle("active")}if(e.target.closest(".mobile-menu .nav-link")){const i=document.querySelector(".mobile-menu");i&&i.classList.remove("active")}});
