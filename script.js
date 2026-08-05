//Side navigation toggle
let showSideNavBtn = document.getElementById('show-side-nav');
let hideSideNavBtn = document.getElementById('hide-side-nav');
let sideNav = document.getElementById('side-nav');

function toggleSideNav() {
  sideNav.classList.toggle('visible');
}
showSideNavBtn.addEventListener('click',toggleSideNav);
hideSideNavBtn.addEventListener('click',toggleSideNav);


// FAQ toggle
var faqs = document.querySelectorAll('.faq');

function toggleFaq() {
  var answer = this.parentElement.querySelector('.answer');
  answer.classList.toggle('visible');
}

for (var i = 0; i < faqs.length; i++) {
  var question = faqs[i].querySelector('.question');
  question.addEventListener('click', toggleFaq);
}