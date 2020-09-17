function forms() {

      // Forms 

      const forms = document.querySelectorAll('form');
      const btn = document.querySelector('.modal__content .btn');
      const nameInput = document.querySelector('[name=name]');
      const phoneInput = document.querySelector('[name=phone]');

      btn.setAttribute('type', "submit");

      const message = {
            loading: 'img/form/original.svg',
            success: 'Мы с вами скоро свяжемся!',
            failure: 'что то пошло не так...',
      };

      forms.forEach(item => {
            postData(item);
      });

      function confirmValidation() {
            if (nameInput.hasAttribute('data-valid') && phoneInput.hasAttribute('data-valid')) {
                  btn.classList.remove('btn__disabled');
                  btn.classList.add('btn');
            } else {
                  btn.classList.remove('btn');
                  btn.classList.add('btn__disabled');
            }
      }

      nameInput.addEventListener('input', () => {
            if (!nameInput.value) {
                  nameInput.setAttribute("data-invalid", "data-invalid");
                  nameInput.removeAttribute("data-valid");
                  confirmValidation();
            } else {
                  nameInput.setAttribute("data-valid", "data-valid");
                  nameInput.removeAttribute("data-invalid");
                  confirmValidation();
            }
      });

      phoneInput.addEventListener('input', () => {
            if (!phoneInput.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
                  phoneInput.setAttribute("data-invalid", "data-invalid");
                  phoneInput.removeAttribute("data-valid");
                  confirmValidation();
            } else if(!phoneInput.value) {
                  phoneInput.setAttribute("data-invalid", "data-invalid");
                  phoneInput.removeAttribute("data-valid");
                  confirmValidation();
            } else {
                  phoneInput.setAttribute("data-valid", "data-valid");
                  phoneInput.removeAttribute("data-invalid");
                  confirmValidation();
            }
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
}

module.exports = forms;