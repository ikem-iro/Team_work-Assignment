/**
 * The function randomly changes the background image of the body element on button click from a
 * predefined array of image URLs.
 */
const bodyEl = document.body;
const buttonEl = document.querySelector(`[data-button]`);
const resetButtonEl = document.querySelector(`[data-reset]`);

const images = [
	`url('./images/Screenshot (10).png')`,
	`url('./images/Screenshot (13).png')`,
	`url('./images/The Punisher.jpg')`,
];

function handleButtonPress() {
	let currentImageIndex, imageUrl;

	currentImageIndex = Math.floor(Math.random() * images.length);
	imageUrl = images[currentImageIndex];
	bodyEl.style.backgroundImage = imageUrl;
}

buttonEl.addEventListener(`click`, handleButtonPress);

resetButtonEl.addEventListener(`click`, function () {
	bodyEl.style.backgroundImage = "none";
	bodyEl.style.backgroundColor = "white";
});
