// ===================== RENDER =====================

function renderProjects() {
  const c = document.getElementById('projectsList');
  if (!c) return;
  PROJECTS.forEach(p => {
    const el = document.createElement('a');
    el.href = p.link; el.target = '_blank'; el.rel = 'noopener';
    el.className = 'project-item';
    el.innerHTML = `
      <div class="project-left">
        <div class="project-emoji">${p.emoji}</div>
        <span class="project-type-tag">${p.tag}</span>
      </div>
      <div class="project-info">
        <div class="project-header">
          <div class="project-name">${p.name}</div>
          <span class="project-date">${p.date}</span>
        </div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="project-arrow">↗</div>`;
    c.appendChild(el);
  });
}

// ── INVERTED PYRAMID — category-aware ──────────────────
function renderTechPyramid() {
  const pyramid = document.getElementById('techPyramid');
  if (!pyramid) return;

  // Flatten all items while keeping category info
  const allItems = [];
  TECH_CATEGORIES.forEach(cat => {
    cat.items.forEach(item => allItems.push({ ...item, catLabel: cat.label, catColor: cat.color }));
  });

  // Build pyramid rows: 7, 6, 5, 4, 3, 2, 1
  const rowSizes = [7, 6, 5, 4, 3, 2, 1];
  let idx = 0;
  rowSizes.forEach(size => {
    if (idx >= allItems.length) return;
    const slice = allItems.slice(idx, idx + size);
    idx += size;
    if (slice.length === 0) return;
    const rowEl = document.createElement('div');
    rowEl.className = 'tech-row';
    slice.forEach(tech => {
      const item = document.createElement('div');
      item.className = 'tech-item';
      item.title = `${tech.name} · ${tech.catLabel}`;
      item.style.borderBottom = `2px solid ${tech.catColor}55`;
      item.innerHTML = `
        <img class="tech-logo" src="${tech.logo}" alt="${tech.name}" onerror="this.style.display='none'">
        <span class="tech-name">${tech.name}</span>`;
      rowEl.appendChild(item);
    });
    pyramid.appendChild(rowEl);
  });

  // Category legend
  const legend = document.createElement('div');
  legend.className = 'tech-legend';
  TECH_CATEGORIES.forEach(cat => {
    legend.innerHTML += `<span class="tech-legend-item">
      <span class="tech-legend-dot" style="background:${cat.color}"></span>${cat.label}
    </span>`;
  });
  pyramid.appendChild(legend);
}

function renderEducation() {
  const c = document.getElementById('eduList');
  if (!c) return;
  EDUCATION.forEach((edu, i) => {
    const el = document.createElement('div');
    el.className = 'edu-item' + (edu.current ? ' edu-current' : '');
    el.innerHTML = `
      <div class="edu-icon-wrap">
        <div class="edu-icon" style="background:${edu.color}22;border-color:${edu.color}55">${edu.icon}</div>
        ${i < EDUCATION.length-1 ? '<div class="edu-line"></div>' : ''}
      </div>
      <div class="edu-body">
        <div class="edu-meta">
          <span class="edu-period">${edu.period}</span>
          ${edu.current ? '<span class="edu-badge">currently here 📍</span>' : ''}
        </div>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-school">${edu.school} · ${edu.location}</div>
        <div class="edu-highlights">${edu.highlights.map(h=>`<span class="edu-chip">${h}</span>`).join('')}</div>
      </div>`;
    c.appendChild(el);
  });
}

