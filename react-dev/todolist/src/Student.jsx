const Student = (name, age, place)=> {
   return(
      <div className=" text-center mx-10">
         <h1>
            my name is {name}</h1>
         <p>
            my age is {age}
         </p>
         <p>
            placed at {place}
         </p>
      </div>
   );
};


export default Student;




   // const Student = (props)=> {
   //    return(
   //       <div className=" text-center mx-10">
   //          <h1>
   //             my name is {props.name}</h1>
   //          <p>
   //             my age is {props.age}
   //          </p>
   //          <p>
   //             placed at {props.place}
   //          </p>
   //       </div>
   //    );
   // };


   // export default Student;