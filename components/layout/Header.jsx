import { Fragment } from "react";
import Link from "next/link";

import styles from "../../styles/header.module.scss";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.headContainer}>
        <div className={styles.logo}>Kambr</div>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.link}>Chambres</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Chez Nous</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Aux Environs</a>
          </Link>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
