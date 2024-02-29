// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// ref fix .mjs : https://copyprogramming.com/howto/failed-to-load-module-script-because-of-a-disallowed-mime-type 
import Swiper from './node_modules/swiper/swiper-bundle.min.mjs';

// CDN
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }
});