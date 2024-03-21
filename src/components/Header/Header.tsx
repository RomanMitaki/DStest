import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo />
      <nav>
        <HeartIcon />
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
