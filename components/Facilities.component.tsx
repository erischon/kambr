import FacilityCard from "./FacilityCard.component";
import More from "./More.component";

const Facilities = () => {
  return (
    <section className="my-8 mx-4" id="services">
      <h2 className="text-2xl font-bold">Les services à la maison</h2>

      <div className="flex flex-row flex-wrap justify-evenly items-center gap-6">
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
      </div>

      <More text="Tous les services" />
    </section>
  );
};

export default Facilities;
