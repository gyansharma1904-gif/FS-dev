//document.getElementById("count").innerText=5

let countA = 0 ;
let countB = 0 ;
let countEl = document.getElementById("scoreA-el")
let saveEl = document.getElementById("scoreB-el")

//
//
//
//

function incrementA1() {
  countA = countA + 1
  document.getElementById("scoreA-el").innerText = countA
  let CountStrA = 1 + " -- "  
  document.getElementById("saveA-el").textContent += CountStrA     
  console.log(CountStrA)
}
function incrementA2() {
  countA = countA + 2
  document.getElementById("scoreA-el").textContent = countA
  let CountStrA = 2 + " -- "  
  document.getElementById("saveA-el").textContent += CountStrA     
  console.log(CountStrA)
}
function incrementA3() {
  countA = countA + 3
  document.getElementById("scoreA-el").textContent = countA
  let CountStrA = 3 + " -- "  
  document.getElementById("saveA-el").textContent += CountStrA     
  console.log(CountStrA)
}
///
///
///
///

function incrementB1() {
  countB = countB + 1
  document.getElementById("scoreB-el").textContent = countB
  let CountStrB = 1 + " -- "  
  document.getElementById("saveB-el").textContent += CountStrB     
  console.log(CountStrB)
}
function incrementB2() {
  countB = countB + 2
  document.getElementById("scoreB-el").textContent = countB
  let CountStrB = 2 + " -- "  
  document.getElementById("saveB-el").textContent += CountStrB     
  console.log(CountStrB)
}
function incrementB3() {
  countB = countB + 3
  document.getElementById("scoreB-el").textContent = countB
  let CountStrB = 3  + " -- "  
  document.getElementById("saveB-el").textContent += CountStrB     
  console.log(CountStrB)
}
//
//
//
//
//
function save() {
  let CountStr = countA + " -- "  
  document.getElementById("save-el").textContent += CountStr    
  console.log(CountStr)
  console.log("save")
}


