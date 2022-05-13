import { Fragment } from "react";

import styles from "../../styles/heroSection.module.scss";

const HeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroContainer}>
        <div className={styles.heroBox}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>La ferme de Kerouac</h1>
            <p className={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              enim, illo tempore vitae molestias expedita tempora fugit dolor!{" "}
            </p>
            <button className={styles.heroBtn}>Réserver</button>
          </div>

          <div className={styles.heroRight}></div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
