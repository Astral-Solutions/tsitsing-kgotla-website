// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Smooth scrolling for navigation links
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
        // Close mobile menu if open
        document.getElementById('nav-menu').classList.remove('show');
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.95) 0%, rgba(60, 36, 21, 0.95) 100%)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--forest-green) 0%, var(--deep-brown) 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
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

// FIXED: Real download functionality
function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// Download link handlers with actual file downloads
document.querySelectorAll('.download-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.textContent.trim();
        
        // Generate different content based on the link clicked
        let filename, content, mimeType;
        
        if (linkText.includes('Water Conservation')) {
            filename = 'Water_Conservation_Guidelines.pdf';
            content = generateWaterConservationPDF();
            mimeType = 'application/pdf';
        } else if (linkText.includes('Download Form') || linkText.includes('Livestock')) {
            filename = 'Livestock_Registration_Form.pdf';
            content = generateLivestockFormPDF();
            mimeType = 'application/pdf';
        } else if (linkText.includes('Registration Form') || linkText.includes('Medicine')) {
            filename = 'Traditional_Medicine_Registration.pdf';
            content = generateMedicineRegistrationPDF();
            mimeType = 'application/pdf';
        } else if (linkText.includes('Project Details')) {
            filename = 'Community_Development_Projects.pdf';
            content = generateProjectDetailsPDF();
            mimeType = 'application/pdf';
        } else {
            // Generic download
            filename = 'Kgotla_Document.txt';
            content = `Document from Tsitsing Kgotla ya Rakhudu\n\nThis is a sample document. In a real implementation, this would contain the actual content for: ${linkText}`;
            mimeType = 'text/plain';
        }
        
        downloadFile(filename, content, mimeType);
    });
});

// Functions to generate PDF-like content (simplified text versions)
function generateWaterConservationPDF() {
    return `TSITSING KGOTLA YA RAKHUDU
WATER CONSERVATION GUIDELINES

Dear Community Members,

During this dry season, we must work together to conserve our precious water resources.

GUIDELINES:
1. Use water sparingly for household needs
2. Collect rainwater where possible
3. Report any water leaks immediately
4. Limit garden watering to early morning or evening
5. Reuse greywater for non-drinking purposes

WATER SCHEDULE:
- Monday to Friday: 06:00 - 08:00 and 17:00 - 19:00
- Weekends: 06:00 - 10:00 and 16:00 - 18:00

For emergencies, contact the Kgotla office immediately.

Thank you for your cooperation.

Traditional Council
Tsitsing Kgotla ya Rakhudu`;
}

function generateLivestockFormPDF() {
    return `TSITSING KGOTLA YA RAKHUDU
LIVESTOCK REGISTRATION FORM

Owner Information:
Name: ____________________________
ID Number: _______________________
Address: _________________________
Phone: ___________________________

Livestock Details:
Type of Animal: ___________________
Number of Animals: ________________
Brand/Mark: ______________________
Vaccination Status: ________________

Declaration:
I declare that the information provided is true and correct.

Signature: ________________________
Date: ____________________________

Submit this form to the Kgotla office before month end.
Registration fee: R50 per animal type.`;
}

function generateMedicineRegistrationPDF() {
    return `TSITSING KGOTLA YA RAKHUDU
TRADITIONAL MEDICINE WORKSHOP REGISTRATION

Workshop Details:
Date: Every Saturday in July
Time: 09:00 - 15:00
Venue: Kgotla Community Hall
Facilitator: Elder Healers Council

Participant Information:
Full Name: ________________________
Age: _____________________________
Contact Number: ___________________
Previous Experience: _______________

Workshop Topics:
- Medicinal plant identification
- Traditional healing methods
- Preparation techniques
- Safety guidelines
- Cultural protocols

Registration Fee: R100 (includes materials)
Deadline: 5 days before workshop

Signature: ________________________
Date: ____________________________`;
}

function generateProjectDetailsPDF() {
    return `TSITSING KGOTLA YA RAKHUDU
COMMUNITY DEVELOPMENT PROJECTS

ONGOING PROJECTS:

1. Water Infrastructure Improvement
   - Status: 60% Complete
   - Budget: R2.5 Million
   - Expected Completion: September 2025

2. Community Center Renovation
   - Status: Planning Phase
   - Budget: R1.8 Million
   - Expected Start: August 2025

3. Youth Skills Development Program
   - Status: Active
   - Participants: 45 youth
   - Duration: 12 months

PLANNED PROJECTS:

1. Solar Street Lighting
   - Proposed Budget: R800,000
   - Timeline: October 2025

2. Traditional Garden Project
   - Proposed Budget: R350,000
   - Timeline: Spring 2025

COMMUNITY INPUT WELCOME
Contact the Kgotla office to share your ideas and suggestions.

For more information: info@tsitsingkgotla.co.za
Phone: +27 (0)12 345-6789`;
}

// Add loading animation for initial page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('nav-menu').classList.remove('show');
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add stagger effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add stagger effect to event items
    const events = document.querySelectorAll('.event-item');
    events.forEach((event, index) => {
        event.style.animationDelay = `${index * 0.2}s`;
    });
});