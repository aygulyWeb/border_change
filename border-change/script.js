const border__topRight = document.querySelector('#border__topRight');
const border__topLeft = document.querySelector('#border__topLeft');
const border__bottomRight = document.querySelector('#border__bottomRight');
const border__bottomLeft = document.querySelector('#border__bottomLeft');
const border__change = document.querySelector('.border__change');
const border__square = document.querySelector('.border__square');

const border__text1 = document.querySelector('.border__text1');
const border__text2 = document.querySelector('.border__text2');
const border__text3 = document.querySelector('.border__text3');
const border__text4 = document.querySelector('.border__text4');



border__topRight.addEventListener('input', () => {
	border__change.style.borderTopRightRadius = `${border__topRight.value}px`
	border__text1.innerHTML = `<span id="border__text1">border-top-right-radius: ${border__topRight.value}px</span>`

});

border__topLeft.addEventListener('input', () => {
	border__change.style.borderTopLeftRadius = `${border__topLeft.value}px`
	border__text2.innerHTML = `<span id="border__text2">border-top-left-radius: ${border__topLeft.value}px</span>`

});

border__bottomRight.addEventListener('input', () => {
	border__change.style.borderBottomRightRadius = `${border__bottomRight.value}px`
	border__text3.innerHTML = `<span id="border__text3">border-bottom-right-radius: ${border__bottomRight.value}px</span>`
});

border__bottomLeft.addEventListener('input', () => {
	border__change.style.borderBottomLeftRadius = `${border__bottomLeft.value}px`
	border__text4.innerHTML = `<span id="border__text4">border-bottom-left-radius: ${border__bottomLeft.value}px</span>`
});





