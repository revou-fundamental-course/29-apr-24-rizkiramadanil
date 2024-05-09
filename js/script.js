document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll('.banner');
    const bannerContainer = document.querySelector('.banner-container');
    
    function setBannerContainerHeight() {
        const activeBanner = document.querySelector('.banner.active');
        if (activeBanner) {
            bannerContainer.style.height = activeBanner.offsetHeight + 'px';
        }
    }
    
    function showBanner(index) {
        banners.forEach((banner, i) => {
            if (i === index) {
                banner.classList.add('active');
                banner.style.animation = 'slideInRight 1s ease-in-out';
            } else {
                banner.classList.remove('active');
                banner.style.animation = 'slideOutLeft 1s ease-in-out';
            }
        });
        
        setBannerContainerHeight();
    }
    
    function nextBanner() {
        const currentBannerIndex = Array.from(banners).findIndex(banner => banner.classList.contains('active'));
        const nextBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(nextBannerIndex);
    }
    
    setInterval(nextBanner, 5000);
    
    setBannerContainerHeight();
});


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('.contact-us-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const interestSelect = document.querySelector('select[name="interest"]');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name');
            nameInput.focus();
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return false;
        }
        
        if (interestSelect.value === '') {
            alert('Please select your interest');
            interestSelect.focus();
            return false;
        }
        
        alert('Form submitted successfully!');
        contactForm.reset();
    });
});