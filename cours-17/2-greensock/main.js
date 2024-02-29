import { gsap } from './node_modules/gsap/all.js';
//import { gsap } from 'gsap';


/**
 * Tween au clic d'un bouton
 */
let elBox = document.querySelector('[data-js-box]'),
    windowWidth = window.innerWidth,
    elGsapActions = document.querySelector('[data-js-gsap]');

