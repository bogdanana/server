import { tns } from "tiny-slider/src/tiny-slider"

window.addEventListener('DOMContentLoaded', () => {

    const forms = require ('./modules/forms');
    const modal = require('./modules/modal');
    // const slider = require('./modules/slider');

    forms();
    modal();
    // slider();

    tns({
        container: '.my-slider',
        loop: true,
        items: 1,
        slideBy: 'page',
        nav: false,    
        autoplay: true,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: "#customize-controls",
        responsive: {
            640: {
                items: 1,
            },
            
            768: {
                items: 2,
            }
        }
    
      });
    
    

});