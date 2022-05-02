const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const bgOpacity = document.getElementById('bgOpac');

const cardRadio = document.getElementsByClassName('card__radio');
const bambooRadio = document.getElementById('bambooRadio');
const bambooPopup = document.getElementById('bambooPopup');
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

// Updates total backers on click
const backProject = '[data-backProject]';
const backProjectButtons = document.querySelectorAll(backProject);

const totalBackers = document.getElementById('totalBackers');
let count = parseInt(totalBackers.innerHTML.replace(/,/, ''));

for (const elm of backProjectButtons) {
  elm.addEventListener('click', function () {
    count += 1;
    totalBackers.innerHTML = count;
  });
}

// Date Countdown
const countDownDate = new Date('June 27, 2022 17:30:00').getTime(); // End Date Here
const daysLeft = document.getElementById('daysLeft');

const x = setInterval (function() {
  const todaysDate = new Date('May 2, 2022 16:58:00').getTime(); // Todays Date Here
  let countDown = countDownDate - todaysDate;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  document.getElementById('daysLeft').innerHTML = seconds;
});
