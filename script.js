// ===== Product Data =====
const productData = {
    'Basic Cotton T-Shirt': {
        co2: { value: 7, unit: 'kg', equivalent: 'Equivalent to driving 28 km in a car' },
        water: { value: '2,700', unit: 'L', equivalent: 'Equivalent to 3 years of drinking water for one person' },
        chemicals: { value: 3, unit: 'types', equivalent: 'Including pesticides, dyes, and finishing agents' },
        decompose: { value: '200+', unit: 'years', equivalent: 'Cotton blended with synthetics may never fully decompose' },
        alternatives: [
            'Buy secondhand or vintage t-shirts',
            'Choose organic cotton certified by GOTS',
            'Look for recycled cotton options',
            'Support brands with transparent supply chains'
        ]
    },
    'Distressed Skinny Jeans': {
        co2: { value: 33, unit: 'kg', equivalent: 'Equivalent to driving 130 km in a car' },
        water: { value: '7,500', unit: 'L', equivalent: 'Enough drinking water for one person for 10 years' },
        chemicals: { value: 8, unit: 'types', equivalent: 'Heavy metals, sandblasting silica, and toxic dyes' },
        decompose: { value: '40+', unit: 'years', equivalent: 'Denim with elastane takes decades to break down' },
        alternatives: [
            'Buy pre-owned denim from thrift stores',
            'Choose raw or undistressed denim',
            'Look for brands using waterless dyeing techniques',
            'Invest in quality jeans that last 10+ years'
        ]
    },
    'Floral Summer Dress': {
        co2: { value: 12, unit: 'kg', equivalent: 'Equivalent to running a laptop for 1,200 hours' },
        water: { value: '1,500', unit: 'L', equivalent: 'Enough to fill 18 bathtubs' },
        chemicals: { value: 5, unit: 'types', equivalent: 'Polyester dyes and fabric softeners' },
        decompose: { value: '200+', unit: 'years', equivalent: 'Polyester sheds microplastics with every wash' },
        alternatives: [
            'Rent dresses for special occasions',
            'Choose natural fibers like linen or Tencel',
            'Buy from clothing swaps or consignment',
            'Look for dresses made from recycled materials'
        ]
    },
    'Puffer Jacket': {
        co2: { value: 45, unit: 'kg', equivalent: 'Equivalent to charging your phone 4,500 times' },
        water: { value: '3,200', unit: 'L', equivalent: 'More water than the average person drinks in 4 years' },
        chemicals: { value: 12, unit: 'types', equivalent: 'PFAS "forever chemicals," synthetic insulation, and waterproofing agents' },
        decompose: { value: '500+', unit: 'years', equivalent: 'Synthetic materials persist for centuries in landfills' },
        alternatives: [
            'Choose jackets with responsibly sourced down (RDS certified)',
            'Look for PFAS-free waterproof options',
            'Buy secondhand outerwear in excellent condition',
            'Invest in one quality jacket instead of multiple cheap ones'
        ]
    },
    'Ribbed Crop Top': {
        co2: { value: 5, unit: 'kg', equivalent: 'Equivalent to leaving a light on for 500 hours' },
        water: { value: '1,800', unit: 'L', equivalent: 'The same as 45 loads of laundry' },
        chemicals: { value: 4, unit: 'types', equivalent: 'Synthetic dyes and finishing chemicals' },
        decompose: { value: '20+', unit: 'years', equivalent: 'Blended fabrics are difficult to recycle' },
        alternatives: [
            'Shop your own closet first',
            'Try clothing swaps with friends',
            'Choose tops made from organic or hemp fibers',
            'Support slow fashion brands'
        ]
    },
    'High-Rise Denim Shorts': {
        co2: { value: 18, unit: 'kg', equivalent: 'Equivalent to driving 72 km in a car' },
        water: { value: '5,000', unit: 'L', equivalent: 'Could provide drinking water to 7 people for a year' },
        chemicals: { value: 6, unit: 'types', equivalent: 'Indigo dyes, bleaches, and softening agents' },
        decompose: { value: '35+', unit: 'years', equivalent: 'Denim blends with stretch take longer to decompose' },
        alternatives: [
            'Cut off old jeans to make your own shorts',
            'Buy vintage Levi\'s from thrift stores',
            'Look for brands using laser finishing instead of chemicals',
            'Choose shorts made from hemp or recycled denim'
        ]
    },
    'Oversized Hoodie': {
        co2: { value: 15, unit: 'kg', equivalent: 'Equivalent to producing 6 pounds of coal' },
        water: { value: '4,000', unit: 'L', equivalent: 'Enough to fill a small swimming pool' },
        chemicals: { value: 5, unit: 'types', equivalent: 'Fleece materials, dyes, and fire retardants' },
        decompose: { value: '100+', unit: 'years', equivalent: 'Polyester fleece sheds microplastics continuously' },
        alternatives: [
            'Buy secondhand hoodies in good condition',
            'Choose 100% organic cotton hoodies',
            'Look for recycled polyester options',
            'Support brands with take-back programs'
        ]
    },
    'Faux Leather Tote': {
        co2: { value: 8, unit: 'kg', equivalent: 'Equivalent to watching TV for 400 hours' },
        water: { value: '2,200', unit: 'L', equivalent: 'Could hydrate a person for 3 years' },
        chemicals: { value: 4, unit: 'types', equivalent: 'PVC, phthalates, and plastic coatings' },
        decompose: { value: '300+', unit: 'years', equivalent: 'PVC and synthetic leather persist indefinitely' },
        alternatives: [
            'Use canvas or cotton tote bags instead',
            'Buy vintage real leather that lasts decades',
            'Look for plant-based leather alternatives (Piñatex, mushroom leather)',
            'Repair and maintain bags you already own'
        ]
    }
};

