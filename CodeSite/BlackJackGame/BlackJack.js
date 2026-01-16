//   javaScript file for BlackJack Game
//
let cards = [];
let sum = 0;
const person = {
   Name: "John",
   money: 146
};


let hasBlascJack = false;
let isAlive = false;
let status = "";

function getRandomCard() {
   let floorNum = Math.floor(Math.random()*13)+1;
   if (floorNum == 1) {
      floorNum = 11;
   } else if (floorNum > 10) {
      floorNum = 10;

   }
   return floorNum;
}


function startGame() {
   isAlive = true;
   BlackJack = true;
   firstCard = getRandomCard();
   secondCard = getRandomCard();
   cards = [firstCard,
      secondCard];
   // console.log(cards)
   sum = firstCard + secondCard;
   renderGame()
}


function renderGame() {
   document.getElementById("card-el").innerText = "Cards:"
   for (let i = 0; i < cards.length; i += 1) {
      document.getElementById("card-el").innerText += " "+cards[i] + " "
      //console.log(cards)
   }
   //document.getElementById("card-el").innerText = "cards:" + " "+ cards[0]+" "+cards[1] ;

   if (sum < 20) {
      status = "Do you want to draw a new card ?";
   } else if (sum == 20) {
      status = "wohoo! you've got BlackJack !";
      BlackJack = false;
   } else {
      status = "you're out of the game!";
      isAlive = false;
   }
   document.getElementById("status-el").innerText = status;
   document.getElementById("sum-el").innerText = "Sum:"+" "+sum;
   updatedetails()
}
console.log(player.Name)
function newCard() {
   if (isAlive && BlackJack) {
      let newCard1 = getRandomCard();
      cards.push(newCard1)
      sum += newCard1
      renderGame()
   }
}

//document.getElementById("player-el").innerText = person.Name + ": $"+ person.money;
function updatedetails() {
   document.getElementById("player-el").innerText = person.Name + ": $"+ person.money;
}