import Image from "next/image";
import React from "react";

const RoomCard = () => {
  return (
    <article>
      <Image
        src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
        width={200}
        height={200}
      />
    </article>
  );
};

export default RoomCard;
