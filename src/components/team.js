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
            <h3>Roderick Star</h3>
            <p class="role">CEO & Lead Developer</p>
            <p>Full-stack developer with expertise in modern web technologies and team leadership. Passionate about creating innovative solutions.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">SM</div>
            <h3>Sarah Mitchell</h3>
            <p class="role">Senior Frontend Developer</p>
            <p>Specializes in React, Vue.js, and modern CSS frameworks. Creates beautiful and responsive user interfaces.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">MJ</div>
            <h3>Michael Johnson</h3>
            <p class="role">Backend Developer</p>
            <p>Expert in Node.js, Python, and database design. Builds robust and scalable server-side applications.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">EL</div>
            <h3>Emily Lee</h3>
            <p class="role">UI/UX Designer</p>
            <p>Creates user-centered designs that balance aesthetics with functionality. Expert in design systems and user research.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">DW</div>
            <h3>David Wilson</h3>
            <p class="role">Mobile Developer</p>
            <p>Specializes in React Native and Flutter development. Creates high-performance mobile applications for iOS and Android.</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">AC</div>
            <h3>Anna Chen</h3>
            <p class="role">DevOps Engineer</p>
            <p>Expert in cloud infrastructure, CI/CD pipelines, and deployment automation. Ensures reliable and scalable deployments.</p>
          </div>
        </div>
      </div>
    </section>
  `
}