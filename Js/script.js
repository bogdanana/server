window.addEventListener('DOMContentLoaded', () => {

      //Modal 

      const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');

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

      modalCloseBtn.addEventListener('click', closeModal);

      modal.addEventListener('click', (e) => {
            if (e.target == modal) {
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
            loading: 'загрузка',
            success: 'успех',
            failure: 'что то пошло не так...'
      };

      forms.forEach(item => {
            postData(item);
      });

      function postData(form) {
            form.addEventListener('click', (e) => {
                  e.preventDefault();

                  if (e.target.nodeName === "A") {
                        const statusMessage = document.createElement('div');
                        statusMessage.classList.add('status');
                        statusMessage.textContent = message.loading;
                        form.append(statusMessage);

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
                                    statusMessage.textContent = message.success;
                                    form.reset();
                                    setTimeout(() => {
                                          statusMessage.remove();
                                    }, 2000);
                              } else {
                                    statusMessage.textContent = message.failure;
                              }
                        });
                  }
            });
      }

});