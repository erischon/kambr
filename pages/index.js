import { client } from "../lib/client";
import styles from "../styles/home.module.scss";
import Layout from "../components/layout/Layout";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
