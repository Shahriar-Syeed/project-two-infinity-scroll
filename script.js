const loader = document.getElementById("loader");
const imgContainer = document.querySelector(".img-container");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

let photoArray = [];

// Unsplash API
let count = 5;
const apiKey = 'Qu7SRd9LETopycRQDkv8CXEXDiIGTSUc_oVDy1fS670';
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;



// Get photos from Unsplash API
async function getPhoto() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    console.log(photoArray);
    displayPhoto();
  } catch (error) {
    // catch error here
  }
};




// onload
getPhoto();

// creat elements and photo and add to DOM
function displayPhoto() {
  imagesLoaded = 0;
  totalImages = photoArray.length;
  console.log('total images =', totalImages);
  // function for each in photoarray
  photoArray.forEach((photo) => {
    // Creat <a> tag to link to unphlash
    const aTag = document.createElement('a');
    aTag.setAttribute('href', photo.links.html)
    console.log(aTag);

    // aTag.setAttribute('target', '_blank');
    setAttributes(aTag, {
      href: photo.links.html,
      target: '_blank',
    });

    //  Creat element <img> for Photo
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    console.log(img);
    // Event Listener, check when each is finished loading
    img.addEventListener("load", imageLoaded());
    // Put img inside a tag, then put both inside ImageContainer Element
    aTag.appendChild(img);
    imgContainer.appendChild(aTag);

  });
}

// Helper function set attribute in DOM
function setAttributes(element, attribute) {

  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}

// Check to see if scrolling near bottom of page loded more Photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhoto();
    console.log("load more");
  }
});

// check if all images were loaded
function imageLoaded() {
  console.log('image loaded');
  imagesLoaded++;
  console.log(imagesLoaded);
  if (imagesLoaded === totalImages) {
    ready = true;
    console.log('ready=', ready);

    loader.hidden = true;

    count = 10;

  }
}

