// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple lightbox for gallery
const galleryItems = document.querySelectorAll('.gallery .item img');
galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section > .container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(section);
});

// Typewriter effect for hero title
const typewriterText = "Welcome to My Creative World";
const typewriterElement = document.querySelector('.hero-content h1');
let i = 0;

function typeWriter() {
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        // Pause before restarting
        setTimeout(() => {
            typewriterElement.innerHTML = '';
            i = 0;
            typeWriter();
        }, 2000); // 2 second pause
    }
}

// Start typewriter after page load
window.addEventListener('load', () => {
    typeWriter();
});

// EmailJS integration
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { // Replace with your service and template IDs
        from_name: this.from_name.value,
        from_email: this.from_email.value,
        message: this.message.value,
        to_email: "vincentsofficia0l1@gmail.com"
    }).then(function(response) {
        alert("Message sent successfully!");
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
    });
});