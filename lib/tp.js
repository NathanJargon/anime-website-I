// Maintain a state variable for each image
let image1State = 1;
let image2State = 1;
let image3State = 1;

function toggleImage(imageId, secondImage, firstImage) {
    const mainImage = document.getElementById(imageId);
    const contents1 = document.getElementById('text-content1');
    const contents2 = document.getElementById('text-content2');
    const contents3 = document.getElementById('text-content3');
    // mainImage.classList.add('fade-in');
    
    // Toggle between two images based on the state variable
    if (imageId === 'image1') {
        mainImage.src = (image1State === 1) ? secondImage : firstImage;
        mainImage.style.opacity = (image1State === 1) ? 0.5 : 1;
        contents1.style.display = (image1State === 1) ? "block" : "none";
        image1State = (image1State === 1) ? 2 : 1;
    } else if (imageId === 'image2') {
        mainImage.src = (image2State === 1) ? secondImage : firstImage;
        mainImage.style.opacity = (image2State === 1) ? 0.5 : 1;
        contents2.style.display = (image2State === 1) ? "block" : "none";
        image2State = (image2State === 1) ? 2 : 1;
    } else if (imageId === 'image3') {
        mainImage.src = (image3State === 1) ? secondImage : firstImage;
        mainImage.style.opacity = (image3State === 1) ? 0.5 : 1;
        contents3.style.display = (image3State === 1) ? "block" : "none";
        image3State = (image3State === 1) ? 2 : 1;
    }
}