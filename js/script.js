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


function handleScreenSizeChange(e) {
  if (e.matches) {
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
  }
}

const mediaQuery = window.matchMedia("(min-width: 992px)");
mediaQuery.addEventListener("change", handleScreenSizeChange);


handleScreenSizeChange(mediaQuery);



function handleScreenSizeChangeAdaptive(x) {
  if (x.matches) {
    const header = document.querySelector('.header')
    const headerHeight = header.offsetHeight;
    const explore = document.querySelector('.explore')
    explore.style.paddingTop = `${headerHeight}px`
  }
}

const mediaQueryAdaprive = window.matchMedia("(max-width: 992px)");
mediaQueryAdaprive.addEventListener("change", handleScreenSizeChangeAdaptive);

// Вызываем функцию сразу, чтобы проверить текущее состояние
handleScreenSizeChangeAdaptive(mediaQueryAdaprive);


const burger = document.querySelector('.burger')
const closeMenu = document.querySelector('.close')
const mainMenu = document.querySelector('.main__menu')

burger.addEventListener('click', () => {
  mainMenu.style.transform = 'translate(0)'
})

closeMenu.addEventListener('click', () => {
  mainMenu.style.transform = ''
})