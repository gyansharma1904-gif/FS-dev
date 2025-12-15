//document.getElementById("count").innerText=5

let count = 0 

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
  count = count + 1
  document.getElementById("count-el").innerText = count 
}


function save() {
  
  let CountStr = count + " -- "  
  document.getElementById("save-el").textContent += CountStr    
  document.getElementById("count-el").innerText = 0 
  count = 0
  console.log(CountStr)
  console.log("save")
}


