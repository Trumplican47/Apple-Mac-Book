// Get the modal element
const modal = document.getElementById('videoModal');

// Get the close button inside the modal
const closeBtn = modal.querySelector('.close');

// Function to open the video modal
function openVideoModal() {
    modal.style.display = 'block';
}

// Function to close the video modal
closeBtn.onclick = function () {
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// You can optionally call openVideoModal() here if you want the modal to open automatically when the page loads
// openVideoModal();
