/**
 * The function randomly changes the background image of the body element on button click from a
 * predefined array of image URLs.
 */
const bodyEl = document.body;
const buttonEl = document.querySelector(`[data-button]`);

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

	currentImageIndex = (currentImageIndex + 1) % images.length;
}

buttonEl.addEventListener(`click`, handleButtonPress);
