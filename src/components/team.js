export function setupTeam() {
  const team = document.querySelector('#team')
  
  team.innerHTML = `
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
  `
}