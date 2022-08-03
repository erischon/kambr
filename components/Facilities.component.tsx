import Image from "next/image";
import FacilityCard from "./FacilityCard.component";
import More from "./More.component";

import interieurImg from "../assets/images/streamlinehq-house-2-real-estate-construction-400.PNG";
import exterieurImg from "../assets/images/streamlinehq-house-ecosystem-ecology-400.PNG";
import optionsImg from "../assets/images/streamlinehq-laundry-hotel-spa-400.PNG";

const Facilities = ({ services }: any) => {
  return (
    <section className="my-8 mx-4" id="services">
      <h2 className="text-2xl font-bold">Les services comme à la maison</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
      </div>

      {services.map((service: any) => (
        <div key={service._id}>{service.name}</div>
      ))}

      <More text="Tous les services" url="#services" />
    </section>
  );
};

export default Facilities;
