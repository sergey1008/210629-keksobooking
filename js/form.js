'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var inputTitle = document.querySelector('#title');
var inputPrice = document.querySelector('#price');
var inputAddress = document.querySelector('#address');

var pinActive = 'pin--active';
var currentPinActive = null;
dialog.style.display = 'none';

for (var i = 0; i < pins.length; i++) {
  var pin = pins.item(i);
  pin.addEventListener('click', function (evt) {
    var currentPin = evt.currentTarget;
    if (currentPinActive) {
      currentPinActive.classList.remove(pinActive);
    }
    currentPinActive = currentPin;
    currentPinActive.classList.add(pinActive);
    dialog.style.display = 'block';
  });
}

dialogClose.addEventListener('click', function () {
  currentPinActive.classList.remove(pinActive);
  currentPinActive = null;
  dialog.style.display = 'none';
});

var time = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');

time.addEventListener('change', function () {
  timeOut.value = time.value;
  time.value = timeOut.value;
});

inputTitle.required = true;
inputTitle.minLength = 30;
inputTitle.maxLength = 100;
inputPrice.required = true;
inputPrice.minLength = 1000;
inputPrice.maxLength = 1000000;
inputAddress.required = true;
