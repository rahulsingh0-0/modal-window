'use strict';
const btnshowModal = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
const myFun = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const myFun2 = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', myFun);
}
btncloseModal.addEventListener('click', myFun2);
overlay.addEventListener('click', myFun2);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    myFun2();
  }
});
