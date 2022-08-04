import Image from "next/dist/client/image";

import Hero from "./Hero.component";
import Rooms from "./Rooms.component";
import Services from "./Services.component";
import Places from "./Places.component";
import Location from "./Location.component";
import Contact from "./Contact.component";

const Home = ({ rooms, services, places }: any) => {
  return (
    <main className="flex-[6]">
      <Hero />
      <Rooms rooms={rooms} />
      <Services services={services} />
      <Places places={places} />
    </main>
  );
};

export default Home;
