const menuBar = document.querySelector('.nav-menu-btn-wrap');
const navBar = document.querySelector('.nav-content .nav-items');

menuBar.addEventListener('click', () => {

  if (navBar.classList.contains('active')) {
    document.querySelector('.nav-menu-content').classList.remove('show');
    setTimeout(() => {
      navBar.classList.remove('active');
    }, 400);
  }
  else{
    navBar.classList.add('active');
    setTimeout(() => {
      document.querySelector('.nav-menu-content').classList.add('show');
    }, 400);
  }
});