document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const images = document.querySelectorAll('.clickable-image');
  
    images.forEach(img => {
      img.addEventListener('click', function() {
        const fullSizeSrc = this.getAttribute('data-full') || this.src;
        modalImg.src = fullSizeSrc;
        captionText.innerHTML = this.alt;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });
  