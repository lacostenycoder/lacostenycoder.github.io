// Portfolio data
const portfolioData = [
    {
        id: 1,
        title: "ScaleCommerce - Enterprise E-commerce Platform",
        description: "Comprehensive e-commerce platform with multi-vendor marketplace functionality, real-time analytics, and automated inventory management.",
        image: "portfolio_1_ecommerce_platform.png",
        category: "ecommerce",
        categoryLabel: "E-commerce & SaaS",
        technologies: ["Ruby on Rails 7", "React", "PostgreSQL", "Redis", "AWS"],
        impact: "📈 150% increase in online sales, 35% conversion rate improvement"
    },
    {
        id: 2,
        title: "BusinessHub - All-in-One Business Management",
        description: "Multi-tenant SaaS platform integrating CRM, project management, and financial tools with API integrations.",
        image: "portfolio_2_saas_platform.png",
        category: "ecommerce",
        categoryLabel: "E-commerce & SaaS",
        technologies: ["Ruby on Rails 6", "React", "TypeScript", "PostgreSQL", "Sidekiq"],
        impact: "📈 1,000+ paying customers, $100K monthly recurring revenue"
    },
    {
        id: 3,
        title: "WealthTracker - Investment Management Platform",
        description: "Sophisticated financial platform for portfolio tracking, risk analysis, and automated rebalancing across multiple asset classes.",
        image: "portfolio_3_financial_platform.png",
        category: "ecommerce",
        categoryLabel: "E-commerce & SaaS",
        technologies: ["Ruby on Rails 6", "React", "PostgreSQL", "Redis", "Alpha Vantage API"],
        impact: "📈 $50M in managed assets, 15% average return improvement"
    },
    {
        id: 4,
        title: "StakeMax - Advanced DeFi Staking Platform",
        description: "Multi-chain DeFi staking platform with automated yield optimization and liquid staking tokens.",
        image: "portfolio_4_defi_staking.png",
        category: "web3",
        categoryLabel: "Web3 & Blockchain",
        technologies: ["React", "Web3.js", "Solidity", "Ethereum", "Polygon", "Node.js"],
        impact: "📈 $10M total value locked, 12% average APY"
    },
    {
        id: 5,
        title: "ArtVerse - Next-Generation NFT Marketplace",
        description: "Multi-chain NFT marketplace with lazy minting, advanced auctions, and creator monetization tools.",
        image: "portfolio_5_nft_marketplace.png",
        category: "web3",
        categoryLabel: "Web3 & Blockchain",
        technologies: ["React", "Web3.js", "Solidity", "IPFS", "Ethereum", "Polygon"],
        impact: "📈 $2M in NFT sales, 500+ artists, 5,000+ collectors"
    },
    {
        id: 6,
        title: "TradePro - Advanced Crypto Trading Interface",
        description: "Professional cryptocurrency trading dashboard with real-time data, automated bots, and social trading features.",
        image: "portfolio_6_crypto_trading.png",
        category: "web3",
        categoryLabel: "Web3 & Blockchain",
        technologies: ["React", "TypeScript", "WebSocket", "Node.js", "Redis"],
        impact: "📈 $100M trading volume, 25% performance improvement"
    },
    {
        id: 7,
        title: "PropertyPro - Real Estate Management System",
        description: "Comprehensive property management platform with tenant portals, maintenance tracking, and financial reporting.",
        image: "portfolio_7_real_estate.png",
        category: "fullstack",
        categoryLabel: "Full-Stack Applications",
        technologies: ["Ruby on Rails 7", "React", "PostgreSQL", "AWS", "Stripe"],
        impact: "📈 50% efficiency increase, 20% vacancy reduction"
    },
    {
        id: 8,
        title: "HealthConnect - Patient Management System",
        description: "HIPAA-compliant patient portal with telemedicine, appointment scheduling, and secure messaging.",
        image: "portfolio_8_healthcare.png",
        category: "fullstack",
        categoryLabel: "Full-Stack Applications",
        technologies: ["Ruby on Rails 6", "React", "PostgreSQL", "HIPAA-compliant AWS"],
        impact: "📈 60% patient engagement increase, 30% no-show reduction"
    },
    {
        id: 9,
        title: "EduFlow - Learning Management Platform",
        description: "Modern LMS with virtual classrooms, progress tracking, and interactive assessments for educational institutions.",
        image: "portfolio_9_education.png",
        category: "fullstack",
        categoryLabel: "Full-Stack Applications",
        technologies: ["Ruby on Rails 7", "React", "PostgreSQL", "AWS", "Zoom API"],
        impact: "📈 50,000+ students, 45% completion rate improvement"
    },
    {
        id: 10,
        title: "RecommendAI - Personalization Engine",
        description: "Advanced AI recommendation system with machine learning algorithms, real-time personalization, and A/B testing capabilities.",
        image: "portfolio_ai_1_chatbot.png",
        category: "ai",
        categoryLabel: "AI & Machine Learning",
        technologies: ["Ruby on Rails 7", "React", "Python", "TensorFlow", "PostgreSQL", "Redis"],
        impact: "📈 45% conversion rate increase, 60% user engagement improvement"
    },
    {
        id: 11,
        title: "ContentAI - Intelligent Content Generation Platform",
        description: "AI-powered content creation platform with SEO optimization, multi-language support, and automated publishing workflows.",
        image: "portfolio_ai_2_content.png",
        category: "ai",
        categoryLabel: "AI & Machine Learning",
        technologies: ["Ruby on Rails 7", "React", "OpenAI API", "PostgreSQL", "Elasticsearch", "NLP"],
        impact: "📈 300% content production increase, 85% SEO score improvement"
    },
    {
        id: 12,
        title: "IntelliChat - AI Customer Service Platform",
        description: "Advanced AI-powered customer service chatbot with natural language processing, sentiment analysis, and automated escalation workflows.",
        image: "portfolio_ai_3_analytics.png",
        category: "ai",
        categoryLabel: "AI & Machine Learning",
        technologies: ["Ruby on Rails 7", "React", "OpenAI API", "PostgreSQL", "Redis", "NLP"],
        impact: "📈 75% reduction in response time, 90% customer satisfaction rate"
    }
];

