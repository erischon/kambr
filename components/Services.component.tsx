import Image from "next/image";
import ServiceCard from "./ServiceCard.component";
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

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 my-8">
        {services.map((service: any, i: number) =>
          !service.option ? <ServiceCard key={i} service={service} /> : null
        )}
      </div>

      <More text="Tous les services en détail" url="#services" />
    </section>
  );
};

export default Facilities;
