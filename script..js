// Task 7 & 9: Add new recommendations and show confirmation popup
document.addEventListener('DOMContentLoaded', function() {
    const recommendationForm = document.getElementById('recommendationForm');
    const recommendationsList = document.getElementById('recommendationsList');
    const modal = document.getElementById('confirmationModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const modalBtn = document.getElementsByClassName('modal-btn')[0];

    // Handle form submission
    recommendationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('recommenderName').value;
        const title = document.getElementById('recommenderTitle').value;
        const text = document.getElementById('recommendationText').value;
        
        // Create new recommendation card
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation-card';
        newRecommendation.innerHTML = `
            <p class="recommendation-text">"${text}"</p>
            <p class="recommender-name">- ${name}, ${title}</p>
        `;
        
        // Add to the list (Task 7)
        recommendationsList.appendChild(newRecommendation);
        
        // Reset form
        recommendationForm.reset();
        
        // Show confirmation popup (Task 9)
        modal.style.display = 'block';
    });

    // Close modal when clicking X
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking OK button
    modalBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Smooth scroll for home icon
    const homeIcon = document.querySelector('.home-icon');
    homeIcon.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const homeIcon = document.querySelector('.home-icon');
    if (window.pageYOffset > 100) {
        homeIcon.style.opacity = '1';
    } else {
        homeIcon.style.opacity = '0.7';
    }
});