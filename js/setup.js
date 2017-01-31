'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

setupOpen.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function (e) {
  e.preventDefault();
  setup.classList.add('invisible');
});

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
