import {
    useState
} from "react";
import FoodInput from "./componentFood/FoodInput";
import FoodList from "./componentFood/FoodList";
import EmptyMessage from "./EmptyMessage";

function App() {


    const [foodItems,
        setFoodItems] = useState([]);

    const addFoodItem = (item) => {
        if (item.trim() === "") return;
        setFoodItems([...foodItems, item]);
    };

    const deleteFoodItem = (index) => {
        const newList = foodItems.filter((_, i) => i !== index);
        setFoodItems(newList);
    };

    return (
        <div style={ { width: "300px", margin: "50px auto", textAlign: "center" }}>
            <h2>Food Planner</h2>

            <FoodInput onAdd={addFoodItem} />
            {foodItems.length === 0 ? (
                <EmptyMessage />
            ):
            (
                <FoodList items={foodItems} onDelete={deleteFoodItem} />
            )}
        </div>
    );
}

export default App;



    // import FoodItems from "./componentFood/FoodItems";
    // let App = () => {
    //     let foodItems = ["bread",
    //         "rice",
    //         "matter panner"];

    //     return (
    //         <>
    //             <FoodItems foodItems={foodItems} />
    //         </>
    //     );
    // };

    // export default App;


    // import FoodItems from './componentFood/FoodItems.jsx'

    // import Container from "./Container";

    // let App = () => {
    //     let foodItems = ['Chole Bhature', 'Pav Bhaji', 'Gol Gappe', 'Laccha Paratha Kathai Paneer', 'Samosa', 'Aloo Tikki', 'Pizza', 'Ras Malai', 'Gol Gappe',];

    //   return (
    //     <>

    //         <Container>
    //        <FoodItems foodItems={foodItems} />

    //         </Container>
    //     </>
    //   );
    // };

    // export default App;

    // import FoodItems from "./ComponentFood/FoodItems";

    // let App = () => {
    //   let foodItems = ['Chole Bhature', 'Pav Bhaji', 'Gol Gappe', 'Laccha Paratha Kathai Paneer', 'Samosa', 'Aloo Tikki', 'Pizza', 'Ras Malai', 'Gol Gappe',];

    //   //  let foodItems = [];
    //   return <>
    //     <FoodItems foodItems={foodItems} />
    //   </>;
    // };

    // export default App;

    // export default App;

    // let App = () => {
    //   return (
    //     <>
    //       <div className="container">
    //         <h1 className="text-center fw-bolder fs-1">TODO App</h1>
    //         <div className="row">
    //           <div className="col-5"><input type="text" className="w-100" /></div>
    //           <div className="col-5"><input type="date" className="w-100" /></div>
    //           <div className="col-2"><button className="btn btn-success w-100">Add</button></div>
    //         </div>

    //         <div className="row mt-2">
    //           <div className="col-5">Complete Assessment of React today</div>
    //           <div className="col-5"> 22-01-2026 </div>
    //           <div className="col-2"><button className="btn btn-danger w-100">Delete</button></div>
    //         </div>

    //         <div className="row mt-2">
    //           <div className="col-5">Buy Chocolate</div>
    //           <div className="col-5"> 22-01-2026 </div>
    //           <div className="col-2"><button className="btn btn-danger w-100">Delete</button></div>
    //         </div>

    //         <div className="row mt-2">
    //           <div className="col-5">Buy Coffee</div>
    //           <div className="col-5"> 22-01-2026 </div>
    //           <div className="col-2"><button className="btn btn-danger w-100">Delete</button></div>
    //         </div>
    //       </div>
    //     </>
    //   );
    // };

    // export default App;

    // let App = () => {
    //     let foodItems = ['Chole Bhature',
    //         'Pav Bhaji',
    //         'Gol Gappe',
    //         'Laccha Paratha Kathai Paneer',
    //         'Samosa',
    //         'Aloo Tikki',
    //         'Pizza',
    //         'Ras Malai',
    //         'Gol Gappe',
    //     ];

    //  let foodItems = [];

    // let x = 1;

    // if(foodItems.length === 0){
    //   return <h1>I am still Hungry.....</h1>
    // }

    //     return <>
    //         <div className="container w-100">
    //             <h1 className="bg-warning text-center text-primary">Food Items</h1>
    //             <ul className="list-group">
    //                 {/* {foodItems.length === 0 ? <h1 className="text-center m-3 text-danger">I am still Hungry..... <br/> Please give me food... </h1>: '' } */}
    //                 {foodItems.length === 0 && <h1 className="text-center m-3 text-danger">I am still Hungry..... <br /> Please give me food... </h1>}
    //             {foodItems.map((food)=> <li key={x++} className="list-group-item text-success fs-2">{food}</li>)}
    //         </ul>
    //     </div>
    // </>;
    // };

    // export default App;

    // let App = () => {
    //   let foodItems = ['Chole Bhature', 'Pav Bhaji', 'Gol Gappe', 'Laccha Paratha Kathai Paneer', 'Samosa'];

    //   return <>
    //      <h1 className="bg-warning text-center text-primary">Food Items</h1>
    //      <ul className="list-group">
    //       <li className="list-group-item">{foodItems[0]}</li>
    //       <li className="list-group-item">{foodItems[1]}</li>
    //       <li className="list-group-item">{foodItems[2]}</li>
    //       <li className="list-group-item">{foodItems[3]}</li>
    //       <li className="list-group-item">{foodItems[4]}</li>
    //      </ul>
    //   </>;
    // };

    // export default App;