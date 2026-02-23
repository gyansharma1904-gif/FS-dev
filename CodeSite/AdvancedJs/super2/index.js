import { propertyholderArr } from "./placeholderProperty.js";
import {propertyForSaleArr} from "./propertyForSale.js";
console.log((propertyForSaleArr.length));

const locations = propertyForSaleArr.length>0 ? propertyForSaleArr : propertyholderArr;

// console.log(locations);

// function getPropertyHtml() {
//   const labelName = locations.map(name => 
//   `<section class="card">
//   <img src="/images/${name.image}"> 
//     <div class="card-right">
//       <h2>Property Location: ${name.propertyLocation}</h2>
//       <h3>Price GBP: ${name.priceGBP}</h3>
//       <p>Comment ${name.comment}</p>
//       <h3>Total Size In Square Meters ${name.roomsM2}</h3>
//     </div>
//   </section>`
//   );
//   return labelName.join("");
// }
// // console.log(getPropertyHtml());
// document.getElementById('card-el').innerHTML = getPropertyHtml();


function getPropertyHtml(locations=[propertyholderArr]) {
  return locations.map(Property => {
    const {propertyLocation,priceGBP,roomsM2,comment, image}= Property;
    return (
  `<section class="card">
  <img src="/images/${image}"> 
    <div class="card-right">
      <h2>Property Location: ${propertyLocation}</h2>
      <h3>Price GBP: ${priceGBP}</h3>
      <p>Comment ${comment}</p>
      <h3>Total Size In Square Meters ${roomsM2}</h3>
    </div>
  </section>`
  );
  }
  );
  // return labelName.join("");
}
// console.log(getPropertyHtml());
document.getElementById('card-el').innerHTML = getPropertyHtml(locations);

