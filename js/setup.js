'use strict';
const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = document.querySelector('.setup-close');
const setupUserName = document.querySelector('.setup-user-name');
const wizardCoat = document.querySelector('#wizard-coat[style=fill]');

setupOpen.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.add('invisible');
});

setupUserName.required = true;
setupUserName.maxlength = 50;
setupUserName.value = '';

// var coatColors = {
//     rgb(101, 137, 164),
//     rgb(241, 43, 107),
//     rgb(146, 100, 161),
//     rgb(56, 159, 117),
//     rgb(215, 210, 55),
//     rgb(0, 0, 0)
// }
//  for (var i = 0; i < coatColors.length ;  i++) {
//    coatColors[i]
//  }

// var eyeColors = {
//     black,
//     red,
//     blue,
//     yellow,
//     green
// }

// var fireballWrap = {
//       #ee4830,
//     #30a8ee,
//     #5ce6c0,
//     #e848d5,
//     #e6e848
// }

