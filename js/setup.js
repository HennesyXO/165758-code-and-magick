'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var submitBtn = document.querySelector('.setup-submit');

setupOpen.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.remove('invisible');
});

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// function pressEnter() {
//   e.preventDefault();
//   setup.classList.remove('invisible');
// }

// function pressESC(e) {
//   e.preventDefault();
//   setup.classList.add('invisible');
// }
// Когда иконка пользователя в фокусе, то диалог настройки должен открываться по нажатию кнопки ENTER
setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEY_CODE) {
    e.preventDefault();
    setup.classList.remove('invisible');
  }
});
// Когда диалог открыт, то клавиша ESC должна закрывать диалог.
setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ESC_KEY_CODE) {
    e.preventDefault();
    setup.classList.add('invisible');
  }
});

setupClose.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.add('invisible');
});
// Если диалог открыт и фокус находится на крестике, то нажатие клавиши ENTER приводит к закрытию диалога.
setupClose.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEY_CODE) {
    e.preventDefault();
    setup.classList.add('invisible');
  }
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.add('invisible');
});

submitBtn.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEY_CODE) {
    e.preventDefault();
    setup.classList.add('invisible');
  }
});
 // && e.keyCode === ENTER_KEY_CODE

setupUserName.required = true;
setupUserName.maxLength = 50;
setupUserName.value = '';

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

wizardCoat.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * coatColors.length);
  wizardCoat.style.fill = coatColors[colorNumber];
});

var wizardEyes = document.querySelector('#wizard-eyes');
var eyeColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  var eyeColorNumber = Math.floor(Math.random() * eyeColors.length);
  wizardEyes.style.fill = eyeColors[eyeColorNumber];
});

var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

fireball.addEventListener('click', function () {
  var fireballNumber = Math.floor(Math.random() * fireballColors.length);
  fireball.style.background = fireballColors[fireballNumber];
});
