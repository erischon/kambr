import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsInfoSquare } from "react-icons/bs";

import { urlFor } from "../../lib/client";
import styles from "../../styles/room.module.scss";

const RoomCard = ({ room: { image, name, slug } }) => {
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
          <Link href={`/room/${slug.current}`}>
            <a className={styles.roomCardInfo}>
              <BsInfoSquare />
            </a>
          </Link>
        </div>
        <Link href={`/room/${slug.current}`}>
          <button className={styles.roomCardButton}>Réserver</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default RoomCard;
