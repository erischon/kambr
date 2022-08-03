import axios from "axios";
import absoluteUrl from "next-absolute-url";

import HomePage from "../components/Home";
import Layout from "../components/layout/Layout";

export default function Home({ rooms }: any) {
  return (
    <>
      <Layout title="Kambr">
        <HomePage rooms={rooms} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req }: any) => {
  const { origin } = absoluteUrl(req);
  const link = `${origin}/api/rooms`;

  // const ALLROOMS = "http://localhost:3000/api/rooms";
  const { data } = await axios.get(link);

  return { props: data };
};
