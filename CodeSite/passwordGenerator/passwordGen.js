function createPassword() {
   const length = 12;
   const characters =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
   "abcdefghijklmnopqrstuvwxyz" +
   "0123456789" +
   "!@#$%^&*()_+{}[]<>?/";
   let pass1;
   let pass2;

   let password = [pass1,
      pass2];
   //let password2 = "";

   for (let i = 0; i < length; i++) {
      const randomIndex1 = Math.floor(Math.random() * characters.length);
      password[0] += characters[randomIndex1];
      const randomIndex2 = Math.floor(Math.random() * characters.length);
      password[1] += characters[randomIndex2];
   }


   //document.getElementById("pass1-el").innerText = password1
   //document.getElementById("pass2-el").innerText = password2
   return password;

}

// Example usage
console.log("Random Password:", createPassword());