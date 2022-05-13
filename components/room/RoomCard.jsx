import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsInfoSquare } from "react-icons/bs";

import { urlFor } from "../../lib/client";
import styles from "../../styles/room.module.scss";

const RoomCard = ({ room: { image, name } }) => {
  return (
    <Fragment>
      <div className={styles.roomCardContainer}>
        <div className={styles.roomCardImg}>
          <Image
            src={urlFor(image && image[0]).url()}
            layout="fill"
            objectFit="cover"
            alt={name}
            quality={75}
            priority={true}
          />
        </div>
        <div className={styles.roomCardBottom}>
          <h2 className={styles.roomCardTitle}>{name}</h2>
          <Link href="/">
            <a className={styles.roomCardInfo}>
              <BsInfoSquare />
            </a>
          </Link>
        </div>
        <button className={styles.roomCardButton}>Réserver</button>
      </div>
    </Fragment>
  );
};

export default RoomCard;
