// Open Modal
function openModal(projectId) {
    const modal = document.getElementById('modal' + projectId);
    modal.classList.remove('hidden');  // Remove hidden class to show the modal
    modal.classList.add('flex');  // Make it a flex container (for centering)
    
    // Add fade-in animation
    setTimeout(() => modal.classList.add('opacity-100'), 10);  // Delays opacity for smooth transition
}

// Close Modal
function closeModal(projectId) {
    const modal = document.getElementById('modal' + projectId);
    
    // Fade out the modal
    modal.classList.remove('opacity-100');
    setTimeout(() => modal.classList.add('hidden'), 300);  // Delay hiding for smooth fade-out
}

// Close Modal when clicking outside the modal content area
window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        closeModal(1);
    }
}
