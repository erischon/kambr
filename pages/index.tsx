import HomePage from "../components/Home";
import Layout from "../components/layout/Layout";

import { getRooms, getServices, getPlaces } from "../lib/homeFetch.lib";

export default function Home({ servicesData, placesData, roomsData }: any) {
  const { rooms } = roomsData;
  const { services } = servicesData;
  const { places } = placesData;

  const seoData = {
    description: "Application Web pour Chambre d'hôtes",
    title: "Kambr",
    url: "https://kambr.vercel.app/",
    twitterUsername: "@EriSchon",
  };

  return (
    <>
      <Layout title="Kambr" seoData={seoData}>
        <HomePage rooms={rooms} services={services} places={places} />
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ req }: any) => {
  const rooms = await getRooms();
  const services = await getServices();
  const places = await getPlaces();

  return {
    props: {
      roomsData: rooms.data,
      servicesData: services.data,
      placesData: places.data,
    },
  };
};
