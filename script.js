// Get modal elements
const profileModal = document.getElementById("profileModal");
const merahModal = document.getElementById("merahModal");
const kuningModal = document.getElementById("kuningModal");
const hijauModal = document.getElementById("hijauModal");
const biruModal = document.getElementById("biruModal");

// Get buttons
const modalBtn = document.getElementById("modalBtn");
const merahBtn = document.getElementById("merahBtn");
const kuningBtn = document.getElementById("kuningBtn");
const hijauBtn = document.getElementById("hijauBtn");
const biruBtn = document.getElementById("biruBtn");

// Get all buttons for animation
const buttons = document.querySelectorAll(".pulse-effect");

// Get close buttons
const closeButtons = document.getElementsByClassName("close");

// Function to show modal with animation
function showModal(modal) {
    modal.style.display = "block";
    
    // Trigger reflow to make the transition work
    void modal.offsetWidth;
    
    // Add class to start the animation
    modal.classList.add("show");
}

// Function to hide modal with animation
function hideModal(modal) {
    modal.classList.remove("show");
    
    // Wait for transition to finish before hiding the modal
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// Button animation function
function addClickAnimation(button) {
    button.classList.add("active");
    
    setTimeout(() => {
        button.classList.remove("active");
    }, 400);
}

// Open profile modal with animation
modalBtn.onclick = function() {
    addClickAnimation(this);
    showModal(profileModal);
}

// Open red modal with animation
merahBtn.onclick = function() {
    addClickAnimation(this);
    showModal(merahModal);
}

// Open yellow modal with animation
kuningBtn.onclick = function() {
    addClickAnimation(this);
    showModal(kuningModal);
}

// Open green modal with animation
hijauBtn.onclick = function() {
    addClickAnimation(this);
    showModal(hijauModal);
}

// Open blue modal with animation
biruBtn.onclick = function() {
    addClickAnimation(this);
    showModal(biruModal);
}

// Close modals when clicking the close button
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        const modal = this.parentElement.parentElement;
        hideModal(modal);
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        hideModal(event.target);
    }
}