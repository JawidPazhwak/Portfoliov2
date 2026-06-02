/**
 * Portfolio — Interactive JavaScript
 * Renders all content from CONFIG, then initializes animations & interactivity.
 */

(function () {
    'use strict';

    // ─── SVG ICON LIBRARY (reusable) ───────────────────────────────────────────
    const ICONS = {
        code: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-icon)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>',
        server: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-icon)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
        brain: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-icon)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92L12 10V8a2 2 0 1 0-2-2H8a4 4 0 0 1 4-4z"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/><rect x="4" y="11" width="16" height="10" rx="2"/></svg>',
        cloud: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-icon)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
        cert: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-icon)" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        github: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        github_sm: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        linkedin: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        twitter: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        instagram: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
        dribbble: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.815zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zm7.56-7.872c.282.39 2.145 2.906 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.868 3.39c-.215.285-1.91 2.503-5.714 4.03.247.5.487 1.012.706 1.53.076.178.15.356.22.532 3.407-.43 6.793.26 7.127.34-.023-2.375-.873-4.56-2.34-6.44z"/></svg>',
        external: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
        mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
        location: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        send: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // RENDERER — Populates HTML from CONFIG
    // ═══════════════════════════════════════════════════════════════════════════
    const Renderer = {
        init() {
            this.renderMeta();
            this.renderHero();
            this.renderAbout();
            this.renderSkills();
            this.renderProjects();
            this.renderEducation();
            this.renderCertifications();
            this.renderExperience();
            this.renderContact();
            this.renderFooter();
        },

        renderMeta() {
            document.getElementById('page-title').textContent = CONFIG.site.title;
            document.getElementById('meta-description').setAttribute('content', CONFIG.site.description);
            document.getElementById('nav-logo-text').textContent = CONFIG.site.logo;
        },

        renderHero() {
            document.getElementById('hero-badge-text').textContent = CONFIG.hero.badgeText;
            document.getElementById('hero-greeting').textContent = CONFIG.hero.greeting;
            document.getElementById('hero-name').textContent = CONFIG.hero.name;
            document.getElementById('hero-description').textContent = CONFIG.hero.description;

            const statsEl = document.getElementById('hero-stats');
            statsEl.innerHTML = CONFIG.hero.stats.map(s => `
                <div class="hero-stat">
                    <span class="hero-stat-number" data-target="${s.number}">0</span><span class="hero-stat-plus">${s.suffix}</span>
                    <span class="hero-stat-label">${s.label}</span>
                </div>
            `).join('');
        },

        renderAbout() {
            const el = document.getElementById('about-content');
            const paragraphs = CONFIG.about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join('');
            const details = CONFIG.about.details.map(d => `
                <div class="about-detail">
                    <span class="about-detail-icon">${d.icon}</span>
                    <span>${d.text}</span>
                </div>
            `).join('');

            el.innerHTML = `
                <p class="about-lead">${CONFIG.about.leadText}</p>
                ${paragraphs}
                <div class="about-details">${details}</div>
            `;
        },

        renderSkills() {
            const grid = document.getElementById('skills-grid');
            grid.innerHTML = CONFIG.skills.map((cat, i) => {
                const items = cat.items.map(s => `
                    <div class="skill-item">
                        <span class="skill-name">${s.name}</span>
                        <div class="skill-bar"><div class="skill-bar-fill" data-width="${s.level}"></div></div>
                    </div>
                `).join('');

                const isEmoji = cat.icon.match(/[\p{Emoji}]/u);
                const iconHtml = ICONS[cat.icon] ? ICONS[cat.icon] : (isEmoji ? `<span style="font-size: 1.8rem; line-height: 1;">${cat.icon}</span>` : ICONS.code);

                return `
                    <div class="glass-card tilt-card skill-card reveal" data-delay="${i}">
                        <div class="skill-card-glow" aria-hidden="true"></div>
                        <div class="skill-card-icon">${iconHtml}</div>
                        <h3 class="skill-card-title">${cat.title}</h3>
                        <div class="skill-list">${items}</div>
                    </div>
                `;
            }).join('');
        },

        renderProjects() {
            const grid = document.getElementById('projects-grid');
            grid.innerHTML = CONFIG.projects.map((p, i) => {
                const tags = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
                return `
                    <div class="glass-card tilt-card project-card reveal" data-delay="${i}">
                        <div class="project-image">
                            <div class="project-image-placeholder">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            </div>
                            <div class="project-overlay">
                                <a href="${p.live || p.github || '#'}" class="btn btn-primary btn-sm" target="_blank" rel="noopener" aria-label="View ${p.title}">
                                    <span>View Project</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                                </a>
                            </div>
                        </div>
                        <div class="project-content">
                            <div class="project-tags">${tags}</div>
                            <h3 class="project-title">${p.title}</h3>
                            <p class="project-description">${p.description}</p>
                            <div class="project-links">
                                ${p.github ? `<a href="${p.github}" class="project-link" target="_blank" rel="noopener" aria-label="${p.title} GitHub">${ICONS.github_sm}</a>` : ''}
                                ${p.live ? `<a href="${p.live}" class="project-link" target="_blank" rel="noopener" aria-label="${p.title} Live Demo">${ICONS.external}</a>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        },

        renderEducation() {
            const timeline = document.getElementById('education-timeline');
            const items = CONFIG.education.map((e, i) => {
                const side = i % 2 === 0 ? 'right' : 'left';
                const highlights = e.highlights.map(h => `<span class="timeline-highlight">${h}</span>`).join('');
                return `
                    <div class="timeline-item timeline-item-${side} reveal" data-delay="${i}">
                        <div class="timeline-dot" aria-hidden="true"></div>
                        <div class="glass-card timeline-card">
                            <div class="timeline-date">${e.date}</div>
                            <h3 class="timeline-title">${e.degree}</h3>
                            <p class="timeline-subtitle gradient-text">${e.school}</p>
                            <p class="timeline-text">${e.description}</p>
                            <div class="timeline-highlights">${highlights}</div>
                        </div>
                    </div>
                `;
            }).join('');
            timeline.innerHTML = '<div class="timeline-line" aria-hidden="true"></div>' + items;
        },

        renderCertifications() {
            const grid = document.getElementById('certs-grid');
            grid.innerHTML = CONFIG.certifications.map((c, i) => `
                <div class="glass-card tilt-card cert-card reveal" data-delay="${i}">
                    <div class="cert-shimmer" aria-hidden="true"></div>
                    <div class="cert-icon">${ICONS.cert}</div>
                    <h3 class="cert-title">${c.title}</h3>
                    <p class="cert-issuer">${c.issuer}</p>
                    <span class="cert-date">${c.date}</span>
                    <div class="cert-badge">Verified</div>
                </div>
            `).join('');
        },

        renderExperience() {
            const timeline = document.getElementById('experience-timeline');
            const items = CONFIG.experience.map((e, i) => {
                const side = i % 2 === 0 ? 'right' : 'left';
                const achievements = e.achievements.map(a => `<li>${a}</li>`).join('');
                const tags = e.tags.map(t => `<span class="timeline-highlight">${t}</span>`).join('');
                const currentBadge = e.isCurrent ? '<span class="experience-current-badge">Current</span>' : '';

                return `
                    <div class="timeline-item timeline-item-${side} reveal" data-delay="${i}">
                        <div class="timeline-dot ${e.isCurrent ? 'timeline-dot-active' : ''}" aria-hidden="true"></div>
                        <div class="glass-card timeline-card experience-card">
                            <div class="experience-header">
                                <div>
                                    <div class="timeline-date">${e.date}</div>
                                    <h3 class="timeline-title">${e.role}</h3>
                                    <p class="timeline-subtitle gradient-text">${e.company}</p>
                                </div>
                                ${currentBadge}
                            </div>
                            <p class="timeline-text">${e.description}</p>
                            <ul class="experience-achievements">${achievements}</ul>
                            <div class="timeline-highlights">${tags}</div>
                        </div>
                    </div>
                `;
            }).join('');
            timeline.innerHTML = '<div class="timeline-line" aria-hidden="true"></div>' + items;
        },

        renderContact() {
            const container = document.getElementById('contact-grid');
            const c = CONFIG.contact;
            const s = CONFIG.socials;

            // Social links
            const socialLinks = Object.entries(s).map(([key, url]) => {
                if (!url) return '';
                const icon = ICONS[key] || ICONS.globe;
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                return `<a href="${url}" class="social-link" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon}</a>`;
            }).join('');

            container.innerHTML = `
                <div class="contact-info reveal">
                    <div class="glass-card contact-card">
                        <div class="contact-card-item">
                            <div class="contact-card-icon">${ICONS.mail}</div>
                            <div>
                                <p class="contact-card-label">Email</p>
                                <a href="mailto:${c.email}" class="contact-card-value">${c.email}</a>
                            </div>
                        </div>
                        <div class="contact-card-item">
                            <div class="contact-card-icon">${ICONS.location}</div>
                            <div>
                                <p class="contact-card-label">Location</p>
                                <p class="contact-card-value">${c.location}</p>
                            </div>
                        </div>
                        <div class="contact-card-item">
                            <div class="contact-card-icon">${ICONS.globe}</div>
                            <div>
                                <p class="contact-card-label">Website</p>
                                <a href="${c.website.url}" class="contact-card-value" target="_blank" rel="noopener">${c.website.label}</a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-socials">${socialLinks}</div>
                </div>
                <form id="contact-form" class="contact-form glass-card reveal" autocomplete="off" novalidate>
                    <div class="form-group">
                        <label for="form-name" class="form-label">Full Name</label>
                        <input type="text" id="form-name" class="form-input" placeholder="John Doe" required>
                    </div>
                    <div class="form-group">
                        <label for="form-email" class="form-label">Email Address</label>
                        <input type="email" id="form-email" class="form-input" placeholder="john@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="form-subject" class="form-label">Subject</label>
                        <input type="text" id="form-subject" class="form-input" placeholder="Let's work together!">
                    </div>
                    <div class="form-group">
                        <label for="form-message" class="form-label">Message</label>
                        <textarea id="form-message" class="form-input form-textarea" placeholder="Tell me about your project..." rows="5" required></textarea>
                    </div>
                    <button type="submit" id="form-submit" class="btn btn-primary btn-full">
                        <span>Send Message</span>
                        ${ICONS.send}
                    </button>
                </form>
            `;
        },

        renderFooter() {
            document.getElementById('footer-logo').textContent = CONFIG.site.logo;
            document.getElementById('footer-tagline').textContent = CONFIG.site.footerTagline;
            document.getElementById('footer-copyright').innerHTML = `&copy; ${CONFIG.site.copyright}. All rights reserved.`;
        },
    };


    // ═══════════════════════════════════════════════════════════════════════════
    // PARTICLE SYSTEM (Canvas)
    // ═══════════════════════════════════════════════════════════════════════════
    const ParticleSystem = {
        canvas: null, ctx: null, particles: [],
        mouse: { x: null, y: null, radius: 150 },

        init() {
            this.canvas = document.getElementById('particles-canvas');
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.createParticles();
            this.animate();
            window.addEventListener('resize', () => this.resize());
            window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
            window.addEventListener('mouseout', () => { this.mouse.x = null; this.mouse.y = null; });
        },

        resize() { this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight; },

        createParticles() {
            this.particles = [];
            const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120);
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width, y: Math.random() * this.canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.5, speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.1,
                    hue: Math.random() > 0.5 ? 250 : 190,
                });
            }
        },

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles.forEach((p, i) => {
                p.x += p.speedX; p.y += p.speedY;
                if (p.x < 0) p.x = this.canvas.width; if (p.x > this.canvas.width) p.x = 0;
                if (p.y < 0) p.y = this.canvas.height; if (p.y > this.canvas.height) p.y = 0;
                if (this.mouse.x !== null) {
                    const dx = p.x - this.mouse.x, dy = p.y - this.mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < this.mouse.radius) { const force = (this.mouse.radius - dist) / this.mouse.radius; p.x += dx * force * 0.02; p.y += dy * force * 0.02; }
                }
                this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`; this.ctx.fill();
                for (let j = i + 1; j < this.particles.length; j++) {
                    const p2 = this.particles[j];
                    const dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(p2.x, p2.y);
                        this.ctx.strokeStyle = `hsla(220, 60%, 60%, ${(1 - dist / 120) * 0.15})`; this.ctx.lineWidth = 0.5; this.ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(() => this.animate());
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // TYPING EFFECT — reads phrases from CONFIG
    // ═══════════════════════════════════════════════════════════════════════════
    const TypingEffect = {
        element: null, phrases: [], currentPhrase: 0, currentChar: 0,
        isDeleting: false, typingSpeed: 80, deletingSpeed: 40, pauseTime: 2000,

        init() {
            this.element = document.getElementById('typed-text');
            if (!this.element) return;
            this.phrases = CONFIG.hero.typingPhrases;
            this.type();
        },

        type() {
            const phrase = this.phrases[this.currentPhrase];
            if (this.isDeleting) { this.currentChar--; } else { this.currentChar++; }
            this.element.textContent = phrase.substring(0, this.currentChar);
            let timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
            if (!this.isDeleting && this.currentChar === phrase.length) { timeout = this.pauseTime; this.isDeleting = true; }
            else if (this.isDeleting && this.currentChar === 0) { this.isDeleting = false; this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length; timeout = 400; }
            setTimeout(() => this.type(), timeout);
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // SCROLL REVEAL
    // ═══════════════════════════════════════════════════════════════════════════
    const ScrollReveal = {
        init() {
            const els = document.querySelectorAll('.reveal');
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(() => entry.target.classList.add('active'), delay * 150);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            els.forEach((el) => obs.observe(el));
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // 3D CARD TILT
    // ═══════════════════════════════════════════════════════════════════════════
    const TiltEffect = {
        init() {
            document.querySelectorAll('.tilt-card').forEach((card) => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left, y = e.clientY - rect.top;
                    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
                    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
                    const glow = card.querySelector('.skill-card-glow, .cert-shimmer');
                    if (glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(108,99,255,0.15) 0%, transparent 60%)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
                    card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
                    const glow = card.querySelector('.skill-card-glow, .cert-shimmer');
                    if (glow) glow.style.background = 'transparent';
                });
                card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
            });
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // SKILL BARS + COUNTERS
    // ═══════════════════════════════════════════════════════════════════════════
    const SkillBars = {
        init() {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => { entry.target.style.width = entry.target.dataset.width + '%'; }, 200);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('.skill-bar-fill').forEach((bar) => obs.observe(bar));
        },
    };

    const CounterAnimation = {
        init() {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) { this.animate(entry.target); obs.unobserve(entry.target); }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('.hero-stat-number').forEach((c) => obs.observe(c));
        },
        animate(el) {
            const target = parseInt(el.dataset.target), duration = 2000, start = performance.now();
            const update = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                el.textContent = Math.floor((1 - Math.pow(1 - progress, 3)) * target);
                if (progress < 1) requestAnimationFrame(update); else el.textContent = target;
            };
            requestAnimationFrame(update);
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // NAVIGATION
    // ═══════════════════════════════════════════════════════════════════════════
    const Navigation = {
        lastScroll: 0,
        init() {
            const nav = document.getElementById('main-nav');
            const toggle = document.getElementById('nav-toggle');
            const menu = document.getElementById('nav-menu');
            const links = document.querySelectorAll('.nav-link');
            if (!nav || !toggle || !menu) return;

            toggle.addEventListener('click', () => {
                const isOpen = menu.classList.toggle('nav-menu-open');
                toggle.classList.toggle('nav-toggle-active');
                toggle.setAttribute('aria-expanded', isOpen.toString());
            });

            links.forEach((link) => link.addEventListener('click', () => {
                menu.classList.remove('nav-menu-open');
                toggle.classList.remove('nav-toggle-active');
                toggle.setAttribute('aria-expanded', 'false');
            }));

            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                nav.classList.toggle('nav-scrolled', scrollY > 50);
                nav.classList.toggle('nav-hidden', scrollY > this.lastScroll && scrollY > 300);
                this.lastScroll = scrollY;
            }, { passive: true });

            // Active link tracking
            const sections = document.querySelectorAll('section[id]');
            const obsNav = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        links.forEach((l) => {
                            l.classList.toggle('nav-link-active', l.getAttribute('href') === '#' + id);
                        });
                    }
                });
            }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
            sections.forEach((s) => obsNav.observe(s));
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // SMOOTH SCROLL
    // ═══════════════════════════════════════════════════════════════════════════
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach((a) => {
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(a.getAttribute('href'));
                    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                });
            });
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // CONTACT FORM
    // ═══════════════════════════════════════════════════════════════════════════
    const ContactForm = {
        init() {
            const form = document.getElementById('contact-form');
            if (!form) return;
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('#form-submit');
                const orig = btn.innerHTML;
                btn.innerHTML = `<span>Message Sent!</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
                btn.classList.add('btn-success'); btn.disabled = true;
                setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('btn-success'); btn.disabled = false; form.reset(); }, 3000);
            });
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // MAGNETIC BUTTONS + PARALLAX ORBS + CURSOR GLOW
    // ═══════════════════════════════════════════════════════════════════════════
    const MagneticButtons = {
        init() {
            document.querySelectorAll('.btn').forEach((btn) => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    btn.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.15}px, ${(e.clientY - rect.top - rect.height / 2) * 0.15}px)`;
                });
                btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
            });
        },
    };

    const ParallaxOrbs = {
        init() {
            const orbs = document.querySelectorAll('.ambient-orb');
            window.addEventListener('scroll', () => {
                const y = window.scrollY;
                orbs.forEach((orb, i) => { orb.style.transform = `translateY(${y * (0.03 + i * 0.015)}px)`; });
            }, { passive: true });
        },
    };

    const CursorGlow = {
        init() {
            if (window.matchMedia('(hover: none)').matches) return;
            const el = document.createElement('div');
            el.className = 'cursor-glow';
            document.body.appendChild(el);
            let mx = 0, my = 0, cx = 0, cy = 0;
            document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
            const render = () => {
                cx += (mx - cx) * 0.1; cy += (my - cy) * 0.1;
                el.style.left = cx + 'px'; el.style.top = cy + 'px';
                requestAnimationFrame(render);
            };
            render();
        },
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // BOOT
    // ═══════════════════════════════════════════════════════════════════════════
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Render content from config
        Renderer.init();

        // 2. Initialize all interactions (after content is in the DOM)
        document.body.classList.add('loaded');
        ParticleSystem.init();
        TypingEffect.init();
        ScrollReveal.init();
        TiltEffect.init();
        SkillBars.init();
        CounterAnimation.init();
        Navigation.init();
        SmoothScroll.init();
        ContactForm.init();
        MagneticButtons.init();
        ParallaxOrbs.init();
        CursorGlow.init();
    });
})();
