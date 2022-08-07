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
    <section className="my-12 mx-4" id="services">
      <div className="flex flex-col gap-2 sm:w-2/3 ">
        <h2 className="text-2xl font-bold relative after:content[''] after:bg-orange-400 after:w-[50px] after:h-[3px] after:absolute after:bottom-3 after:right-[-60px] w-fit">
          Aux petits soins
        </h2>
        <p className="text-sm">
          Pour que vous soyez le mieux possible chez nous le temps de votre
          séjour nous vous proposons différentes commoditées.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 my-8">
        {services.map((service: any, i: number) =>
          !service.option ? <ServiceCard key={i} service={service} /> : null
        )}
      </div>

      <More text="Tous les services en détail" url="soon" />
    </section>
  );
};

export default Facilities;
