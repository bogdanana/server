/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

 function modal() {

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
 }

 module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {

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
}

module.exports = slider;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    const forms = __webpack_require__ (/*! ./modules/forms */ "./js/modules/forms.js");
    const modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
    const slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

    forms();
    modal();
    slider();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map