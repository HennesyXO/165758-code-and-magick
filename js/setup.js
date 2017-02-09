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

function closeOnEscape(e) {
  if (e.keyCode === ESC_KEY_CODE) {
    e.preventDefault();
    setup.classList.add('invisible');
  }
}
function showSetupElement() {
  setup.classList.remove('invisible');
}

function hideSetupElement() {
  setup.classList.add('invisible');
}

function closeOnEnter(e) {
  if (e.keyCode === ENTER_KEY_CODE) {
    e.preventDefault();
    hideSetupElement();
  }
}

function openOnEnter(e) {
  if (e.keyCode === ENTER_KEY_CODE) {
    e.preventDefault();
    showSetupElement();
  }
}

function closeOnMouse(e) {
  e.preventDefault();
  hideSetupElement();
}

// Когда иконка пользователя в фокусе, то диалог настройки должен открываться по нажатию кнопки ENTER
setupOpen.addEventListener('keydown', openOnEnter);
setup.addEventListener('keydown', closeOnEscape);
setupClose.addEventListener('click', closeOnMouse);
setupClose.addEventListener('keydown', closeOnEnter);
submitBtn.addEventListener('click', closeOnMouse);
submitBtn.addEventListener('keydown', closeOnEnter);
 // =========================================

setupUserName.required = true;
setupUserName.maxLength = 50;

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
