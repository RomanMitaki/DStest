import styles from "./Logo.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes, RoutePath } from "../../utils/config/router";

const Logo = () => {
  return (
    <Link to={RoutePath[AppRoutes.CATALOG]} className={styles.link}>
      <h1 className={styles.text}>QPICK</h1>
    </Link>
  );
};

export default Logo;
