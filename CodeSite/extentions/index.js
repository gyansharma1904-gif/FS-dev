let intputBtn = document.getElementById("save-btn")
let mylead = []
const ulEl = document.getElementById("ul-el")
let inputtext = document.getElementById("input-el")

intputBtn.addEventListener (
   "click",
   function() {
      console.log("button clicked from addEventListener")
      const inputValue = document.getElementById("input-el").value;
      mylead.push(inputValue);
      inputtext.value = ""
      ulEl.innerHTML = "<br>";
      render();
      //console.log(mylead)

   }
)

function render() {
   console.log("gyan button")
   //ulEl.innerHTML = "<br>";
   let list = "<li> <a href='" + mylead[i] +"'>" +mylead[i] + "</a></li>"
   ulEl.innerHTML += list

   //let list = ""
   //for (let i = 0; i < mylead.length; i++) {
   //list += "<li>" +mylead[i]+"</li>"
   //ulEl.innerHTML = list
   //console.log(mylead[i])
   //}

}


let inputbtn2 = document.getElementById("btn2-el")
inputbtn2.addEventListener(
   "click", function() {
      console.log("gyan button")
      ulEl.innerHTML = "<br>";
      let list = ""

      for (let i = 0; i < mylead.length; i++) {
         list += "<li>" +mylead[i]+"</li>"
         ulEl.innerHTML = list
         console.log(mylead[i])
      }
   }
)
/*
let inputbtn3 = document.getElementById("btn3-el");
const pEL = document.getElementById("p-el");
inputbtn3.addEventListener(
   "click", function() {
      pEL.innerHTML = "<p>"+"thanks for buying"+"</p>";
   }
)

let inputbtn4 = document.getElementById("btn4-el");
const ulEl2 = document.getElementById("ul2-el");
//const pEL = document.getElementById("p-el");
inputbtn4.addEventListener(
   "click", function() {
      ulEl2.innerHTML = "<br>";
      for (let i = 0; i < mylead.length; i++) {
         const li = document.createElement("li")
         li.textContent = mylead[i]
         ulEl2.append(li)
      }
   }
)


*/