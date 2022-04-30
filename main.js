const toggleNav = document.getElementById('toggleNav');
const body = document.getElementById('body');
const navList = document.getElementById('navList');

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const dataPledge = '[data-pledge]';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const pledgeContinue = document.querySelectorAll(dataPledge);

// Toggles mobile nav
toggleNav.addEventListener('click', function() {
  body.classList.toggle('toggle-opacity');
  navList.style.opacity = '1';
});

// Opens pledge container on select reward
for (const elm of openModal) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add('is-visible');
  });
}

// Closes pledge container on X
for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    document.getElementById('selectReward').classList.remove('is-visible');
  });
}

// Closes pledge container on continue
for (const elm of pledgeContinue) {
  elm.addEventListener('click', function(){
    document.getElementById('selectReward').classList.remove('is-visible');
  });
}

