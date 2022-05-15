import { Fragment } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "../../lib/client";
import styles from "../../styles/room.module.scss";

const RoomDetail = ({ room }) => {
  const { name, image, description, price, infos } = room;

  return (
    <Fragment>
      <div className={styles["detail-container"]}>
        <div className={styles["detail-container__image"]}>
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
        <PortableText value={infos} />
      </div>
    </Fragment>
  );
};

export default RoomDetail;
