'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var inputTitle = document.querySelector('#title');
var inputPrice = document.querySelector('#price');
var inputAddress = document.querySelector('#address');

var currentPinActive = null;
var a = 'pin--active';

for (var i = 0; i < pins.langth; i++) {
  var pin = pins.item[i];
  pin.addEventListener('click', function () {
    if (currentPinActive === pin) {
      return;
    }
    if (currentPinActive) {
      currentPinActive.classList.remove(a);
    }
    currentPinActive = pin;
    currentPinActive.classList.add(a);
    dialog.style.display = 'block';
  });
}

dialog.addEventListener('click', function () {
  currentPinActive.classList.remove(a);
  currentPinActive = null;
  dialog.style.display = 'none';
});

inputTitle.required = true;
inputTitle.minLength = 30;
inputTitle.maxLength = 100;
inputPrice.required = true;
inputPrice.minLength = 1000;
inputPrice.maxLength = 1000000;
inputAddress.required = true;
