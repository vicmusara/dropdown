import Dropdown from 'dropdown.js';
import Carousel from 'carousel.js';

// Initialize dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => new Dropdown(dropdown));

// Initialize carousel
const carousels = Array.from(document.querySelectorAll('.carousel'));
carousels.forEach(carousel => new Carousel(carousel));
