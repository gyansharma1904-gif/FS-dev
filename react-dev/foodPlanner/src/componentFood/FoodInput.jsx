import {
    useState
} from "react";

function FoodInput( {
    onAdd
}) {
    const [inputValue,
        setInputValue] = useState("");

    const handleAdd = () => {
        onAdd(inputValue);
        setInputValue("");
    };

    return (
        <div>
            <input
            type="text"
            placeholder="Enter food item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
        <button onClick={handleAdd}>Add</button>
    </div>
);
}

export default FoodInput;



// import Items from "./Items";

// let FoodItems = ({ foodItems }) => {
//   let x = 1;
//   return (
//     <>
//       <div className="container w-100">
//         <h1 className="bg-warning text-center text-primary">Food Items</h1>
//         <ul className="list-group">
//           {foodItems.length === 0 && (
//             <h1 className="text-center m-3 text-danger">
//               I am still Hungry..... <br /> Please give me food...{" "}
//             </h1>
//           )}
//           {foodItems.map((food) => (
//             <Items key={x++} foodItem={food} />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };
// export default FoodItems;