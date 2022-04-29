const toggleNav = document.getElementById('toggleNav');
const body = document.getElementById('body');
const navList = document.getElementById('navList');


toggleNav.addEventListener('click', function() {
  body.classList.toggle('toggle-opacity');
  navList.style.opacity = '1';
})

const btn = document.getElementById('bamboo');
const model = document.getElementById('back');

btn.addEventListener('click', function() {
  model.classList.add('back-project--visible');
})
