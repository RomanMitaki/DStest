import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";
import { AppRoutes, RoutePath } from "../../utils/config/router";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav__wrapper}>
        <Link className={styles.link} to={RoutePath[AppRoutes.NOT_FOUND]}>
          <HeartIcon />
          <span className={styles.btn__counter}>1</span>
        </Link>
        <Link className={styles.link} to={RoutePath[AppRoutes.CART]}>
          <CartIcon />
          <span className={styles.btn__counter}>10</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
