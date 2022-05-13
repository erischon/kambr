import { Fragment } from "react";
import Image from "next/image";

import { urlFor } from "../../lib/client";
import styles from "../../styles/room.module.scss";

const RoomCard = ({ room: { image, name } }) => {
  const imgUrl = urlFor(image && image[0]);
  console.log("Image URL: ", imgUrl);

  return (
    <Fragment>
      <div className={styles.roomCardContainer}></div>
      <img
        src={urlFor(image && image[0])}
        width={200}
        height={200}
        alt={name}
      />
      <div>{name}</div>
    </Fragment>
  );
};

export default RoomCard;
