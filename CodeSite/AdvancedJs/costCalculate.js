import { itemsArr } from './items.js';

function calculateCost(itemsArr,discount=0) {//default parameter
  // if (!discount) {
  //   discount=0;
  // }
  const total = itemsArr.reduce((total,currentItem)=> 
    total + currentItem.priceUSD,0
  );
  return (total-discount);
  
  
}
console.log(itemsArr);
console.log(calculateCost(itemsArr));
console.log(calculateCost(itemsArr,10));
console.log("gyan");