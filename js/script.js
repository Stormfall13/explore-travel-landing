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


if(window.innerWidth > '991'){
  
  let currentSection = 0; // Текущая секция
  const sections = document.querySelectorAll('section, footer, header'); // Все секции
  const totalSections = sections.length; // Общее количество секций
  let isScrolling = false; // Флаг для предотвращения быстрого переключения

  // Функция для перемещения к секции
  function scrollToSection(index) {
    if (index < 0 || index >= totalSections) return; // Проверка границ
    isScrolling = true; // Устанавливаем флаг
    currentSection = index; // Обновляем текущую секцию

    // Прокручиваем к секции с плавным эффектом
    sections[index].scrollIntoView({ behavior: 'smooth' });

    // Сбрасываем флаг через 1 секунду
    setTimeout(() => (isScrolling = false), 1000);
  }

  // Обработчик события прокрутки
  window.addEventListener('wheel', (event) => {
    if (isScrolling) return; // Если анимация в процессе, ничего не делаем

    if (event.deltaY > 0) {
      // Прокрутка вниз
      scrollToSection(currentSection + 1);
    } else {
      // Прокрутка вверх
      scrollToSection(currentSection - 1);
    }
  });

  // Устанавливаем начальную секцию (опционально)
  scrollToSection(0);
  
}

const headerHeight = document.querySelector('.header').offsetHeight;
const exploreSection = document.querySelector('.explore')
exploreSection.style.padding = `${headerHeight} 5px 0 5px`


// Функция-обработчик появления элемента
const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry)
    
    if (entry.isIntersecting) {
      // Добавляем класс с анимацией
      entry.target.classList.add('animate');
      
      // Если анимация однократная, прекращаем наблюдение
      observer.unobserve(entry.target);
    }
  });
};

// Создаем наблюдатель
const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.5 // Срабатывает, когда элемент виден на 50%
});


// Находим все элементы, которые нужно анимировать
const elementsToAnimate = document.querySelectorAll('.explore, .way, .featured, .guides, .testimonials, .trending, .footer');
elementsToAnimate.forEach(element => observer.observe(element));