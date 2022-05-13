import { Fragment } from "react";

import { client } from "../../lib/client";
import Layout from "../../components/layout/Layout";
import RoomCard from "../../components/room/RoomCard";

const RoomPage = ({ rooms }) => {
  return (
    <Fragment>
      <Layout>
        {rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </Layout>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "room"]';
  const rooms = await client.fetch(query);

  return {
    props: { rooms },
  };
};

export default RoomPage;
