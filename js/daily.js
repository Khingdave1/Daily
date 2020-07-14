/* Access DOM elements */
const slideImage = document.getElementById('slide-img');
const imageArray = ['BeeFood.jpg', 'BeeFood2.jpg', 'Cakebyserah.jpg', 'Devs coffee.jpg'];
var imageIndex = 0;

function changeImage() {
    slideImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 2000);


