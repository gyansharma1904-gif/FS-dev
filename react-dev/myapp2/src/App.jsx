import Random from "./Random";
import MyButton from "./mybutton";


let App = () => {

   return (
      <>
         <div>
            <p>
               Bye work
            </p>
            <h1>New Heading Tag</h1>
            <b>new b work</b>
            <Random />
         </div>
         <div>
            <Random />
            <MyButton name="click here" />
         </div>

      </>
   );
};

export default App;