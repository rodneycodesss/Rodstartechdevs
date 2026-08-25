import './styles/ai-hub.css'

export function setupAiHub() {
  const aiHubContainer = document.querySelector('#ai-hub')
  if (!aiHubContainer) return

  aiHubContainer.innerHTML = `
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
  `

  setupSandboxWidget()
}

function setupSandboxWidget() {
  const btns = document.querySelectorAll('#ai-sandbox-widget .sandbox-btn')
  const outputLog = document.querySelector('#sandbox-output-log')

  const FLOWS_DATA = {
    'support': {
      log: [
        '<div style="color: #64748B;">// Processing: Customer Support Agent Workflow...</div>',
        '<div style="color: #F8FAFC;">Step 1: Parse User Natural Language Intent...</div>',
        '<div style="color: #38BDF8;">Step 2: Query Knowledge Vector Base (RAG)...</div>',
        '<div style="color: #00D4FF; font-weight: 600;">✔ Auto-Resolution Generated [Latency: 14.2ms]</div>'
      ]
    },
    'finance': {
      log: [
        '<div style="color: #64748B;">// Processing: Financial Risk Assessment Pipeline...</div>',
        '<div style="color: #F8FAFC;">Step 1: Sanitize Ephemeral Payload Data...</div>',
        '<div style="color: #38BDF8;">Step 2: Run Fraud Vector Classifier...</div>',
        '<div style="color: #27C93F; font-weight: 600;">✔ Risk Score Calculated: 0.02 (APPROVED) [Latency: 18.5ms]</div>'
      ]
    },
    'school': {
      log: [
        '<div style="color: #64748B;">// Processing: School Portal Fee Automator...</div>',
        '<div style="color: #F8FAFC;">Step 1: Sync Applegate Student Ledger...</div>',
        '<div style="color: #38BDF8;">Step 2: Verify M-Pesa / Bank Webhook Transaction...</div>',
        '<div style="color: #00D4FF; font-weight: 600;">✔ Digital Receipt Issued & Logged [Latency: 11.8ms]</div>'
      ]
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      const flowKey = btn.getAttribute('data-flow')
      const data = FLOWS_DATA[flowKey]

      if (outputLog && data) {
        outputLog.innerHTML = `<div style="color: #64748B;">// Initializing Mesh Connection...</div>`
        setTimeout(() => {
          outputLog.innerHTML = data.log.join('')
        }, 250)
      }
    })
  })
}
