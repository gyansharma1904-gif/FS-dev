// const Items = ({foodItem}) => {
//   return (
//     <>
//       <li className="list-group-item text-success fs-2">
//         {foodItem}
//       </li>
//     </>
//   );
// };

// export default Items;


function FoodList( {
    items, onDelete
}) {
    return (
        <ul style={ { listStyle: "none", padding: 0 }}>
            {items.map((item, index) => (
                <li key={index} style={ { marginBottom: "10px" }}>
                    {item}
                    <button
                        style={ { marginLeft: "10px" }}
                        onClick={() => onDelete(index)}
                        >
                        del
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default FoodList;