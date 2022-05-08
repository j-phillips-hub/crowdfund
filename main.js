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
    window.scrollTo(0, 0);
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

const inputs = '[data-input]';
const backProjectInputs = document.querySelectorAll(inputs);
const bambooInput = document.getElementById('bambooInput');
const blackEditionInput = document.getElementById('blackEditionInput');

let inputValue = 0.0; // Default Value

function validateFloat(s) {
  RegX = /^[0-9]*\.?[0-9]*$/;
  return s.match(RegX);
}

// Get Input Values
for (const input of backProjectInputs) {
  input.addEventListener('input', function () {
    // Replaces comma input with period
    if (input.value.includes(',')) {
      input.value = input.value.replace(',', '.');
    }
    // Cuts out all invalid characters 
    if (!validateFloat(input.value)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
    inputValue = parseFloat(input.value);
  });
}




// ADD DISABLED STATE ON 0 LEFT,, ADD MAHOGANY COUNT

// BAMBOO BACK PROJECT
const bambooPrizesLeft = '[data-bambooAmountLeft]';
const allBambooPrizesLeft = document.querySelectorAll(bambooPrizesLeft);

function subBambooPrizeCount() {
  for (const prize of allBambooPrizesLeft) {
    let bambooPrizeCount = parseInt(prize.innerHTML);
    bambooPrizeCount -= 1;
    prize.innerHTML = bambooPrizeCount;
  }
}

const backBambooProject = '[data-backBambooProject]';
const bambooButtons = document.querySelectorAll(backBambooProject);

const amountBacked = document.getElementById('amountBacked');
const totalBackers = document.getElementById('totalBackers');
let count = parseInt(totalBackers.innerHTML.replace(',', ''));

for (const elm of bambooButtons) {
  elm.addEventListener('click', function () {
    count += 1;
    totalBackers.innerHTML = count;
    window.scrollTo(0, 0);

    let totalBacked = parseInt(amountBacked.innerHTML) + inputValue;
    amountBacked.innerHTML = totalBacked;

    subBambooPrizeCount();
  });
}

// BLACK EDITION BACK PROJECT
const blackEditionPrizesLeft = '[data-blackEditionAmountLeft]';
const allBlackEditionPrizesLeft = document.querySelectorAll(blackEditionPrizesLeft);

function subBlackEditionPrizeCount() {
  for (const prize of allBlackEditionPrizesLeft) {
    let blackEditionPrizeCount = parseInt(prize.innerHTML);
    blackEditionPrizeCount -= 1;
    prize.innerHTML = blackEditionPrizeCount;
  }
}

const backBlackEditionProject = '[data-backBlackEditionProject]';
const blackEditionButtons = document.querySelectorAll(backBlackEditionProject);

for (const elm of blackEditionButtons) {
  elm.addEventListener('click', function () {
    count += 1;
    totalBackers.innerHTML = count;
    window.scrollTo(0, 0);

    let totalBacked = parseInt(amountBacked.innerHTML) + inputValue;
    amountBacked.innerHTML = totalBacked;

    subBlackEditionPrizeCount();
  });
}

// MAHOGANY BACK PROJECT








// Date Countdown
const countDownDate = new Date('June 27, 2022 18:52:25').getTime(); // End Date
const daysLeft = document.getElementById('daysLeft');

const x = setInterval(function () {
  const todaysDate = new Date().getTime(); // Todays Date
  let countDown = countDownDate - todaysDate;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  document.getElementById('daysLeft').innerHTML = days;
}, 1000);


