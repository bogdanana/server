function forms() {

      // Forms 

      const forms = document.querySelectorAll('form');
      const btn = document.querySelector('.modal__content .btn');
      const inputs = document.querySelectorAll('.modal__content input');
      const nameInput = document.querySelector('[name=name]');
      const phoneInput = document.querySelector('[name=phone]');
      const postInput = document.querySelector('[name=postoffice]');

      btn.setAttribute('type', "submit");

      const message = {
            loading: 'img/form/original.svg',
            success: 'Мы с вами скоро свяжемся!',
            failure: 'что то пошло не так...',
            validation: 'Заполните все формы!'
      };

      forms.forEach(item => {
            postData(item);
      });

      inputs.forEach(item => {
            validation(item);
      });

      function confirmValidation() {
            if (nameInput.hasAttribute('data-invalid') && phoneInput.hasAttribute('data-invalid') && postInput.hasAttribute('data-invalid')) {
                  console.log(nameInput.hasAttribute('data-invalid') && nameInput.hasAttribute('data-invalid') && nameInput.hasAttribute('data-invalid'));
                  btn.classList.add('btn__disabled');
                  btn.classList.remove('btn');
            } else {
                  btn.classList.add('btn');
                  btn.classList.remove('btn__disabled');
            }
      }



      function validation(input) {
            input.addEventListener('input', (e) => {
                  e.preventDefault();
                  if (input.value.match(/\D/g)) {
                        input.style.border = '1px solid red';
                        input.setAttribute("data-invalid", "data-invalid");
                        confirmValidation();
                  } else {
                        input.style.border = 'none';
                        input.removeAttribute("data-invalid");
                        confirmValidation();
                  }
            });
      }

      // inputs.forEach(item => {
      //       validation(item, validationForm);
      // });

      // function validationForm() {
      //       console.log('Hi');
      //        console.log(isValid());
      //       if (!isValid()) {
      //             btn.classList.add('btn');
      //             btn.classList.remove('btn__disabled');
      //       } else {
      //             btn.classList.add('btn__disabled');
      //             btn.classList.remove('btn');
      //       }
      // }

      // function isValid() {
      //       inputs.forEach(item => {
      //             if (item.hasAttribute("data-invalid")) {
      //                   console.log('test');
      //                   return false;

      //             } else {
      //                   console.log('noTest');
      //                   return true;
      //             }
      //       });
      // }

      // function validation(input, callback) {
      //       input.addEventListener('input', (e) => {
      //             if (input.value.match(/\D/g)) {
      //                   input.style.border = '1px solid red';
      //                   btn.classList.add('data-invalid');
      //             } else {
      //                   input.style.border = 'none';
      //                   btn.classList.remove('data-invalid');
      //             }
      //       });
      //       callback();
      // }













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