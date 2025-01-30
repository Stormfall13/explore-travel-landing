const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let currentSection = 0; 
const sections = document.querySelectorAll('section, footer');
const totalSections = sections.length;
let isScrolling = false; 

// Плавный переход между секциями
function scrollToSection(index) {
  if (index < 0 || index >= totalSections) return;
  isScrolling = true;
  currentSection = index;

  sections[index].scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => (isScrolling = false), 600);
}

// Обработчик скролла
window.addEventListener('wheel', (event) => {
  if (isScrolling) return;

  if (event.deltaY > 0) {
    scrollToSection(currentSection + 1);
  } else {
    scrollToSection(currentSection - 1);
  }
});

// Добавление эффекта появления блоков
const contents = document.querySelectorAll('.explore__wrapp-main, .way__wrapp-main, .featured__wrapp-main, .guides__wrapp-main, .testimonials__wrapp-main, .trending__wrapp-main, .footer__wrapp-main');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Удаляет наблюдение после появления
    }
  });
}, { threshold: 0.3 });

contents.forEach(content => observer.observe(content));

// Устанавливаем начальную секцию
scrollToSection(0);