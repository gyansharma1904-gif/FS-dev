function trafficLight(light) {
    console.log(`it is ${light}`);
}

const lightShow = setTimeout(trafficLight, 1000, "green");
// document.getElementById('stop-el').addEventListener("click",function(){
//   clearTimeout(lightShow);
//   console.log(`canceling...`);
// });
trafficLight("red");


// const start = performance.now();

// setTimeout(()=> {
//   const end = performance.now();
//   console.log(`executed time: ${end-start} milliseconds`);
// }, 3000);

// for (let i = 0; i < 10000; i++) {
//   let answer = i*20000/67.8*(45.7/3.2);
// }


