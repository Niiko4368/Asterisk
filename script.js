const menuButton = document.querySelector('.menu');
const menuOptions = document.getElementById('menuOptions');

menuButton.addEventListener('click', () => {
  if (menuOptions.style.display === 'block') {
    menuOptions.style.display = 'none';
  } else {
    menuOptions.style.display = 'block';
  }
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});