// DOM elements
const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize portfolio
function initPortfolio() {
    renderPortfolio('all');
    setupFilterButtons();
    setupSmoothScrolling();
    setupNavbarScroll();
}

// Render portfolio items
function renderPortfolio(filter) {
    const filteredProjects = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(project => project.category === filter);
    
    portfolioGrid.innerHTML = '';
    
    filteredProjects.forEach((project, index) => {
        const portfolioItem = createPortfolioItem(project);
        portfolioGrid.appendChild(portfolioItem);
        
        // Add staggered animation
        setTimeout(() => {
            portfolioItem.style.opacity = '1';
            portfolioItem.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Create portfolio item HTML
function createPortfolioItem(project) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    item.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="portfolio-image" loading="lazy">
        <div class="portfolio-content">
            <div class="portfolio-category">${project.categoryLabel}</div>
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            <div class="portfolio-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="portfolio-impact">${project.impact}</div>
        </div>
    `;
    
    return item;
}

// Setup filter buttons
function setupFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter portfolio
            const filter = button.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Setup intersection observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.stats, .about, .skills, .portfolio, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Setup active navigation highlighting
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Handle image loading errors
function setupImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', () => {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.style.width = img.style.width || '100%';
            placeholder.style.height = img.style.height || '250px';
            placeholder.style.background = '#f1f5f9';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = '#64748b';
            placeholder.style.fontSize = '14px';
            placeholder.textContent = 'Image not available';
            
            img.parentNode.replaceChild(placeholder, img);
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    setupScrollAnimations();
    setupActiveNavigation();
    setupImageErrorHandling();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any layout-dependent features if needed
});

// Add loading state for portfolio
function showLoadingState() {
    portfolioGrid.innerHTML = '<div class="loading">Loading projects...</div>';
}

// Add error handling for portfolio rendering
function handlePortfolioError(error) {
    console.error('Error rendering portfolio:', error);
    portfolioGrid.innerHTML = '<div class="error">Error loading projects. Please refresh the page.</div>';
}

// Export functions for potential external use
window.PortfolioApp = {
    renderPortfolio,
    portfolioData,
    initPortfolio
};

