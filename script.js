const projectDetails = {
    tourarena: {
        title: 'TourArena',
        description: 'A tournament management platform that connects organizers and players through online registration, match scheduling, and real-time results. The experience was shaped around reducing manual coordination for every match.'
    },
    presensia: {
        title: 'Presensia',
        description: 'A Flutter mobile app for employee attendance using face recognition. The product combines a focused check-in flow with dependable data integration for teams and administrators.'
    },
    siskom: {
        title: 'SISKOM – Sistem Rekomendasi Jurnal Terindeks SINTA',
        description: 'A full-stack research project with a Python scraping pipeline, NLP semantic vectors, pgvector cosine similarity search, and a hybrid preprocessing flow using the DeepL API.'
    },
    sirw: {
        title: 'SIRW – Sistem Informasi RW',
        description: 'A neighborhood information system designed in Figma and built with Laravel. The project included user research, usability testing, responsive interfaces, and FastAPI integration.'
    },
    'tata-tertib': {
        title: 'Sistem Tata Tertib Mahasiswa',
        description: 'A user-friendly website for managing student regulations efficiently, with interactive features built using HTML, CSS, and JavaScript and tested for mobile and cross-browser compatibility.'
    },
    'ce-es': {
        title: 'Ce-eS – Cashier System',
        description: 'A Java-based restaurant cashier application with algorithms for order processing, payment handling, and transaction reporting through a simple interface.'
    }
};

const experienceDetails = {
    intelix: {
        title: 'Partner Project Developer Internship',
        company: 'PT Intelix Global Crossing',
        period: 'July 2025 – December 2025',
        responsibilities: [
            'Developed and maintained responsive web applications using CodeIgniter 3 and 4.',
            'Authored and optimized SQL queries for efficient data filtering and retrieval.',
            'Conducted feature testing and resolved bugs to ensure system stability and optimal performance.'
        ]
    },
    lintang: {
        title: 'Software Developer Internship',
        company: 'PT Lintang Utama Infotek',
        period: 'January 2025 – July 2025',
        responsibilities: [
            'Designed and customized PDF printout modules for the Odoo 18 system to enhance reporting layouts.',
            'Formatted and processed datasets using Python in Google Colab to support data integration.',
            'Conducted feature testing and troubleshooting for Odoo 17 and 18 web applications in Linux Environment.',
            'Prepared detailed documentation and facilitated User Acceptance Testing (UAT).'
        ]
    }
};

const portfolioData = {
    profile: {
        name: 'Hanifah Amany',
        titleLead: 'Hanifah',
        titleAccent: 'Amany',
        introduction: 'a passionate software developer turning thoughtful ideas into reliable digital experiences.',
        focus: 'Full-stack Web<br>&amp; Mobile Development'
    },
    contact: {
        description: ' ',
        email: 'hanifahamany@yahoo.com',
        location: 'Indonesia',
        social: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hanifahamany/', icon: 'assets/icons/linkedin.png' },
            { name: 'GitHub', url: 'https://github.com/hanifahamany', icon: 'assets/icons/github.png' }
        ]
    },
    education: {
        period: 'Aug 2022 — Jul 2026',
        institution: 'Politeknik Negeri Malang',
        degree: 'Bachelor of Informatics Engineering, Information Technology'
    },
    projects: [
        {
            id: 'siskom',
            number: '01',
            category: 'Research platform',
            title: 'SISKOM',
            description: 'A SINTA-indexed journal recommendation system powered by scraping, NLP vectors, and semantic document search.',
            tags: ['Python', 'NLP', 'pgvector']
        },
        {
            id: 'presensia',
            number: '02',
            category: 'Mobile app',
            title: 'Presensia',
            description: 'A face recognition attendance app designed to help teams record employee presence with less friction.',
            tags: ['Flutter', 'Dart', 'API integration']
        },
        {
            id: 'sirw',
            number: '03',
            category: 'Web application',
            title: 'SIRW',
            description: 'A responsive neighborhood information system designed around clear interfaces, user research, and API integration.',
            tags: ['Laravel', 'Figma', 'FastAPI']
        },
        {
            id: 'tata-tertib',
            number: '04',
            category: 'Web application',
            title: 'Sistem Tata Tertib Mahasiswa',
            description: 'A student regulation management website with interactive features and responsive cross-browser support.',
            tags: ['HTML/CSS', 'JavaScript', 'Responsive']
        }
    ],
    experience: [
        { id: 'intelix', period: 'Jul 2025 — Dec 2025' },
        { id: 'lintang', period: 'Jan 2025 — Jul 2025' }
    ],
    organizations: [
        {
            period: 'May 2024 — May 2025',
            title: 'Information Technology Department English Community (ITDEC)',
            role: 'as Steering Committee of Public Relations and Partnerships',
            details: [
                'Managed public communications for the organization.',
                'Maintained partnerships with internal and external campus organizations.',
                'Evaluated and reported results at the end of the term.'
            ]
        },
        {
            period: 'Feb 2024 — Feb 2025',
            title: 'Forum Mahasiswa Bidikmisi/KIP Kuliah dan Afirmasi Pendidikan Polinema (FORMADIKSI)',
            role: 'as Division Coordinator of Divisi Kesejahteraan Mahasiswa',
            details: [
                'Developed strategies to achieve division activity targets.',
                'Led and monitored division performance to ensure goal alignment.',
                'Communicated and coordinated with the executive board and other divisions to enhance organizational performance.',
                'Evaluated and reported results at the end of the term.'
            ]
        },
        {
            period: 'Nov 2024',
            title: 'Legends Clash Championship Mobile Legends Bang Bang se-Malang Raya',
            role: 'as Steering Committee of Events Division',
            details: []
        },
        {
            period: 'Jul 2024',
            title: 'Pekan Olahraga dan Seni XIV Politeknik se-Indonesia',
            role: 'as Liaison Officer',
            details: []
        },
        {
            period: 'Jan 2024',
            title: 'Bakti Desa Formadiksi Polinema',
            role: 'as Organizing Committee of Public Relations Division',
            details: []
        }
    ],
    skills: [
        { name: 'Languages', description: 'Python, PHP, JavaScript, Java, Dart' },
        { name: 'Frontend & mobile', description: 'HTML/CSS, Tailwind CSS, React, TypeScript, Flutter, Figma' },
        { name: 'Backend & databases', description: 'Laravel, CodeIgniter, REST API, FastAPI, Odoo 17/18, PostgreSQL, MySQL, SQL optimization' },
        { name: 'Engineering', description: 'Algorithms & Data Structures, OOP, MVC Architecture, Agile, Sprint Planning, UAT' },
        { name: 'AI & data', description: 'NLP, Machine Learning, Vector Embedding, Text Preprocessing, DeepL API, pgvector' },
        { name: 'Tools', description: 'Git/GitHub, GitHub Copilot, Cursor, Claude, Linux, Windows' }
    ]
};

