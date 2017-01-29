'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');

var inputTitle = document.querySelector('#title');
var inputPrice = document.querySelector('#price');
var inputAddress = document.querySelector('#address');

var clickPin = function () {
  pins.addEventListener('click', function () {
    pins.classList.add('pin--active');
    for (var j = 0; j < pins.length; j++) {
      pins[j].classList.remove('pin--active');
    }
    dialog.style.display = 'block';
  });
};

for (var i = 0; i < pins.length; i++) {
  clickPin(i);
}

inputTitle.required = true;
inputTitle.minLength = 30;
inputTitle.maxLength = 100;
inputPrice.required = true;
inputPrice.minLength = 1000;
inputPrice.maxLength = 1000000;
inputAddress.required = true;
