const images = ['0.png','1.png', '2.png', '3.png', '4.png' ,'5.png', '6.png'];

// const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// // console.log(bgImage);

// document.body.appendChild(bgImage);

// Math.random() => Random number between 0 and 1
// To use it as an index number, a number greater than or equal to 0 must appear. Math.random() * 10 => 5.67890056789 However, numbers come after the decimal point.
// There are 2 ways to solve this
// 1. give round <round up> Math.round(1.7) => 2 Math.round(0.1) => 0
// 2. Do ceil <round up> Math.ceil(1.1) => 2 Math.ceil(0.1) => 1
// 3. do floor <round down> Math.floor(1.999999999) => 1


document.body.style = `background-image: url("https://bugsfreecdn.netlify.app/FocusApp/img/${Math.floor(
    Math.random() * images.length)}.png");`;
  