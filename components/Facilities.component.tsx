import Image from "next/image";
import FacilityCard from "./FacilityCard.component";
import More from "./More.component";

interface service {
  name: string;
  description: string;
  option: boolean;
  optionPricing: number;
}

const Facilities = ({ services }: any) => {
  return (
    <section className="my-8 mx-4" id="services">
      <h2 className="text-2xl font-bold">Les services comme à la maison</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-8">
        {services.map((service: any, i: number) => (
          <FacilityCard key={i} service={service} />
        ))}
      </div>

      <More text="Tous les services" url="#services" />
    </section>
  );
};

export default Facilities;
