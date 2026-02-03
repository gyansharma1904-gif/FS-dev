// export function getRandomNumber() {
//    return Math.floor(Math.random() * 100) + 1; // 1 to 100
// }
// If your file has only functions / logic, many developers prefer .js:


const Random = () => {
   let num = Math.floor(Math.random() * 6) + 1;

   return (
      <>
         <h2 style={ { color: "green" }}>
            Random no. is {num}
         </h2>
      </>
   );
};

export default Random;

//.jsx is useful only when you write JSX:
//UI components → .jsx