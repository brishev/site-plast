document.addEventListener('DOMContentLoaded', () => {
    // Кнопки "Связаться"
    document.querySelectorAll('.contact-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const product = btn.getAttribute('data-product');
        const phone = '77084027519';
        const message = encodeURIComponent(`Здравствуйте! Интересует продукт: ${product}`);
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
      });
    });
  
    // Модальное окно
    const modal = document.getElementById('modal');
    const modalClose = modal.querySelector('.close-modal');
    const modalTriggers = document.querySelectorAll('.open-modal');
  
    modalTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
      });
    });
  
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    const TELEGRAM_TOKEN = '7664895421:AAF1QezsJBk7AFhfAkS3R6s5c-ePhFb85Wc'; // вставь свой
    const TELEGRAM_CHAT_ID = '760863418';  // вставь свой

    document.getElementById('modal-form').addEventListener('submit', e => {
        e.preventDefault();
  
        const form = e.target;
        const name = form.querySelector('input[type=text]').value.trim();
        const phone = form.querySelector('input[type=tel]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        const text = `📥 Новая заявка с сайта:%0A👤 Имя: ${name}%0A📞 Телефон: ${phone}%0A📝 Комментарий: ${message || '-'}`;

        fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${text}`, {
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                alert('Заявка отправлена!');
                form.reset();
                document.getElementById('modal').style.display = 'none';
            } else {
                alert('Ошибка отправки. Попробуйте позже.');
            }
        })
        .catch(() => {
            alert('Ошибка сети.');
        });
    });
  
    // Инициализация Swiper
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: { el: '.swiper-pagination' },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  });