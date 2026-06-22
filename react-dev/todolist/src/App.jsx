import TodoApp from "./componentTodo/TodoApp"
import AppName from "./componentTodo/AppName"
import styles from "./TodoCSS.module.css"

let app = () => {
    return(
        <div className={styles.containerbox}>
            <AppName appName="Todo App" />
            <br />
        <TodoApp />

    </div>
)

};

export default app;

// <EmptyMessage TodoItems={TodoItems} />



// let App() {
//     let count = useState(0);
//     let countData = count[0];
//     let setCountData = count[1];
//     let handleOnClick = ()=> {
//         setCountData(countData+1);
//     }
//     let titleShow = document.getElementById("counter");
//     useEffect(() => {
//         document.title = `counter Value ${countData}`;
//         document.getElementById("counter").innerHTML = `count: ${countData}`;
//     }
//     )

//     return (
//         <>
//             <button id="counter" onClick={handleOnClick }>click to </button>
//             <p>
//                 Count: {countData}
//             </p>

//         </>
//     )
// }

// export App;


// import FoodItems from "./componentFood/FoodItems";
// let App = () => {
//    let foodItems = ["bread",
//       "rice",
//       "matter panner"];

//    return (
//       <>
//          <FoodItems foodItems={foodItems} />
//       </>
//    );
// };

// export default App;




// let App = () => {

//    let handleOnClick = ()=> {
//       alert("Rain rain go away")
//    }
//    return (
//       <div>
//          <button className=" btn btn-info" onClick={ handleOnClick}>click</button>
//       </div>
//    )
// }
// export default App;