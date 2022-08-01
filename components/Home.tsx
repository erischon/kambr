import React from "react";
import Image from "next/dist/client/image";
import Hero from "./Hero.component";
import Rooms from "./Rooms.component";

const Home = () => {
  return (
    <main className="flex-[6]">
      <Hero />
      <Rooms />
      <section>Chez nous on vous propose</section>
      <section>Autour</section>
    </main>
  );
};

export default Home;
