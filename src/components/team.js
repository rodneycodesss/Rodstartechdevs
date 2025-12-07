export function setupTeam() {
  const team = document.querySelector('#team')
  
  team.innerHTML = `
    <section class="team section">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <p class="section-subtitle">Our talented team of developers, designers, and project managers are here to bring your vision to life.</p>
        
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">RS</div>
            <h3>Rodney Gilbert</h3>
            <p class="role">CEO & Lead Developer</p>
            <p>Full-stack developer with expertise in modern web technologies and team leadership. Passionate about creating innovative solutions.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">SM</div>
            <h3>Eddy Frank</h3>
            <p class="role">Senior Developer & Designer</p>
            <p>Specializes in React, Vue.js, backend development, and modern CSS frameworks. Creates beautiful and responsive user interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  `
}