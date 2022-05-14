import { Fragment } from "react";
import Image from "next/image";

import { urlFor } from "../../lib/client";
import styles from "../../styles/room.module.scss";

const RoomDetail = ({ room }) => {
  const { name, image, description, price } = room;

  return (
    <Fragment>
      <div className={styles.roomDetailContainer}>
        <div className={styles.roomDetailImg}>
          <Image
            src={urlFor(image && image[0]).url()}
            layout="fill"
            objectFit="cover"
            alt={name}
          />
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}€</p>
      </div>
    </Fragment>
  );
};

export default RoomDetail;
