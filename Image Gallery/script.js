// Select elements
const galleryItems = document.querySelectorAll('.gallery .image img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'block';
  });
});

// Show image in lightbox
function showImage() {
  lightboxImg.src = galleryItems[currentIndex].src;
}

// Next / Previous navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Filter functionality
filterBtns.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const category = button.dataset.category;
    document.querySelectorAll('.gallery .image').forEach(imgBox => {
      if (category === 'all' || imgBox.dataset.category === category) {
        imgBox.style.display = 'block';
      } else {
        imgBox.style.display = 'none';
      }
    });
  });
});
