// const getAleart = function (amount) {
//   return `warning !  ${amount}`;
  
// };

const getAleart =(amount)=>{
  
  return `warning !  ${amount}`;
} ;
 
 const speedWarn = (speedLimit,speed) => {
   if (speed>speedLimit){return (`you are going at ${speed} mph! and the speed limit is ${speedLimit}`);}
   else{return `actual speed is ${speed} `}
 };

console.log(speedWarn(60,50));
console.log(getAleart(50));

const distanceMiles = [300,389,189,289,256];

const distanceKm = distanceMiles.map(distance => Math.round(distance*1.6));

console.log(distanceKm);
