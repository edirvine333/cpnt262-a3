'use strict';

const images = [                                              //  an array of objects with the name images
  {
    id: 0,
    title: "Original Image",
    description: "The orginal unedited image.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_1920.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 1,
    title: "Resize",
    description: "A resized image",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_275.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 2,
    title: "Sharpen",
    description: "The image with a sharpen edit.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_sharpen.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 3,
    title: "Grayscale",
    description: "The image in grayscale.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_gs.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 4,
    title: "Sepia",
    description: "The image with a sepia filter.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_sepia.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 5,
    title: "Negative",
    description: "The negative of the original.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_negative.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 6,
    title: "Blur",
    description: "The image with a blur filter.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_blur.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 7,
    title: "Levels",
    description: "The image with adjusted levels.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_levels.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 8,
    title: "Vignette",
    description: "The image with a vignette border.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_vignette.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 9,
    title: "Film Grain",
    description: "The image with a film grain filter.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_grain.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 10,
    title: "Frosted Glass",
    description: "The image with a frosted glass filter.",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_glass.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },

  {
    id: 11,
    title: "Brush Strokes",
    description: "The image with a brush stroke filter",
    width: 275,
    height: 162,
    imgURL: "assets/images/guitar_brush.jpg",
    credit: "Piro",
    artistURL: "https://pixabay.com/users/piro4d-2707530/",
    creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
  },
];

let main = document.querySelector("main")   

images.forEach(insert);                       

function insert(item, index) {
  
   main.innerHTML = main.innerHTML + `<img src="${images[index].imgURL}" alt="a broken image"></img>`;
 
}

// ****************************************  COMMENTS  **************************************************
//
//  Line 149:  Declares "main" and grips to the <main> element
//  Line 151:  Starts a forEach() loop using the callback function "insert"
//  Line 153:  The function statement for the "insert" function
//  Line 155:  Sets the .innerHTML of "main" to be last value of .innerHTML plus the next <img> statement
//             In this way, each image is added to .innerHTML creating a list of <img> elements
//
//  *****************************************************************************************************
  
