let toutesLesImages = document.querySelectorAll('#singleGallery img');

for (let i = 0; i < toutesLesImages.length; i++) {
    let image = toutesLesImages[i];
    image.addEventListener('click', showPict);
}

function showPict(e) {
    let image = e.target;
    let bigImageContainer = document.getElementById('galleryContainer');
    let bigImage = bigImageContainer.querySelector('img');
    bigImage.src = image.src;
    bigImageContainer.classList.toggle('visible');
    bigImageContainer.addEventListener('click', closePict);
}

function closePict() {  
    let bigImageContainer = document.getElementById('galleryContainer');
    bigImageContainer.classList.toggle('visible')
}