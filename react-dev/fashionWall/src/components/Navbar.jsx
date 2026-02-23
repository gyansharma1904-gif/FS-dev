import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Count cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        FashionWall
      </h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  }
};

export default Navbar;
