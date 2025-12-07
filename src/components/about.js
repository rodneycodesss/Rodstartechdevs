export function setupAbout() {
  const about = document.querySelector('#about')
  
  about.innerHTML = `
    <section class="about section">
      <div class="container">
        <h2 class="section-title">About Rodstar Tech Devs</h2>
        <p class="section-subtitle">We are a team of passionate developers and designers committed to delivering exceptional digital solutions.</p>
        
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
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team working on software development" />
          </div>
        </div>
      </div>
    </section>
  `
}