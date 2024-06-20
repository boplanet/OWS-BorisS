document.addEventListener('DOMContentLoaded', () => {
    loadSpecialOffers();
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
}

async function loadSpecialOffers() {
    try {
        const response = await fetch('json/data.json');
        const offers = await response.json();

        const offersSection = document.getElementById('special-offers');

        offers.forEach(offer => {
            const offerDiv = document.createElement('div');
            offerDiv.classList.add('offer');

            offerDiv.innerHTML = `
                <img src="${offer.image}" alt="${offer.title}" />
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
            `;

            offersSection.appendChild(offerDiv);
        });
    } catch (error) {
        console.error('Greška:', error);
    }
}

function validateForm() {
    var form = document.getElementById('contactForm');
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    
    emailError.textContent = '';
    emailField.classList.remove('error');
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = 'Unesite ispravnu email adresu.';
        emailField.classList.add('error');
        return false;
    }
    
    return true;
}
