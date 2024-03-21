import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { AppRoutes, RoutePath } from "../../utils/config/router";
import { ReactComponent as GroupIcon } from "../../assets/icons/group.svg";
import { ReactComponent as VkIcon } from "../../assets/icons/vk.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <nav className={styles.nav__wrapper_first}>
        <Link className={styles.link} to={RoutePath[AppRoutes.NOT_FOUND]}>
          Избранное
        </Link>
        <Link className={styles.link} to={RoutePath[AppRoutes.CART]}>
          Корзина
        </Link>
        <Link className={styles.link} to={RoutePath[AppRoutes.NOT_FOUND]}>
          Контакты
        </Link>
      </nav>
      <nav className={styles.nav__wrapper_second}>
        <Link className={styles.link} to={RoutePath[AppRoutes.NOT_FOUND]}>
          Условия сервиса
        </Link>
        <div className={styles.lang__container}>
          <GroupIcon />
          <button className={styles.btn}>Рус</button>
          <button className={styles.btn}>Eng</button>
        </div>
      </nav>
      <nav className={styles.social__container}>
        <a href="https://vk.com/" target="_blank" className={styles.link}>
          <VkIcon />
        </a>
        <a
          href="https://web.telegram.org"
          target="_blank"
          className={styles.link}
        >
          <TelegramIcon />
        </a>
        <a
          href="https://www.whatsapp.com/?lang=ru_RU"
          target="_blank"
          className={styles.link}
        >
          <WhatsappIcon />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
