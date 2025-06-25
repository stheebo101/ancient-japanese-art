document.addEventListener('DOMContentLoaded', function() {
    // Get the image viewer elements
    const imageViewer = document.getElementById('imageViewer');
    const expandedImage = document.getElementById('expandedImage');
    const imageCaption = document.getElementById('imageCaption');
    const closeBtn = document.querySelector('.close-btn');
    
    // Get all art images
    const artImages = document.querySelectorAll('.art-image');
    
    // Add click event to each image
    artImages.forEach(img => {
        img.addEventListener('click', function() {
            // Get the full-size image path from data attribute
            const fullSizeSrc = this.getAttribute('data-full') || this.src;
            
            // Set the expanded image and caption
            expandedImage.src = fullSizeSrc;
            imageCaption.innerHTML = this.alt;
            
            // Show the viewer
            imageViewer.style.display = 'block';
            
            // Prevent scrolling on body
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close the viewer when clicking the X
    closeBtn.addEventListener('click', function() {
        imageViewer.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close the viewer when clicking outside the image
    imageViewer.addEventListener('click', function(e) {
        if (e.target === imageViewer) {
            imageViewer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close the viewer with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageViewer.style.display === 'block') {
            imageViewer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle window resize to keep image centered
    window.addEventListener('resize', function() {
        if (imageViewer.style.display === 'block') {
            const img = expandedImage;
            img.style.left = '50%';
            img.style.top = '50%';
            img.style.transform = 'translate(-50%, -50%)';
        }
    });
});