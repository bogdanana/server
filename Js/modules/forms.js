function forms() {

      // Forms 

      const forms = document.querySelectorAll('form');
      const btn = document.querySelector('.modal__content .btn');
      const inputs = document.querySelectorAll('input');
      const name = document.querySelector('[name=name]');
      console.log(name);

      btn.setAttribute('type', "submit");

      const message = {
            loading: 'img/form/original.svg',
            success: 'Мы с вами скоро свяжемся!',
            failure: 'что то пошло не так...'
      };

      forms.forEach(item => {
            postData(item);
      });

      function checkBtn() {
            if (btn.hasAttribute("data-invalid")) {
                  btn.classList.add('btn__disabled');
                  btn.classList.remove('btn');
            } else {
                  btn.classList.add('btn');
                  btn.classList.remove('btn__disabled');
            }
      }

      name.addEventListener('input', (e) => {
            e.preventDefault();
            if (name.value.match(/\D/g)) {
                  name.style.border = '1px solid red';
                  btn.setAttribute('data-invalid', 'data-invalid');
            } else {
                  name.style.border = 'none';
                  btn.removeAttribute('data-invalid', 'data-invalid');
            }
            checkBtn();
      });

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