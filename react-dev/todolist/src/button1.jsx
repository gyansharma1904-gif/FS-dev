// const button1 = (prop.) => {
//    return (
//       <>
//          <button className=" btn btn-success m-5 w-30 "> {prop.btnName} </button>
//       </>
//    );

// };

// export default button1


const Button1 = (props) => {
   return (
      <button className=" btn btn-success m-5 w-30 ">
         {props.btnName}
      </button>
   );
};

export default Button1;