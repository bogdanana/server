window.addEventListener('DOMContentLoaded', () => {
      
      //Modal 

      const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');
      console.log(modalTrigger);

      function openModal() {
            event.preventDefault();
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
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

});