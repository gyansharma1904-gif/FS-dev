import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      <div style={styles.buttons}>
        <Link to={`/product/${product.id}`}>
          <button style={styles.detailsBtn}>View</button>
        </Link>

        <button
          style={styles.cartBtn}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    width: "220px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  },
  buttons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between"
  },
  detailsBtn: {
    padding: "5px 10px"
  },
  cartBtn: {
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none"
  }
};

export default ProductCard;
