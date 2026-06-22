export function getStockData() {
  
  // function getRandomDecimal(min, max, decimalPlaces) {
  //   const multiplier = Math.pow(10, decimalPlaces);
  //   const random = Math.random() * (max - min) + min;
  //   return Math.floor(random * multiplier) / multiplier;
    
  // }
  
  // const setDate = new Date();
  // const newTime= setDate.toLocaleTimeString();
  // // console.log(newDate);
  // let lastNum = 10;
  // let stockRate = ">";
  // const randomNum = setTimeout(getRandomDecimal, 5000, 0, 3, 2); 
  
  // if(lastNum>randomNum){
  //   stockRate="v";
  // } else if (lastNum<randomNum) {
  //   stockRate="^";
  // }else{
  //   stockRate=">";
  // }
  // lastNum=randomNum;
  // // console.log(randomNum);

  return{
    name :"gyan",
    sym:"GS",
    // price:randomNum,
    price:(Math.random()*3).toFixed(2),
    // stockRate:stockRate,
    // time:newTime,
    time:new Date().toLocaleTimeString()
    
  };
}
// console.log(getStockData());

// export default
//   {
//   getStockData,
// };


