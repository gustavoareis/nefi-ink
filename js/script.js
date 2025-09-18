// Lightbox simples para a galeria
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = 2000;

    const imgClone = document.createElement('img');
    imgClone.src = img.src;
    imgClone.style.maxWidth = '90%';
    imgClone.style.maxHeight = '90%';

    lightbox.appendChild(imgClone);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});

// Scroll suave para links internos da navbar
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // compensar altura da navbar
        behavior: "smooth"
      });
    }
  });
});
