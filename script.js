//Side navigation toggle
let showSideNavBtn = document.getElementById('show-side-nav');
let hideSideNavBtn = document.getElementById('hide-side-nav');
let sideNav = document.getElementById('side-nav');

function toggleSideNav() {
  sideNav.classList.toggle('visible');
}
showSideNavBtn.addEventListener('click',toggleSideNav);
hideSideNavBtn.addEventListener('click',toggleSideNav);


//FAQ toggle
let toggleFaqBtn = document.querySelectorAll('#toggle-faq-btn');
let faqAnswer = document.querySelectorAll('.answer');
function toggleFaqVisibility() {
  faqAnswer.classList.toggle('visible');
}
toggleFaqBtn.addEventListener('click', toggleFaqVisibility);