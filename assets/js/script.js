document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('burger-btn');
    var burgerMenu = document.getElementById('burger-menu'); // Предполагается, что у вас есть элемент с ID "burger-menu"
    
    if (menuButton) { // Проверка, существует ли кнопка
        menuButton.addEventListener('click', function() {
            if (!this.classList.contains('on_menu')) {
                this.classList.add('on_menu');

                // Добавление класса 'show' к элементу burger-menu
                if (burgerMenu) {
                    burgerMenu.classList.add('show');
                }
            } else {
                this.classList.remove('on_menu');

                // Удаление класса 'show' у элемента burger-menu
                if (burgerMenu) {
                    burgerMenu.classList.remove('show');
                }
            }
            return false; // Предотвращает переход по ссылке, если кнопка является ссылкой
        });
    } else {
        console.error('Element with ID "burger-btn" not found.');
    }
});



// accordion


document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');
    
      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }
            
           e.currentTarget.classList.toggle('active')
        })
      })
});



// pop-up
document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.btn-pop-up').forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelector('.pop-up').classList.add('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.close-pop-up').forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.pop-up').classList.remove('show');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-to-check').forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.pop-up-form').classList.add('checked');
      });
  });
});