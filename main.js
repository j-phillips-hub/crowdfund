const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const bgOpacity = document.getElementById('bgOpac');

const bambooRadio = document.getElementById('bambooRadio');
const bambooPopup = document.getElementById('bambooPopup');
const cardRadio = document.getElementsByClassName('card__radio');
const blackEditionRadio = document.getElementById('blackEditionRadio');
const blackEditionPopup = document.getElementById('blackEditionPopup');

// Opens pledge container
for (const elm of openModal) {
  elm.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add('is-visible');
    bgOpacity.classList.toggle('bg-opacity');
  });
}

// Closes pledge container
for (const elm of closeModal) {
  elm.addEventListener('click', function () {
    const modalId = this.dataset.close;
    document.getElementById(modalId).classList.remove('is-visible');
    bgOpacity.classList.toggle('bg-opacity');
  });
}

// Opens/Closes card popup
for (const radio of cardRadio) {
  radio.addEventListener('click', function () {
    if (bambooRadio.checked) {
      bambooPopup.classList.add('card--popup-visible');
      blackEditionPopup.classList.remove('card--popup-visible');
    } else if (blackEditionRadio.checked) {
      blackEditionPopup.classList.add('card--popup-visible');
      bambooPopup.classList.remove('card--popup-visible');
    } else {
      bambooPopup.classList.remove('card--popup-visible');
      blackEditionPopup.classList.remove('card--popup-visible');
    }
  });
}

// Updates total backers on 
const backProject = document.getElementById('backProject');
const totalBackers = document.getElementById('totalBackers');
let count = parseInt(totalBackers.innerHTML.replace(/,/, ''));

backProject.addEventListener('click', function () {
  count += 1;
  totalBackers.innerHTML = count;
});




