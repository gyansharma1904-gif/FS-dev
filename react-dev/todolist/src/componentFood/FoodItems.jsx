import Items from "./Items";

let FoodItems = ({ foodItems }) => {
  let x = 1;
  return (
    <>
      <div className="container w-100">
        <h1 className="bg-warning text-center text-primary">Food Items</h1>
        <ul className="list-group">
          {foodItems.length === 0 && (
            <h1 className="text-center m-3 text-danger">
              I am still Hungry..... <br /> Please give me food...{" "}
            </h1>
          )}
          {foodItems.map((food) => (
            <Items key={x++} foodItem={food} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default FoodItems;
