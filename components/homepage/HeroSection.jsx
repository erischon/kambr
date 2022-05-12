import { Fragment } from "react";

import styles from "../../styles/heroSection.module.scss";

const HeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Les Champs Bleus</h1>
        <p className={styles.heroSubtitle}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          enim, illo tempore vitae molestias expedita tempora fugit dolor!{" "}
        </p>
        <button className={styles.heroBtn}>Réserver</button>
      </section>
    </Fragment>
  );
};

export default HeroSection;
