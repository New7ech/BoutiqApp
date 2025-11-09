/**
 * TechShop Portfolio Website
 * Author: Jules
 * Version: 1.0
 *
 * This script handles dynamic content generation for products
 * and form validation for the contact page.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Product Data ---
    const allProducts = [
        { name: 'Smartphone X', price: '799 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Smartphone+X' },
        { name: 'Casque Audio Pro', price: '249 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Casque+Audio' },
        { name: 'Montre Connectée', price: '349 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Montre' },
        { name: 'Ordinateur Portable Z', price: '1499 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Laptop+Z' },
        { name: 'Tablette 10"', price: '499 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Tablette' },
        { name: 'Enceinte Bluetooth', price: '129 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Enceinte' },
        { name: 'Drone 4K', price: '899 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Drone' },
        { name: 'Caméra de Sécurité', price: '199 €', image: 'https://via.placeholder.com/300x200.png/1b263b/41e0d0?text=Caméra' }
    ];

    /**
     * Creates a product card element.
     * @param {object} product - The product data.
     * @returns {HTMLElement} The product card element.
     */
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
        `;
        return productCard;
    }

    // --- Dynamic Product Grids ---
    const promotionsGrid = document.getElementById('promotions-grid');
    const productCatalogGrid = document.getElementById('product-catalog-grid');

    // Populate promotions grid on the homepage
    if (promotionsGrid) {
        const promotionProducts = allProducts.slice(0, 4);
        promotionProducts.forEach(product => {
            promotionsGrid.appendChild(createProductCard(product));
        });
    }

    // Populate product catalog on the products page
    if (productCatalogGrid) {
        allProducts.forEach(product => {
            productCatalogGrid.appendChild(createProductCard(product));
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                const formStatus = document.getElementById('form-status');
                formStatus.textContent = 'Message envoyé avec succès !';
                formStatus.style.color = 'var(--accent-color)';
                contactForm.reset();
            }
        });

        /**
         * Validates the entire contact form.
         * @returns {boolean} True if the form is valid, false otherwise.
         */
        function validateForm() {
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Validate Name
            if (name.value.trim() === '') {
                showError(name, 'Le nom est requis.');
                isValid = false;
            } else {
                hideError(name);
            }

            // Validate Email
            if (email.value.trim() === '') {
                showError(email, "L'email est requis.");
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, "L'email n'est pas valide.");
                isValid = false;
            } else {
                hideError(email);
            }

            // Validate Message
            if (message.value.trim() === '') {
                showError(message, 'Le message est requis.');
                isValid = false;
            } else {
                hideError(message);
            }

            return isValid;
        }

        /**
         * Shows an error message for a form field.
         * @param {HTMLElement} input - The input element.
         * @param {string} message - The error message.
         */
        function showError(input, message) {
            const formGroup = input.parentElement;
            const errorMessage = formGroup.querySelector('.error-message');
            input.classList.add('invalid');
            errorMessage.textContent = message;
        }

        /**
         * Hides the error message for a form field.
         * @param {HTMLElement} input - The input element.
         */
        function hideError(input) {
            const formGroup = input.parentElement;
            const errorMessage = formGroup.querySelector('.error-message');
            input.classList.remove('invalid');
            errorMessage.textContent = '';
        }

        /**
         * Validates an email address.
         * @param {string} email - The email address to validate.
         * @returns {boolean} True if the email is valid, false otherwise.
         */
        function isValidEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
});
