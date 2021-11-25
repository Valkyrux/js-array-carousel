// dichiarazione degli elementi su cui lavorare
// immagini
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
// titoli
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
// descrizioni
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
// seleziono la classe slider dall'html
const sliderOnHtml = document.querySelector(".slider");
// costruisco i div a sinistra e a destra per le immagini e i thumb
const sliderPhoto = document.createElement("div");
const sliderThumbs = document.createElement("div");
sliderPhoto.classList.add("slider-photo");
sliderThumbs.classList.add("slider-thumbs");
// aggiungo le immagini all'interno di .slider-photo e .slider-thumb
for (let i = 0; i < items.length; i++) {
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const div = document.createElement("div");
    img.src = items[i];
    h1.innerHTML = title[i];
    p.innerHTML = text[i];
    div.append(h1, p)
    if (i==0) {
        img.classList.add("photo-show");
        div.classList.add("photo-show");
    }
    sliderPhoto.append(img, div);
}
// altro ciclo for perché append con lo stesso elemento generato da create element non funziona
for (let i = 0; i < items.length; i++) {
    const img = document.createElement("img");
    img.src = items[i];
    if (i==0) {
        img.classList.add("photo-show");
    }
    sliderThumbs.append(img);
}

const prevButton = document.createElement("button");
const nextButton = document.createElement("button");
prevButton.id = "prev-button";
nextButton.id = "next-button"
prevButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
nextButton.innerHTML = '<i class="fas fa-chevron-down"></i>';

sliderThumbs.prepend(prevButton);
sliderThumbs.append(nextButton);

sliderOnHtml.append(sliderPhoto, sliderThumbs);
// spostamento alla fine
nextButton.addEventListener("click", 
    function() {
        // seleziono le immagini e il testo
        const imageList = document.querySelectorAll(".slider-photo img");
        const textList = document.querySelectorAll(".slider-photo div");
        const imageListThumb = document.querySelectorAll(".slider-thumbs img");
        // dichiaro l'indice che identifica la classe show attuale
        let photoIndex;
        // cerco l'indice corretto
        for (let i = 0; i < imageList.length; i++) {
            if (imageList[i].classList.contains("photo-show")) {
                photoIndex = i;
            }
        }
        // tolgo show agli elementi trovati
        imageList[photoIndex].classList.remove("photo-show");
        textList[photoIndex].classList.remove("photo-show");
        imageListThumb[photoIndex].classList.remove("photo-show");
        // riassegno i nuovi valori per le classi active
        if (photoIndex == imageList.length - 1) {
            imageList[0].classList.add("photo-show");
            textList[0].classList.add("photo-show");
            imageListThumb[0].classList.add("photo-show");
        } else {
            imageList[photoIndex + 1].classList.add("photo-show");
            textList[photoIndex + 1].classList.add("photo-show");
            imageListThumb[photoIndex + 1].classList.add("photo-show");
        }
    }
);
// spostamento all'inizio
prevButton.addEventListener("click", 
    function() {
        const imageList = document.querySelectorAll(".slider-photo img");
        const textList = document.querySelectorAll(".slider-photo div");
        const imageListThumb = document.querySelectorAll(".slider-thumbs img");
        let photoIndex;
        for (let i = 0; i < imageList.length; i++) {
            if (imageList[i].classList.contains("photo-show")) {
                photoIndex = i;
            }
        }
        
        imageList[photoIndex].classList.remove("photo-show");
        textList[photoIndex].classList.remove("photo-show");
        imageListThumb[photoIndex].classList.remove("photo-show");

        if (photoIndex == 0) {
            imageList[imageList.length - 1].classList.add("photo-show");
            textList[imageList.length - 1].classList.add("photo-show");
            imageListThumb[imageList.length - 1].classList.add("photo-show");
        } else {
            imageList[photoIndex - 1].classList.add("photo-show");
            textList[photoIndex - 1].classList.add("photo-show");
            imageListThumb[photoIndex - 1].classList.add("photo-show");
        }
    }
);