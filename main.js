const bookmark = document.getElementById('bookmark');
const bookmarkCyan = document.getElementById('bookmarkCyan');
const bookmarked = document.getElementById('bookmarked');
const bookmarkedPar = document.getElementById('bookmarkedPar');
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
const mahoganyRadio = document.getElementById('mahoganyRadio');
const mahoganyPopup = document.getElementById('mahoganyPopup');
const mediaQueryDesktop = window.matchMedia('(min-width: 768px)');
const mediaQueryMobile = window.matchMedia('(max-width: 768px)');

// Bookmark Animation
bookmark.addEventListener('click', function() {
  if (mediaQueryDesktop.matches) {
    bookmarked.classList.toggle('bookmarked');
    bookmarkedPar.classList.toggle('bookmarked__par--hidden');
    bookmark.classList.add('bookmark__img--hidden');
    bookmarkCyan.classList.add('bookmark__img--cyan-visible');
  } else if (mediaQueryMobile.matches) {
    bookmark.classList.add('bookmark__img--hidden');
    bookmarkCyan.classList.add('bookmark__img--cyan-visible');
  }
});

bookmarkCyan.addEventListener('click', function() {
  if (mediaQueryDesktop.matches) {
    bookmarked.classList.toggle('bookmarked');
    bookmarkedPar.classList.toggle('bookmarked__par--hidden');
    bookmark.classList.remove('bookmark__img--hidden');
    bookmarkCyan.classList.remove('bookmark__img--cyan-visible');
  } else if (mediaQueryMobile.matches) {
    bookmark.classList.remove('bookmark__img--hidden');
    bookmarkCyan.classList.remove('bookmark__img--cyan-visible');
  }
});

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
      mahoganyPopup.classList.remove('card--popup-visible');
    } else if (blackEditionRadio.checked) {
      blackEditionPopup.classList.add('card--popup-visible');
      bambooPopup.classList.remove('card--popup-visible');
      mahoganyPopup.classList.remove('card--popup-visible');
    } else if (mahoganyRadio.checked) {
      mahoganyPopup.classList.add('card--popup-visible');
      bambooPopup.classList.remove('card--popup-visible');
      blackEditionPopup.classList.remove('card--popup-visible');
    } else {
      bambooPopup.classList.remove('card--popup-visible');
      blackEditionPopup.classList.remove('card--popup-visible');
      mahoganyPopup.classList.remove('card--popup-visible');
    }
  });
}

const inputs = '[data-input]';
const backProjectInputs = document.querySelectorAll(inputs);
const bambooInput = document.getElementById('bambooInput');
const blackEditionInput = document.getElementById('blackEditionInput');
const mahoganyInput = document.getElementById('mahoganyInput');

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

// BAMBOO BACK PROJECT
const bambooPrizesLeft = '[data-bambooAmountLeft]';
const allBambooPrizesLeft = document.querySelectorAll(bambooPrizesLeft);
const bambooCard = document.getElementById('bambooCard');
const bambooModalCard = document.getElementById('bambooModalCard');
const bambooRewardBtn = document.getElementById('bambooRewardBtn');

function subBambooPrizeCount() {
  for (const prize of allBambooPrizesLeft) {
    let bambooPrizeCount = parseInt(prize.innerHTML);
    bambooPrizeCount -= 1;
    prize.innerHTML = bambooPrizeCount;

    if (bambooPrizeCount == 0) {
      bambooCard.classList.add('card--out-of-stock');
      bambooModalCard.classList.add('card--out-of-stock');
      bambooPopup.classList.remove('card--popup-visible');
      bambooRewardBtn.classList.add('btn--disabled');
      bambooRewardBtn.innerHTML = 'Out of Stock';
    }
  }
}

const backBambooProject = '[data-backBambooProject]';
const bambooButtons = document.querySelectorAll(backBambooProject);

const amountBacked = document.getElementById('amountBacked');
const totalBackers = document.getElementById('totalBackers');
let count = parseInt(totalBackers.innerHTML.replace(',', ''));
const progressBar = document.getElementById('progressBar');

function progressBarStep() {
  let width = parseInt(amountBacked.innerHTML) * 0.001;
  progressBar.style.width = width + '%';
}

for (const elm of bambooButtons) {
  elm.addEventListener('click', function () {
    count += 1;
    totalBackers.innerHTML = count;
    window.scrollTo(0, 0);

    let totalBacked = parseInt(amountBacked.innerHTML) + inputValue;
    amountBacked.innerHTML = totalBacked;

    subBambooPrizeCount();
    progressBarStep();
  });
}

// BLACK EDITION BACK PROJECT
const blackEditionPrizesLeft = '[data-blackEditionAmountLeft]';
const allBlackEditionPrizesLeft = document.querySelectorAll(blackEditionPrizesLeft);
const blackEditionCard = document.getElementById('blackEditionCard');
const blackEditionModalCard = document.getElementById('blackEditionModalCard');
const blackEditionRewardBtn = document.getElementById('blackEditionRewardBtn');

function subBlackEditionPrizeCount() {
  for (const prize of allBlackEditionPrizesLeft) {
    let blackEditionPrizeCount = parseInt(prize.innerHTML);
    blackEditionPrizeCount -= 1;
    prize.innerHTML = blackEditionPrizeCount;

    if (blackEditionPrizeCount == 0) {
      blackEditionCard.classList.add('card--out-of-stock');
      blackEditionModalCard.classList.add('card--out-of-stock');
      blackEditionPopup.classList.remove('card--popup-visible');
      blackEditionRewardBtn.classList.add('btn--disabled');
      blackEditionRewardBtn.innerHTML = 'Out of Stock';
    }
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
    progressBarStep();
  });
}

// MAHOGANY BACK PROJECT
const mahoganyPrizesLeft = '[data-mahoganyAmountLeft]';
const allMahoganyPrizesLeft = document.querySelectorAll(mahoganyPrizesLeft);
const mahoganyCard = document.getElementById('mahoganyCard');
const mahoganyModalCard = document.getElementById('mahoganyModalCard');
const mahoganyRewardBtn = document.getElementById('mahoganyRewardBtn');

function subMahoganyPrizeCount() {
  for (const prize of allMahoganyPrizesLeft) {
    let mahoganyPrizeCount = parseInt(prize.innerHTML);
    mahoganyPrizeCount -= 1;
    prize.innerHTML = mahoganyPrizeCount;

    if (mahoganyPrizeCount == 0) {
      mahoganyCard.classList.add('card--out-of-stock');
      mahoganyModalCard.classList.add('card--out-of-stock');
      mahoganyPopup.classList.remove('card--popup-visible');
      mahoganyRewardBtn.classList.add('btn--disabled');
      mahoganyRewardBtn.innerHTML = 'Out of Stock';
    }
  }
}

const backMahoganyProject = '[data-backMahoganyProject]';
const mahoganyButtons = document.querySelectorAll(backMahoganyProject);

for (const elm of mahoganyButtons) {
  elm.addEventListener('click', function () {
    count += 1;
    totalBackers.innerHTML = count;
    window.scrollTo(0, 0);

    let totalBacked = parseInt(amountBacked.innerHTML) + inputValue;
    amountBacked.innerHTML = totalBacked;

    subMahoganyPrizeCount();
    progressBarStep();
  });
}

// Date Countdown
const countDownDate = new Date('July 07, 2022 18:52:25').getTime(); // End Date
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