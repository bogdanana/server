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