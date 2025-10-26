
        // Create particle background
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 5 and 20px
                const size = Math.random() * 15 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // Random animation delay and duration
                const delay = Math.random() * 15;
                const duration = Math.random() * 10 + 15;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.menu-toggle i').classList.add('fa-bars');
                document.querySelector('.menu-toggle i').classList.remove('fa-times');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
            
            // Show/hide scroll to top button
            const scrollToTopBtn = document.getElementById('scrollToTop');
            if (scrollTop > 500) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });
        
        // Scroll to top functionality
        document.getElementById('scrollToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill bars
                    if (entry.target.id === 'skills') {
                        const skillBars = entry.target.querySelectorAll('.skill-progress');
                        skillBars.forEach(bar => {
                            const width = bar.getAttribute('data-width');
                            setTimeout(() => {
                                bar.style.width = `${width}%`;
                            }, 200);
                        });
                        
                        // Animate skill categories
                        const skillCategories = entry.target.querySelectorAll('.skill-category');
                        skillCategories.forEach((category, index) => {
                            setTimeout(() => {
                                category.classList.add('animate');
                            }, index * 200);
                        });
                    }
                    
                    // Animate project cards
                    if (entry.target.id === 'projects') {
                        const projectCards = entry.target.querySelectorAll('.project-card');
                        projectCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate');
                            }, index * 200);
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
        
        // Form submission handled by Formspree - no JavaScript needed
        // Formspree automatically handles form submission and sends emails
        
        // Initialize particles and animations when page loads
        window.addEventListener('load', function() {
            createParticles();
            
            // Add initial animation to hero section
            document.querySelector('.hero').style.opacity = '1';
        });