// ===== DOM Elements =====
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('impactModal');
const modalClose = document.querySelector('.modal-close');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// ===== Filter Functionality =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        productCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== Modal Functionality =====
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        openModal(productName);
    });
});

function openModal(productName) {
    const data = productData[productName];
    
    if (data) {
        document.getElementById('modalTitle').textContent = productName;
        document.getElementById('modalCO2').textContent = data.co2.value;
        document.getElementById('modalCO2Desc').textContent = data.co2.equivalent;
        document.getElementById('modalWater').textContent = data.water.value;
        document.getElementById('modalWaterDesc').textContent = data.water.equivalent;
        document.getElementById('modalChemicals').textContent = data.chemicals.value;
        document.getElementById('modalChemicalsDesc').textContent = data.chemicals.equivalent;
        document.getElementById('modalDecompose').textContent = data.decompose.value;
        document.getElementById('modalDecomposeDesc').textContent = data.decompose.equivalent;
        
        const alternativesList = document.getElementById('modalAlternatives');
        alternativesList.innerHTML = '';
        data.alternatives.forEach(alt => {
            const li = document.createElement('li');
            li.textContent = alt;
            alternativesList.appendChild(li);
        });
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== Mobile Menu =====
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        if (navLinks) {
            navLinks.classList.toggle('mobile-active');
        }
    });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Cart Simulation (Educational Popup) =====
let educationalClicks = 0;

function showEducationalToast() {
    educationalClicks++;
    
    const messages = [
        "This isn't a real store - but the environmental impact is very real!",
        "Every item of clothing you buy has a hidden cost to the planet.",
        "The fashion industry is the 2nd largest polluter in the world.",
        "Consider buying secondhand or investing in quality pieces that last.",
        "Your choices matter. Learn more about sustainable fashion!"
    ];
    
    const message = messages[educationalClicks % messages.length];
    
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">💡</span>
        <span class="toast-message">${message}</span>
    `;
    document.body.appendChild(toast);
    
    // Add toast styles if not already added
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast {
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                background: #1a1a1a;
                color: white;
                padding: 16px 24px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                z-index: 3000;
                animation: toastIn 0.3s ease, toastOut 0.3s ease 3s forwards;
                max-width: 90%;
            }
            
            .toast-icon {
                font-size: 24px;
            }
            
            .toast-message {
                font-size: 14px;
                line-height: 1.4;
            }
            
            @keyframes toastIn {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            
            @keyframes toastOut {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .legend-item, .stat').forEach(el => {
    observer.observe(el);
});

// ===== Add animation styles =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeIn 0.5s ease forwards;
    }
    
    .product-card,
    .legend-item {
        opacity: 0;
    }
    
    .stat {
        opacity: 1;
    }
    
    .nav-links.mobile-active {
        display: flex;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(animationStyles);

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Stats are now always visible - no animation needed
// The numbers display as-is from the HTML

// ===== Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
    
    console.log('🌍 THREAD - Fast Fashion Impact Education');
    console.log('This is an educational website about the environmental impacts of fast fashion.');
    console.log('No actual products are for sale.');
});
