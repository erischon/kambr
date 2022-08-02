import Image from "next/dist/client/image";

import Hero from "./Hero.component";
import Rooms from "./Rooms.component";
import Facilities from "./Facilities.component";
import Around from "./Around.component";

const Home = () => {
  return (
    <main className="flex-[6]">
      <Hero />
      <Rooms />
      <Facilities />
      <Around />
    </main>
  );
};

export default Home;
