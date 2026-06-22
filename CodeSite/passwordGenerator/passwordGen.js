function createPassword() {
   const length = 12;
   const characters =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
   "abcdefghijklmnopqrstuvwxyz" +
   "0123456789" +
   "!@#$%^&*()_+{}[]<>?/";
   let pass1;
   let pass2;

   let password = ["", ""];
   //let password2 = "";

   for (let i = 0; i < length; i++) {
      let randomIndex1 = Math.floor(Math.random() * characters.length);
      password[0] += characters[randomIndex1];
      let randomIndex2 = Math.floor(Math.random() * characters.length);
      password[1] += characters[randomIndex2];
   }


   document.getElementById("pass1-el").innerText = password[0];
   document.getElementById("pass2-el").innerText = password[1]
   return password;

}

// Example usage
console.log("Random Password:", createPassword());