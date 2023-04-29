const menuBar = document.querySelector('.nav-menu-btn-wrap');
const navBar = document.querySelector('.nav-content .nav-items');

menuBar.addEventListener('click', () => {
  navBar.classList.toggle('active');
});