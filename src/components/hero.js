export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Innovative Software Solutions</h1>
          <p>We build cutting-edge web applications, mobile apps, and custom software solutions that drive business growth and digital transformation.</p>
          <div class="cta-buttons">
            <a href="#contact" class="btn btn-primary">Get Started</a>
            <a href="#portfolio" class="btn btn-outline">View Our Work</a>
          </div>
        </div>
      </div>
    </section>
  `
}