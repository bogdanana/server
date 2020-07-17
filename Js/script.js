window.addEventListener('DOMContentLoaded', () => {

      //Modal 

      const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal');


      function openModal() {
            event.preventDefault();
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            return false;
      }

      modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
      });

      function closeModal() {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';
      }



      modal.addEventListener('click', (e) => {
            if (e.target == modal || e.target.getAttribute('data-close') == '') {
                  closeModal();
            }
      });

      document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                  closeModal();
            }
      });



      //Slider

      const slides = document.querySelectorAll('.offer__slide'),
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            total = document.querySelector('#total'),
            current = document.querySelector('#current'),
            slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            width = window.getComputedStyle(slidesWrapper).width,
            slidesField = document.querySelector('.offer__slider-inner');

      let slideIndex = 1;
      let offset = 0;


      slidesField.style.width = 100 * slides.length + '%';
      slidesField.style.display = 'flex';
      slidesField.style.transition = '0.5s all';

      slidesWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
            slide.style.width = width;
      });

      next.addEventListener('click', () => {

            if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
                  offset = 0;
            } else {
                  offset += +width.slice(0, width.length - 2);
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slide.length) {
                  slideIndex = 1;
            } else {
                  slideIndex++;
            }
      });

      prev.addEventListener('click', () => {

            if (offset == 0) {
                  offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            } else {
                  offset -= +width.slice(0, width.length - 2);
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                  slideIndex = slide.length;
            } else {
                  slideIndex--;
            }
      });


      // Forms 


      const forms = document.querySelectorAll('form');
      const btn = document.querySelector('.modal__content .btn');

      btn.setAttribute('type', "submit");

      const message = {
            loading: 'img/form/original.svg',
            success: 'Мы с вами скоро свяжемся!',
            failure: 'что то пошло не так...'
      };

      forms.forEach(item => {
            postData(item);
      });

      function postData(form) {
            form.addEventListener('click', (e) => {
                  e.preventDefault();

                  if (e.target.nodeName === "A") {

                        const statusMessage = document.createElement('img');
                        statusMessage.src = message.loading;
                        statusMessage.textContent = message.loading;
                        statusMessage.style.cssText = `
                  display: block;
                  margin: 0 auto; 
                  `;

                        form.insertAdjacentElement('afterend', statusMessage);

                        const request = new XMLHttpRequest();
                        request.open('POST', 'server.php');

                        request.setRequestHeader('Content-type', 'application/json');
                        const formData = new FormData(form);

                        const object = {};
                        formData.forEach(function (value, key) {
                              object[key] = value;
                        });

                        const json = JSON.stringify(object);

                        request.send(json);

                        request.addEventListener('load', () => {
                              if (request.status === 200) {
                                    console.log(request.response);
                                    showThanksModal(message.success);
                                    form.reset();
                                    statusMessage.remove();
                              } else {
                                    showThanksModal(message.failure);
                              }
                        });
                  }
            });
      }

      function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
            </div>
            `;

            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                  thanksModal.remove();
                  prevModalDialog.classList.add('show');
                  prevModalDialog.classList.remove('hide');
                  closeModal();
            }, 4000);
      }

      fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));



});