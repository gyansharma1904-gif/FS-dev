

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  // const totalPrice = cart.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  if (cart.length === 0) {
    
    return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={styles.item}>
          <img src={item.image} alt={item.name} style={styles.image} />

          <div>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>

            <div>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>

          <button
            style={styles.remove}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹ {totalPrice}</h3>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px"
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    padding: "15px 0"
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover"
  },
  remove: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px"
  }
};

export default Cart;
