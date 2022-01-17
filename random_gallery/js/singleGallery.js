let galleriesRaw = '{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}';
let toutesLesImages = document.querySelectorAll('#singleGallery img');
console.log(window.location.search)

for (let i = 0; i < toutesLesImages.length; i++) {
    var image = toutesLesImages[i];
    image.addEventListener('click', showPict);
}

//Pour afficher les images en grand lors du click 
function showPict(e) {
    let image = e.target;
    let bigImage = document.querySelector('#galleryContainer img');
    bigImage.src = image.src;
    let bigImageContainer = document.getElementById('galleryContainer');
    bigImageContainer.classList.toggle('visible');
    bigImageContainer.addEventListener('click', closePict);
}

//pour reduire la photo onclick
function closePict() {  
    let bigImageContainer = document.getElementById('galleryContainer');
    bigImageContainer.classList.toggle('visible');
}

//affiche le bon titre
let h1 = document.querySelector('#singleGallery h1');
let galleries = JSON.parse(galleriesRaw);
console.log(galleries)
if (document.location.search.includes('gal2')) {
    h1.textContent = galleries.gal2.title;
}

//affiche la bonne gallerie
let gal2 = galleries.gal2.images;
console.log(gal2)
for (let i = 0; i < gal2.length -2; i++) {
    let image = gal2[i];
    if (document.location.search.includes('gal2')) {
        console.log(image)
        toutesLesImages[i].src = `images/${image}`
    } 
}

let url3 = window.location.search.get('id');
console.log(url3)