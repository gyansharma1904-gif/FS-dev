
// const stock = require("./fakeStockAPI");
import {getStockData} from './fakeStockAPI.js';


// function startbtn() {
//   const stalkData = getStockData();
//   renderStock(stalkData);
//   console.log(stalkData);
// }

// startbtn();
// console.log(getStockData()); 
// const intervalId = 
// document.getElementById("start-btn").addEventListener("click", startbtn);

setInterval(function(){
  const stockData = getStockData();
  renderStock(stockData);
  console.log(stockData);
}, 5000);

// let prevPrice=null;

function renderStock(stockData) {
  // const stockName = document.getElementById('name-el');
  // const stockSym = document.getElementById('sym-el');
  // const stockRate = document.getElementById('rate-el');
  // const stockPrice = document.getElementById('price-el');
  // const stockTime = document.getElementById('time-el');
  
  const {name,sym,price,time,} = stockData;
  // const pricestatus = (price > prevPrice ? "green.svg" : price < prevPrice ? "red.svg":"blue.svg" );
  // const priceIcon = document.createElement('img');
  // priceIcon.src=`svg/&{pricestatus}`;
  // priceIcon.alt='price direction icon';
  // stockRate.appendChild(priceIcon);
  document.getElementById("name-el").innerText=name;
  document.getElementById('sym-el').innerText=sym;
  document.getElementById('price-el').innerText=price;
  document.getElementById('time-el').innerText=time;
  // stockName.innerText=name;
  // stockSym.innerText=sym;
  // stockPrice.innerText=price;
  // stockTime.innerText=time;
}