function renderPortfolioData() {
    const profile = portfolioData.profile;
    const contact = portfolioData.contact;
    document.getElementById('heroTitleLead').textContent = profile.titleLead;
    document.getElementById('heroTitleAccent').textContent = profile.titleAccent;
    document.getElementById('heroIntro').textContent = profile.introduction;
    document.getElementById('focusTitle').innerHTML = profile.focus;
    document.getElementById('footerName').textContent = profile.name;
    document.getElementById('contactDescription').textContent = contact.description;
    document.getElementById('emailText').textContent = contact.email;
    document.getElementById('emailLink').href = `mailto:${contact.email}`;
    document.getElementById('location').textContent = contact.location;
    document.getElementById('socialLinks').innerHTML = contact.social.map((social) => `
        <a class="social-link" href="${social.url}" target="_blank" rel="noopener noreferrer">
            <img src="${social.icon}" alt="" />${social.name}<span>↗</span>
        </a>`).join('');

    const education = portfolioData.education;
    document.getElementById('educationContent').innerHTML = `
        <span class="experience-year">${education.period}</span>
        <div>
            <h4>${education.institution}</h4>
            <h5>${education.degree}</h5>
        </div>`;

    document.getElementById('projectGrid').innerHTML = portfolioData.projects.map((project) => `
        <article class="project-card" data-project="${project.id}" role="button" tabindex="0" aria-label="View case study for ${project.title}">
            <div class="project-topline"><span>${project.number}</span><span>${project.category}</span></div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button class="project-link project-trigger" data-project="${project.id}">View case study <span aria-hidden="true">↗</span></button>
            <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        </article>`).join('');

    document.getElementById('experienceList').innerHTML = portfolioData.experience.map((item) => {
        const experience = experienceDetails[item.id];
        return `
            <div class="experience-item experience-trigger" data-experience="${item.id}" role="button" tabindex="0" aria-haspopup="dialog">
                <span class="experience-year">${item.period}</span>
                <div>
                    <h4>${experience.title}</h4>
                    <h5>at ${experience.company}</h5>
                </div>
            </div>`;
    }).join('');

    document.getElementById('organizationList').innerHTML = portfolioData.organizations.map((organization) => `
        <div class="organization-item">
            <span class="experience-year">${organization.period}</span>
            <div>
                <h4>${organization.title}</h4>
                <h5>${organization.role}</h5>
                ${organization.details.map((detail) => `<p>${detail}</p>`).join('')}
            </div>
        </div>`).join('');

    document.getElementById('skillsList').innerHTML = portfolioData.skills.map((skill) => `
        <p><strong>${skill.name}</strong>${skill.description}</p>`).join('');

    updateProjectSliderControls();
}

const projectSlider = document.getElementById('projectSlider');
const projectScrollPrev = document.querySelector('.project-scroll-prev');
const projectScrollNext = document.querySelector('.project-scroll-next');

