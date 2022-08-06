import axios from "axios";
import absoluteUrl from "next-absolute-url";

import HomePage from "../components/Home";
import Layout from "../components/layout/Layout";

export default function Home({ roomsData, servicesData, placesData }: any) {
  const { rooms } = roomsData;
  const { services } = servicesData;
  const { places } = placesData;

  const seoData = {
    description: "Application Web pour Chambre d'hôtes",
    title: "Kambr",
    url: "https://kambr.vercel.app/",
    twitterUsername: "",
  };

  return (
    <>
      <Layout title="Kambr" seoData={seoData}>
        <HomePage rooms={rooms} services={services} places={places} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req }: any) => {
  const { origin } = absoluteUrl(req);

  const roomsEndpoint = `${origin}/api/rooms`;
  const servicesEndpoint = `${origin}/api/services`;
  const placesEndpoint = `${origin}/api/places`;

  const rooms = await axios.get(roomsEndpoint);
  const services = await axios.get(servicesEndpoint);
  const places = await axios.get(placesEndpoint);

  return {
    props: {
      roomsData: rooms.data,
      servicesData: services.data,
      placesData: places.data,
    },
  };
};
