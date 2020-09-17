import { tns } from "tiny-slider/src/tiny-slider"

window.addEventListener('DOMContentLoaded', () => {

    const forms = require ('./modules/forms');
    const modal = require('./modules/modal');

    forms();
    modal();

    tns({
        container: '.my-slider',
        loop: true,
        items: 2,
        slideBy: 'page',
        nav: false,    
        autoplay: false,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: "#customize-controls",
        responsive: {
            640: {
                items: 3,
            },
            
            768: {
                items: 3,
            }
        }
    
      });
});