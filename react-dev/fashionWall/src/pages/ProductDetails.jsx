import { useParams } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹ {product.price}</h3>

        <button
          style={styles.button}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    marginTop: "10px"
  }
};

export default ProductDetails;
