import { FaTools } from "react-icons/fa";
import Layout from "../components/layout/Layout";

const Soon = () => {
  const seoData = {
    description: "Under Construction Page",
    title: "Soon...",
    url: "https://kambr.vercel.app/",
  };

  return (
    <>
      <Layout title="Kambr" seoData={seoData}>
        <div className="h-screen flex flex-col justify-center items-center bg-amber-200">
          <div className="text-8xl">
            <FaTools />
          </div>
          <div className="text-6xl my-6">Coming Soon...</div>
        </div>
      </Layout>
    </>
  );
};

export default Soon;
