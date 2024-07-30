import { createApp } from 'vue'
import Gallery from '../../Gallery.vue'
createApp(Gallery).mount('body')

let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const headerElement = document.querySelector('.header');
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition >= 70) {
        headerElement.style.backgroundColor = "white";
        headerElement.style.top = "0";
    }

    lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});


const bodyElement = document.querySelector('body')
bodyElement.style.backgroundImage = 'none';