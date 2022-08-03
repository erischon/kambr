import Image from "next/dist/client/image";

import Hero from "./Hero.component";
import Rooms from "./Rooms.component";
import Facilities from "./Facilities.component";
import Around from "./Around.component";
import Location from "./Location.component";
import Contact from "./Contact.component";

const Home = ({ rooms }: any) => {
  return (
    <main className="flex-[6]">
      <Hero />
      <Rooms rooms={rooms} />
      <Facilities />
      <Around />
    </main>
  );
};

export default Home;