function renderTraining() {
  const c = document.getElementById('trainingList');
  if (!c) return;
  TRAINING.forEach(t => {
    const el = document.createElement('div');
    el.className = 'training-item';
    el.innerHTML = `
      <div class="training-accent-bar" style="background:${t.gradient}"></div>
      <div class="training-icon" style="background:${t.color}22;border:1px solid ${t.color}44;color:${t.color}">${t.icon}</div>
      <div class="training-body">
        <div class="training-meta">
          <span class="training-period">${t.period}</span>
          ${t.badge ? `<span class="training-badge" style="color:${t.color};border-color:${t.color}44;background:${t.color}15">${t.badge} 🆕</span>` : ''}
        </div>
        <div class="training-title">${t.title}</div>
        <div class="training-org">${t.org}</div>
        <ul class="training-points">${t.points.map(p=>`<li>${p}</li>`).join('')}</ul>
        <button class="cert-preview-btn training-prev-btn" type="button"><i class="fas fa-eye"></i> preview cert</button>
      </div>`;
    el.querySelector('.training-prev-btn').addEventListener('click', e => {
      e.stopPropagation();
      openCertModal(t);
    });
    c.appendChild(el);
  });
}

function renderCertificates() {
  const c = document.getElementById('certList');
  if (!c) return;
  CERTIFICATES.forEach(cert => {
    const el = document.createElement('div');
    el.className = 'cert-item';
    el.innerHTML = `
      <div class="cert-glow-bar" style="background:${cert.gradient}"></div>
      <div class="cert-emoji">${cert.emoji}</div>
      <div class="cert-info">
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-skills">${cert.skills.map(s=>`<span class="cert-skill-chip">${s}</span>`).join('')}</div>
      </div>
      <div class="cert-right">
        <div class="cert-year">${cert.year}</div>
        <button class="cert-preview-btn" type="button"><i class="fas fa-eye"></i> preview</button>
      </div>`;
    el.querySelector('.cert-preview-btn').addEventListener('click', e => {
      e.stopPropagation();
      openCertModal(cert);
    });
    c.appendChild(el);
  });
}

function openCertModal(item) {
  const modal   = document.getElementById('certModal');
  const content = document.getElementById('certPreviewContent');
  const hasImg  = item.previewImg;

  // ALWAYS show all metadata + image below (if set)
  content.innerHTML = `
    <div class="cert-card-preview" style="background:${item.previewBg || '#f5f5f5'}">
      <div class="cert-card-header" style="background:${item.gradient}">
        <span class="cert-card-emoji">${item.emoji}</span>
        <div>
          <div class="cert-card-title">${item.name || item.title}</div>
          <div class="cert-card-issuer">${item.issuer || item.org}</div>
        </div>
      </div>
      <div class="cert-card-body">
        <div class="cert-card-label">certificate of completion</div>
        <div class="cert-card-recipient">Anisha Kumari</div>
        <div class="cert-card-desc">has successfully completed</div>
        <div class="cert-card-course">${item.name || item.title}</div>
        <div class="cert-card-footer">
          <span>Issued: ${item.year || item.period}</span>
          <span style="color:${item.color};font-weight:700">${item.issuer || item.org}</span>
        </div>
        <div class="cert-skills-preview">
          ${(item.skills || []).map(s =>
            `<span class="cert-skill-chip" style="border-color:${item.color};color:${item.color}">${s}</span>`
          ).join('')}
        </div>
        ${hasImg
          ? `<img src="${item.previewImg}" class="cert-real-img" alt="Certificate">`
          : `<p class="cert-add-hint">💡 set <code>previewImg: "images/certs/yourfile.jpg"</code> in data.js to show real cert</p>`
        }
      </div>
    </div>`;
  modal.classList.add('open');
}

function renderContact() {
  const c = document.getElementById('contactCards');
  if (!c) return;
  CONTACT_CARDS.forEach(card => {
    const a = document.createElement('a');
    a.href = card.href;
    a.target = card.href.startsWith('http') ? '_blank' : '_self';
    a.className = 'contact-card';
    a.innerHTML = `
      <div class="cc-icon" style="color:${card.color}"><i class="${card.icon}"></i></div>
      <div class="cc-info">
        <span class="cc-label">${card.label}</span>
        <span class="cc-value">${card.value}</span>
      </div>
      <div class="cc-arrow">↗</div>`;
    c.appendChild(a);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderTechPyramid();
  renderEducation();
  renderTraining();
  renderCertificates();
  renderContact();
});
