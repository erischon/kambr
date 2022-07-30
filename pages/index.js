import { Fragment } from "react";

import { client } from "../lib/client";
import Layout from "../components/layout/Layout";
import RoomCard from "../components/room/RoomCard";

export default function Home({ rooms }) {
  return (
    <Fragment>
      <Layout>
        <h1>HomePage</h1>
        {rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </Layout>
    </Fragment>
  );
}

// Fetch data from Sanity
// @query       all type rooms
// @return      rooms
/**
 *
 * @returns
 */
export const getServerSideProps = async () => {
  const query = '*[_type == "room"]';
  const rooms = await client.fetch(query);
  return {
    props: { rooms },
  };
};
