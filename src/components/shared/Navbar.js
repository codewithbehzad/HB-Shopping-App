import React, { useContext } from "react";

// router
import { Link } from "react-router-dom";

// context
import { CartContext } from "../../context/CartContextProvider";

// icons
import shopIcon from "../../assets/icon/shop.svg";

// styles 
import styles from './Navbar.module.css'

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">HB Store</Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopIcon} alt="Shop Icon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
