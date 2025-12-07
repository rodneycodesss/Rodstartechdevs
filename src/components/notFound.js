export function setupNotFound() {
  const notFound = document.querySelector('#notFound')
  
  if (!notFound) return
  
  notFound.innerHTML = `
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
  `
}
