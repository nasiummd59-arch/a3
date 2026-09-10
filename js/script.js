/* ==========================================================================
   SMARTCOURSEINK - Interactive Pedagogy & Cognitive Learning Experience
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // 2. Header Scroll Shadow
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. FAQ Accordion Interaction
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Interactive Cognitive Skill & Curriculum Architect
  const domainSelect = document.getElementById('curriculum-domain');
  const paceSelect = document.getElementById('curriculum-pace');
  const modulesContainer = document.getElementById('modules-display');
  const pathTitle = document.getElementById('curriculum-path-title');
  const pathDesc = document.getElementById('curriculum-path-desc');

  const curriculumPaths = {
    'ai-systems-intensive': {
      title: 'Applied Neural Systems & Data Engineering Track',
      desc: 'Deep structural immersion into computational linear algebra, transformer architectures, and production model orchestration.',
      modules: [
        { level: 'Foundational Phase', name: 'Vector Calculus & High-Performance Python', note: 'Tensor optimizations & gradient dynamics' },
        { level: 'Core Architecture', name: 'Transformer Mechanisms & Attention Physics', note: 'Multi-head self-attention mathematical proofs' },
        { level: 'Cap-Stone Synthesis', name: 'Distributed Neural Inference Deployment', note: 'Quantization, latency minimization & edge deployment' }
      ]
    },
    'ai-systems-executive': {
      title: 'Executive AI Strategy & Systemic Transformation',
      desc: 'Strategic evaluation of enterprise machine intelligence, governance guardrails, and algorithmic competitive advantage.',
      modules: [
        { level: 'Strategic Horizon', name: 'Enterprise Neural Architecture Mapping', note: 'Evaluating ROI & legacy infrastructure integration' },
        { level: 'Governance Framework', name: 'Algorithmic Safety, Ethics & Risk Audits', note: 'Compliance with global computational standards' },
        { level: 'Executive Action', name: 'Designing Cognitive-Augmented Workflows', note: 'Leading high-velocity technical teams' }
      ]
    },
    'quantitative-intensive': {
      title: 'Advanced Mathematical Logic & Stochastic Modeling',
      desc: 'Rigorous derivation of probability distributions, Bayesian inference networks, and discrete structural optimization.',
      modules: [
        { level: 'Foundational Phase', name: 'Formal Mathematical Proofs & Discrete Sets', note: 'First-order predicate calculus & induction' },
        { level: 'Core Architecture', name: 'Markov Chains & Stochastic Differential Equations', note: 'Continuous-time random walks & Ito calculus' },
        { level: 'Cap-Stone Synthesis', name: 'Monte Carlo Numerical Simulation Engine', note: 'High-throughput quantitative risk modeling' }
      ]
    },
    'quantitative-executive': {
      title: 'Quantitative Decision Architecture for Leaders',
      desc: 'Probabilistic thinking, cognitive bias mitigation, and strategic scenario trees for high-stakes decision making.',
      modules: [
        { level: 'Mental Models', name: 'Bayesian Updating in Volatile Environments', note: 'Separating signal from systemic noise' },
        { level: 'Scenario Engines', name: 'Game-Theoretic Capital Allocation', note: 'Nash equilibrium & asymmetrical payoffs' },
        { level: 'Executive Action', name: 'Stress-Testing Organizational Resilience', note: 'Antifragile operational frameworks' }
      ]
    },
    'linguistics-intensive': {
      title: 'Computational Linguistics & Cognitive Semantics',
      desc: 'Syntactic parsing algorithms, formal grammar trees, and vector semantic embeddings in biological and artificial minds.',
      modules: [
        { level: 'Foundational Phase', name: 'Generative Chomskyan Syntax & Phonology', note: 'Phrase structure rules & tree parsing' },
        { level: 'Core Architecture', name: 'Distributed Vector Semantics & Word Embeddings', note: 'Cosine similarity in high-dimensional manifolds' },
        { level: 'Cap-Stone Synthesis', name: 'Cross-Lingual Cognitive Translation Systems', note: 'Zero-shot cross-lingual transfer learning' }
      ]
    },
    'linguistics-executive': {
      title: 'Persuasive Rhetoric & Strategic Communication',
      desc: 'Classical Aristotelian argumentation, linguistic framing psychology, and executive negotiation architectures.',
      modules: [
        { level: 'Rhetorical Form', name: 'Cognitive Framing & Metaphorical Resonance', note: 'How language anchors perceptual paradigms' },
        { level: 'Dialectical Craft', name: 'High-Stakes Negotiation Architecture', note: 'Principled bargaining & impasse resolution' },
        { level: 'Executive Action', name: 'Delivering Monumental Keynote Orations', note: 'Vocal cadences & rhetorical structuring' }
      ]
    }
  };

  function updateCurriculum() {
    if (!domainSelect || !paceSelect || !modulesContainer) return;
    const key = `${domainSelect.value}-${paceSelect.value}`;
    const path = curriculumPaths[key] || curriculumPaths['ai-systems-intensive'];

    if (pathTitle) pathTitle.textContent = path.title;
    if (pathDesc) pathDesc.textContent = path.desc;

    modulesContainer.innerHTML = path.modules.map(m => `
      <div class="module-card">
        <span class="module-tag">${m.level}</span>
        <h4>${m.name}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">${m.note}</p>
      </div>
    `).join('');
  }

  if (domainSelect && paceSelect) {
    domainSelect.addEventListener('change', updateCurriculum);
    paceSelect.addEventListener('change', updateCurriculum);
    updateCurriculum();
  }

  // 5. Interactive Study Method Harmonizer
  const modalitySelect = document.getElementById('harmonizer-modality');
  const swatchesContainer = document.getElementById('study-swatches-display');
  const modalityExplanation = document.getElementById('modality-explanation');

  const studyModalities = {
    'visual': {
      desc: 'Visual-spatial learners accelerate comprehension by translating abstract symbolic concepts into high-density conceptual mind maps and flow diagrams.',
      swatches: [
        { name: 'Hierarchical Concept Mapping', role: 'Structural Synthesis' },
        { name: 'Dual-Coding Sketchnoting', role: 'Memory Encoding' },
        { name: 'Spatial Matrix Grids', role: 'Comparative Logic' }
      ]
    },
    'verbal': {
      desc: 'Verbal-linguistic scholars thrive through vocalized articulation, self-explanation dialogues, and narrative semantic summarization.',
      swatches: [
        { name: 'Feynman Technique Dialectic', role: 'Simplification Test' },
        { name: 'Auditory Flashcard Retrieval', role: 'Active Recall' },
        { name: 'Socratic Dialogue Pods', role: 'Collaborative Debate' }
      ]
    },
    'kinesthetic': {
      desc: 'Kinesthetic-logic scholars master difficult material through hands-on sandboxed experimentation, live coding, and physical problem-set derivation.',
      swatches: [
        { name: 'Interactive Sandboxed Labs', role: 'Practical Execution' },
        { name: 'First-Principles Problem Sets', role: 'Derivation Fluency' },
        { name: 'Live Case Simulations', role: 'Real-World Stress Test' }
      ]
    }
  };

  function updateStudyModality() {
    if (!modalitySelect || !swatchesContainer) return;
    const item = studyModalities[modalitySelect.value] || studyModalities['visual'];
    if (modalityExplanation) modalityExplanation.textContent = item.desc;

    swatchesContainer.innerHTML = item.swatches.map(s => `
      <div class="swatch-study">
        <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--primary-blue); font-weight: 700;">${s.role}</span>
        <h4>${s.name}</h4>
      </div>
    `).join('');
  }

  if (modalitySelect) {
    modalitySelect.addEventListener('change', updateStudyModality);
    updateStudyModality();
  }

  // 6. Cookie Consent
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookieBtn = document.getElementById('accept-cookies');
  const declineCookieBtn = document.getElementById('decline-cookies');

  if (cookieBanner) {
    if (!localStorage.getItem('smartcourseink_cookies_accepted')) {
      setTimeout(() => {
        cookieBanner.classList.add('active');
      }, 1000);
    }

    if (acceptCookieBtn) {
      acceptCookieBtn.addEventListener('click', () => {
        localStorage.setItem('smartcourseink_cookies_accepted', 'true');
        cookieBanner.classList.remove('active');
      });
    }

    if (declineCookieBtn) {
      declineCookieBtn.addEventListener('click', () => {
        localStorage.setItem('smartcourseink_cookies_accepted', 'declined');
        cookieBanner.classList.remove('active');
      });
    }
  }

  // 7. Form Handlers
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : 'Submit';

      if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enrolling...';
        btn.disabled = true;
      }

      setTimeout(() => {
        alert('Thank you for connecting with SmartCourseInk. Our Academic Admissions Directorate will transmit your curriculum syllabus access shortly.');
        form.reset();
        if (btn) {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
      }, 700);
    });
  });
});
