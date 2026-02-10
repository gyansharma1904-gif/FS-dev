
// const stock = require("./fakeStockAPI");
import getStockData from './fakeStockAPI.js';


console.log(getStockData());
// const intervalId = 
setInterval(function(){
  const stalkData = getStockData();
  renderStock(stalkData);
}, 1000);

function rendeStock(stockData) {
const stockName = document.getElementById('name-el');
const stockSym = document.getElementById('sym-el');
const stockRate = document.getElementById('rate-el');
const stockPrice = document.getElementById('price-el');
const stockTime = document.getElementById('time-el');
}