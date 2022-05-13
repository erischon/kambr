import { Fragment } from "react";
import Image from "next/image";

import { urlFor } from "../../lib/client";
import styles from "../../styles/room.module.scss";

const RoomCard = ({ room: { image, name } }) => {
  return (
    <Fragment>
      <div className={styles.roomCardContainer}></div>
      <Image
        src={urlFor(image && image[0]).url()}
        width={200}
        height={200}
        alt={name}
      />
      <div>{name}</div>
    </Fragment>
  );
};

export default RoomCard;
