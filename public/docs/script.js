// Smooth scroll para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adicionar animação de scroll para seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação a seções
    const sections = document.querySelectorAll('.section, .tutorial-step');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Destacar link ativo na navegação
    const sectionsForNav = document.querySelectorAll('.section[id], .hero[id]');
    const navLinksWithHash = document.querySelectorAll('.nav-link[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sectionsForNav.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksWithHash.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Adicionar estilo para link ativo
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            background-color: var(--primary-color);
            color: white;
        }
    `;
    document.head.appendChild(style);
});

// Adicionar comportamento para FAQ items (se necessário)
document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('h3');
    const answer = item.querySelector('.faq-answer');
    
    if (header && answer) {
        answer.style.display = 'none';
        header.style.cursor = 'pointer';
        
        header.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            item.classList.toggle('open', !isOpen);
        });
    }
});


