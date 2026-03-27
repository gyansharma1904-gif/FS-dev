function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.alt = 'good';

    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', () => reject("img not loaded"));
  });
}

async function loadImage() {
  try {
    const result = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenicl.jpg');
    
    console.log(result); // ✅ actual image element
    
    document.getElementById('img-container').appendChild(result);
  } catch (err) {
    console.error('Error:', err);
  }
}

loadImage();




// function preLoadImg(url) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src= url;
//     img.alt='good';
//     img.addEventListener('load',()=> resolve(img));
//     img.addEventListener('error',()=>reject("img not loaded"));
//   });
  
// }
// async function loadImage() {
//   try {
//     const result = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenicl.jpg');
    
//     console.log(result); 
//     document.getElementById('img-container').appendChild(result);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// loadImage();


// // try {
// //   const results =preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenicl.jpg');
// //   console.log(results);
// //   document.getElementById('img-container').appendChild(results); 
// // } catch (err) {
// //   console.error('Error:', err);
  
// // }


// //https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenicl.jpg