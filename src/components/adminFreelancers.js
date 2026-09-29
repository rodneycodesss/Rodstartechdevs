import './styles/freelancer.css'
import {
  getCurrentUser,
  loginAsDemoRole,
  getStore,
  updateApplicationStatus,
  createOpportunity
} from '../services/freelancerStore.js'
import { getAuditLogs } from '../services/auditLogger.js'

export function setupAdminFreelancers() {
  const container = document.querySelector('#admin-freelancers-container')
  if (!container) return

  // Ensure admin user session
  let user = getCurrentUser()
  if (!user || (user.role !== 'Administrator' && user.role !== 'Super Administrator' && user.role !== 'Recruiter')) {
    user = loginAsDemoRole('Administrator')
  }

  let activeTab = 'applications' // applications, freelancers, opportunities, payments, partners, audit
  let statusFilter = 'All'
  let searchQuery = ''

  function render() {
    const store = getStore()
    const auditLogs = getAuditLogs()

    container.innerHTML = `
      <div class="section container">
        <!-- ADMIN HEADER -->
        <div class="glass-panel" style="padding: 2rem; margin-bottom: 2rem; border-color: #00D4FF !important;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div class="ai-badge-pill" style="background: rgba(0, 212, 255, 0.15); color: #00D4FF;">
                <span class="pulse-dot"></span> Rodstar AI Administrative System
              </div>
              <h1 style="font-size: 2rem; font-weight: 800; color: #ffffff;">Freelancer Network Operations</h1>
              <p style="font-size: 0.9rem; color: var(--text-light);">
                Operator: <strong style="color: #00D4FF;">${user.name}</strong> (${user.role})
              </p>
            </div>

            <div style="display: flex; gap: 0.8rem;">
              <a href="#/freelancer/login" class="btn btn-outline" style="padding: 0.4rem 1rem; font-size: 0.82rem; min-height: 36px;">
                Switch Role / Logout
              </a>
            </div>
          </div>
        </div>

        <!-- ADMIN TAB BAR -->
        <div class="track-filter-bar" style="margin-bottom: 2rem;">
          <button type="button" class="track-filter-btn ${activeTab === 'applications' ? 'active' : ''}" data-tab="applications">
            📥 Applications (${store.applications.length})
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'freelancers' ? 'active' : ''}" data-tab="freelancers">
            👥 Talent Directory
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'opportunities' ? 'active' : ''}" data-tab="opportunities">
            💼 Manage Opportunities (${store.opportunities.length})
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'payments' ? 'active' : ''}" data-tab="payments">
            💳 Payment Audits (KSh 1,500)
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'partners' ? 'active' : ''}" data-tab="partners">
            🏢 Hiring Partners
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'audit' ? 'active' : ''}" data-tab="audit">
            🛡️ Security Audit Logs (${auditLogs.length})
          </button>
        </div>

        <!-- MAIN PANEL -->
        <div class="glass-panel" style="padding: 2rem;">
          ${renderAdminTab(store, auditLogs)}
        </div>
      </div>
    `

    attachEvents(store)
  }

  function renderAdminTab(store, auditLogs) {
    if (activeTab === 'applications') {
      const filteredApps = store.applications.filter(a => {
        const matchesStatus = statusFilter === 'All' || a.networkStatus === statusFilter
        const matchesSearch = searchQuery === '' || 
          a.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.id.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesStatus && matchesSearch
      })

      return `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.4rem; color: #00D4FF;">Freelancer Applications</h3>
          
          <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <input type="text" id="admin-search-input" placeholder="Search applicant name, email, ID..." value="${searchQuery}" style="width: 250px; padding: 0.5rem 0.9rem;">
            <select id="admin-status-filter" style="width: auto; padding: 0.5rem 0.9rem;">
              <option value="All">All Statuses</option>
              <option value="Training Required">Training Required</option>
              <option value="Training Active">Training Active</option>
              <option value="Assessment Pending">Assessment Pending</option>
              <option value="Talent Network">Talent Network</option>
            </select>
          </div>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>App ID</th>
                <th>Applicant</th>
                <th>Primary Track</th>
                <th>KSh 1,500 Fee</th>
                <th>Training %</th>
                <th>Score</th>
                <th>Network Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${filteredApps.length === 0 ? `
                <tr><td colspan="8" style="text-align: center; padding: 2rem;">No applications found matching query.</td></tr>
              ` : filteredApps.map(app => `
                <tr>
                  <td style="font-family: monospace; color: #00D4FF; font-weight: 700;">${app.id}</td>
                  <td>
                    <strong>${app.fullName}</strong><br>
                    <span style="font-size: 0.78rem; color: var(--text-light);">${app.email} (${app.country})</span>
                  </td>
                  <td>${app.primaryPosition}</td>
                  <td>
                    <span class="status-badge ${app.paymentStatus === 'Paid' ? 'status-opportunities' : 'status-soon'}">
                      ${app.paymentStatus}
                    </span>
                  </td>
                  <td>${app.trainingProgress}%</td>
                  <td>${app.assessmentCompleted ? app.assessmentScore + '%' : 'Pending'}</td>
                  <td>
                    <span class="status-badge ${getNetworkStatusClass(app.networkStatus)}">${app.networkStatus}</span>
                  </td>
                  <td>
                    <select class="change-status-select" data-app-id="${app.id}" style="padding: 0.3rem; font-size: 0.8rem; width: auto;">
                      <option value="">Update Status...</option>
                      <option value="Training Active">Set Training Active</option>
                      <option value="Assessment Pending">Set Assessment Pending</option>
                      <option value="Talent Network">Verify for Talent Network</option>
                      <option value="Rejected">Reject</option>
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }

    if (activeTab === 'freelancers') {
      const verifiedTalent = store.applications.filter(a => a.paymentStatus === 'Paid')

      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 1.5rem;">Verified Talent Directory</h3>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Primary Role</th>
                <th>Skills</th>
                <th>Experience Level</th>
                <th>Assessment</th>
                <th>CV File</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${verifiedTalent.length === 0 ? `
                <tr><td colspan="7" style="text-align: center; padding: 2rem;">No talent candidates in pool.</td></tr>
              ` : verifiedTalent.map(cand => `
                <tr>
                  <td><strong>${cand.fullName}</strong><br><span style="font-size:0.75rem; color:var(--text-light);">${cand.city}, ${cand.country}</span></td>
                  <td style="color: #00D4FF;">${cand.primaryPosition}</td>
                  <td><div class="skill-chips">${(cand.skills || []).slice(0, 3).map(s => `<span class="skill-chip">${s}</span>`).join('')}</div></td>
                  <td>${cand.experienceLevel}</td>
                  <td>${cand.assessmentCompleted ? cand.assessmentScore + '%' : 'In Progress'}</td>
                  <td><span style="font-size: 0.78rem; font-family: monospace;">${cand.cvFileName}</span></td>
                  <td><span class="status-badge status-opportunities">${cand.networkStatus}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }

    if (activeTab === 'opportunities') {
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <h3 style="font-size: 1.4rem; color: #00D4FF;">Partner Remote Opportunities</h3>
          <button type="button" class="btn btn-primary" id="btn-open-create-opp">
            + Post Verified Opportunity
          </button>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Partner Entity</th>
                <th>Confidential</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${store.opportunities.map(opp => `
                <tr>
                  <td style="font-family: monospace; color: #00D4FF;">${opp.id}</td>
                  <td><strong>${opp.title}</strong></td>
                  <td>${opp.category}</td>
                  <td>${opp.partnerName}</td>
                  <td>${opp.isConfidential ? '🔒 Yes' : '🌐 Public'}</td>
                  <td>${opp.deadline}</td>
                  <td><span class="status-badge status-opportunities">${opp.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- CREATE OPP FORM MODAL -->
        <div class="position-modal-overlay" id="create-opp-modal">
          <div class="position-modal-content" style="max-width: 600px;">
            <h3 style="color: #00D4FF; margin-bottom: 1.2rem;">Post New Verified Opportunity</h3>
            <form id="create-opp-form">
              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.82rem; color: var(--text-light); margin-bottom: 0.3rem;">Opportunity Title *</label>
                <input type="text" id="opp-title" required placeholder="e.g. Generative AI Engineer">
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.82rem; color: var(--text-light); margin-bottom: 0.3rem;">Category</label>
                <input type="text" id="opp-category" value="AI & Machine Learning" required>
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.82rem; color: var(--text-light); margin-bottom: 0.3rem;">Partner Name</label>
                <input type="text" id="opp-partner" value="TechDev Partner" required>
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-light); cursor: pointer;">
                  <input type="checkbox" id="opp-confidential" checked style="width: auto;">
                  <span>Keep Partner Confidential ("Confidential Rodstar AI Partner")</span>
                </label>
              </div>

              <div style="margin-bottom: 1.2rem;">
                <label style="display: block; font-size: 0.82rem; color: var(--text-light); margin-bottom: 0.3rem;">Description & Requirements</label>
                <textarea id="opp-desc" rows="3" required placeholder="Project details..."></textarea>
              </div>

              <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button type="button" class="btn btn-outline" id="close-opp-modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Publish Opportunity</button>
              </div>
            </form>
          </div>
        </div>
      `
    }

    if (activeTab === 'payments') {
      const payments = store.payments.length > 0 ? store.payments : [
        { id: 'PAY-101', transactionRef: 'RSTAR-PAY-88219', applicantName: 'Alex Rodstar Candidate', amount: 1500, currency: 'KSh', status: 'Paid', paymentProvider: 'Safaricom M-Pesa', timestamp: new Date().toISOString() }
      ]

      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 1.5rem;">KSh 1,500 Payment Transaction Audit Logs</h3>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Transaction Ref</th>
                <th>Applicant</th>
                <th>Amount</th>
                <th>Provider</th>
                <th>Timestamp</th>
                <th>Server Verified</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${payments.map(pay => `
                <tr>
                  <td style="font-family: monospace; color: #27C93F; font-weight: 700;">${pay.transactionRef}</td>
                  <td><strong>${pay.applicantName || 'Applicant'}</strong></td>
                  <td>${pay.amount} ${pay.currency}</td>
                  <td>${pay.paymentProvider}</td>
                  <td style="font-size: 0.8rem; color: var(--text-light);">${new Date(pay.timestamp).toLocaleString()}</td>
                  <td><span style="color: #27C93F;">✓ Webhook Verified</span></td>
                  <td><span class="status-badge status-opportunities">${pay.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }

    if (activeTab === 'partners') {
      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 1.5rem;">Managed Hiring Partners</h3>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Partner Entity</th>
                <th>Country / Region</th>
                <th>Industry</th>
                <th>Privacy Setting</th>
                <th>Opportunity Access</th>
              </tr>
            </thead>
            <tbody>
              ${store.partners.map(p => `
                <tr>
                  <td><strong>${p.name}</strong></td>
                  <td>${p.country}</td>
                  <td>${p.industry}</td>
                  <td>${p.isConfidential ? '🔒 Confidential' : '🌐 Public'}</td>
                  <td><span style="color:#27C93F;">Active</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }

    if (activeTab === 'audit') {
      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 1.5rem;">System Security Audit Log</h3>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Event Type</th>
                <th>User ID</th>
                <th>Role</th>
                <th>Event Details</th>
              </tr>
            </thead>
            <tbody>
              ${auditLogs.map(log => `
                <tr>
                  <td style="font-size: 0.78rem; font-family: monospace; color: var(--text-light);">${new Date(log.timestamp).toLocaleString()}</td>
                  <td style="color: #00D4FF; font-weight: 700;">${log.eventType}</td>
                  <td style="font-family: monospace;">${log.userId}</td>
                  <td>${log.userRole}</td>
                  <td style="font-size: 0.8rem; font-family: monospace;">${JSON.stringify(log.details)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }
  }

  function getNetworkStatusClass(status) {
    if (status === 'Talent Network') return 'status-opportunities'
    if (status === 'Training Active') return 'status-training'
    if (status === 'Assessment Pending') return 'status-talent'
    return 'status-soon'
  }

  function attachEvents(store) {
    container.querySelectorAll('.track-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab')
        render()
      })
    })

    // Search and status filter
    container.querySelector('#admin-search-input')?.addEventListener('input', e => {
      searchQuery = e.target.value
      render()
    })

    container.querySelector('#admin-status-filter')?.addEventListener('change', e => {
      statusFilter = e.target.value
      render()
    })

    // Change status select
    container.querySelectorAll('.change-status-select').forEach(sel => {
      sel.addEventListener('change', e => {
        const appId = sel.getAttribute('data-app-id')
        const newStatus = e.target.value
        if (newStatus && appId) {
          updateApplicationStatus(appId, newStatus)
          alert(`Application ${appId} status updated to: ${newStatus}`)
          render()
        }
      })
    })

    // Create Opportunity Modal
    const oppModal = container.querySelector('#create-opp-modal')
    container.querySelector('#btn-open-create-opp')?.addEventListener('click', () => {
      if (oppModal) oppModal.classList.add('active')
    })
    container.querySelector('#close-opp-modal')?.addEventListener('click', () => {
      if (oppModal) oppModal.classList.remove('active')
    })

    const createOppForm = container.querySelector('#create-opp-form')
    if (createOppForm) {
      createOppForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const title = container.querySelector('#opp-title').value
        const category = container.querySelector('#opp-category').value
        const partnerName = container.querySelector('#opp-partner').value
        const isConfidential = container.querySelector('#opp-confidential').checked
        const description = container.querySelector('#opp-desc').value

        createOpportunity({
          title,
          category,
          partnerName,
          isConfidential,
          description
        })

        alert('Verified Remote Opportunity Published Successfully!')
        if (oppModal) oppModal.classList.remove('active')
        render()
      })
    }
  }

  render()
}
