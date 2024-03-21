const loader = document.getElementById("loader");
const imgContainer = document.querySelector(".img-container");

let photoArray = [];

// Unsplash API
let count = 10;
const apiKey = 'AiYwF_h4ho74W2chg5g6Tbu5le_ghwUI8w3Hg7ELUdg';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;



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
  // function for each in photoarray
  photoArray.forEach((photo) => {
    // Creat <a> tag to link to unphlash
    const aTag = document.createElement('a');
    aTag.setAttribute('href', photo.links.html)
    console.log(aTag);

    aTag.setAttribute('target', '_blank');
    //  Creat element <img> for Photo
    const img = document.createElement('img')
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    console.log(img);
    // Put img inside a tag, then put both inside ImageContainer Element
    aTag.appendChild(img);
    imgContainer.appendChild(aTag);
  });
}

// Helper function set attribute in DOM
function  setAttributes(element, arrtibute){
  for(const key in attributes){
    element.setAttribute(key, attribute[key]);
  }
}