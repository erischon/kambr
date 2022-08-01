import React from "react";
import Image from "next/dist/client/image";
import Hero from "./Hero.component";

const Home = () => {
  return (
    <main className="flex-[6]">
      <Hero />
      <section>Les chambres</section>
      <section>Chez nous on vous propose</section>
      <section>Autour</section>
    </main>
  );
};

export default Home;
