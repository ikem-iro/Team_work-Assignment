const bodyEl = document.body;
const buttonEl = document.getElementById(``)

const images = []
let currentImageIndex = 0

function handleButtonPress() {
    let imageUrl

    imageUrl = images[currentImageIndex]
    bodyEl.style.backgroundImage = imageUrl

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

buttonEl.addEventListener(`click`, handleButtonPress);
