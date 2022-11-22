'use script';

const windowModal = document.querySelector('.mobile-nav');
const btnOpenMenu = document.querySelector('.hamburger-icon');
const btnCloseMenu = document.querySelector('.btn-close');
const sectionLink = document.querySelector('.link');

// OPEN AND CLOSE MENU WINDOW
const openMenu = function () {
  windowModal.classList.remove('hidden');
};
const closeMenu = function () {
  windowModal.classList.add('hidden');
};
btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
sectionLink.addEventListener('click', closeMenu);

//