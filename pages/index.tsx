import axios from "axios";
import absoluteUrl from "next-absolute-url";

import HomePage from "../components/Home";
import Layout from "../components/layout/Layout";

export default function Home({ roomsData, servicesData }: any) {
  const { rooms } = roomsData;
  const { services } = servicesData;
  console.log("=====services=========", services);

  return (
    <>
      <Layout title="Kambr">
        <HomePage rooms={rooms} services={services} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req }: any) => {
  const { origin } = absoluteUrl(req);

  const roomsEndpoint = `${origin}/api/rooms`;
  const servicesEndpoint = `${origin}/api/services`;

  const rooms = await axios.get(roomsEndpoint);
  const services = await axios.get(servicesEndpoint);

  return { props: { roomsData: rooms.data, servicesData: services.data } };
};
