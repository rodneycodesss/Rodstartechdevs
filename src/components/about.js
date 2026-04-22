export function setupAbout() {
  const about = document.querySelector('#about')
  
  about.innerHTML = `
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/src/public/boardroom.png') center/cover; padding: 12rem 0 6rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); margin-top: -5rem;">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: 3.5rem; margin-bottom: 1rem; color: white !important;">About Rodstar Tech</h2>
        <p class="section-subtitle fade-in-up" style="font-size: 1.25rem;">We are a team of passionate developers and designers committed to delivering exceptional digital solutions.</p>
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
            <img src="/src/public/boardroom.png" alt="Engineering Boardroom" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 123, 255, 0.2); border: 1px solid rgba(255,255,255,0.1); width: 100%; height: auto; object-fit: cover; aspect-ratio: 4/3;"/>
          </div>
        </div>
      </div>
    </section>
  `
}