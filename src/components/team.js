export function setupTeam() {
  const team = document.querySelector('#team')
  
  team.innerHTML = `
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
                <img src="/ASTRALIA.jpg" alt="Astralia Akinyi" loading="lazy">
              </div>
              <h3>Astralia Akinyi</h3>
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
              <div class="member-avatar">
                <img src="/SWEENEY.jpg" alt="Sweeney Greg" loading="lazy">
              </div>
              <h3>Sweeney Greg</h3>
              <p class="role">Backend Developer</p>
              <p>Specializing in secure databases, server-side algorithms, and third-party API integrations. Passionate about building robust backend infrastructure that scales.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">
                <img src="/DAPHNY.jpg" alt="Daphny Kemi" loading="lazy">
              </div>
              <h3>Daphny Kemi</h3>
              <p class="role">Digital Marketing Intern</p>
              <p>Assisting in marketing outreach, content strategies, and social media enhancement. Eager to drive brand awareness and digital growth.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
}