function updateProjectSliderControls() {
    const projectCount = document.querySelectorAll('.project-card').length;
    const sliderButtons = document.querySelector('.project-slider-buttons');
    if (sliderButtons) {
        sliderButtons.classList.toggle('is-visible', projectCount > 3);
    }
}

function getProjectScrollStep() {
    if (!projectSlider) return 320;
    const projectGrid = projectSlider.querySelector('.project-grid');
    const firstCard = projectSlider.querySelector('.project-card');
    const styles = projectGrid ? getComputedStyle(projectGrid) : getComputedStyle(projectSlider);
    const gap = Number.parseFloat(styles.gap || '0');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
    return Number.isFinite(gap) ? cardWidth + gap : cardWidth;
}

function scrollProjectSlider(direction) {
    if (!projectSlider) return;
    projectSlider.scrollBy({ left: getProjectScrollStep() * direction, behavior: 'smooth' });
}

let dragStartX = 0;
let dragStartScrollLeft = 0;
let isDraggingSlider = false;

projectSlider?.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'touch') return;
    isDraggingSlider = true;
    dragStartX = event.clientX;
    dragStartScrollLeft = projectSlider.scrollLeft;
    projectSlider.classList.add('is-dragging');
    projectSlider.setPointerCapture(event.pointerId);
});

projectSlider?.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'touch' || !isDraggingSlider) return;
    const deltaX = event.clientX - dragStartX;
    projectSlider.scrollLeft = dragStartScrollLeft - deltaX;
});

projectSlider?.addEventListener('pointerup', () => {
    isDraggingSlider = false;
    projectSlider.classList.remove('is-dragging');
});

projectSlider?.addEventListener('pointerleave', () => {
    isDraggingSlider = false;
    projectSlider.classList.remove('is-dragging');
});

projectScrollPrev?.addEventListener('click', () => scrollProjectSlider(-1));
projectScrollNext?.addEventListener('click', () => scrollProjectSlider(1));

renderPortfolioData();

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const experienceModal = document.getElementById('experienceModal');
const experienceModalTitle = document.getElementById('experienceModalTitle');
const experienceModalCompany = document.getElementById('experienceModalCompany');
const experienceModalPeriod = document.getElementById('experienceModalPeriod');
const experienceModalList = document.getElementById('experienceModalList');

function openModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function openExperienceModal(experienceId) {
    const experience = experienceDetails[experienceId];
    if (!experience) return;
    experienceModalTitle.textContent = experience.title;
    experienceModalCompany.textContent = experience.company;
    experienceModalPeriod.textContent = experience.period;
    experienceModalList.replaceChildren(...experience.responsibilities.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    }));
    experienceModal.classList.add('is-open');
    experienceModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeExperienceModal() {
    experienceModal.classList.remove('is-open');
    experienceModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('.project-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.project));
});

document.querySelectorAll('.project-card').forEach((card) => {
    const open = () => {
        const projectId = card.dataset.project;
        if (projectId) openModal(projectId);
    };

    card.addEventListener('click', (event) => {
        if (event.target.closest('.project-trigger')) return;
        open();
    });

    card.addEventListener('keydown', (event) => {
        if (event.target.closest('.project-trigger')) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            open();
        }
    });
});

document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});
document.querySelector('.experience-modal-close').addEventListener('click', closeExperienceModal);
experienceModal.addEventListener('click', (event) => {
    if (event.target === experienceModal) closeExperienceModal();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    if (event.key === 'Escape' && experienceModal.classList.contains('is-open')) closeExperienceModal();
});

document.querySelectorAll('.experience-trigger').forEach((trigger) => {
    const open = () => openExperienceModal(trigger.dataset.experience);
    trigger.addEventListener('click', open);
    trigger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            open();
        }
    });
});

const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
document.body.classList.add('motion-ready');
let lastScrollY = window.scrollY;
let isScrollingDown = true;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (isScrollingDown || entry.target.id === 'home') {
                entry.target.classList.add('is-visible');
            }
            navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
        }
    });
}, { rootMargin: '-10% 0px -20% 0px', threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

function revealSectionsOnScroll() {
    sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const isInViewport = bounds.top < window.innerHeight * .85 && bounds.bottom > window.innerHeight * .1;
        if (isInViewport && isScrollingDown) {
            section.classList.add('is-visible');
        }
    });
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    isScrollingDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;
    revealSectionsOnScroll();
}, { passive: true });
revealSectionsOnScroll();

document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const rotateY = ((x / bounds.width) - .5) * 5;
        const rotateX = ((y / bounds.height) - .5) * -5;
        card.style.setProperty('--pointer-x', `${x}px`);
        card.style.setProperty('--pointer-y', `${y}px`);
        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
    });

    card.addEventListener('pointerleave', () => {
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
    });
});
