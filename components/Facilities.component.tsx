import FacilityCard from "./FacilityCard.component";

const Facilities = () => {
  return (
    <section className="my-8 mx-4">
      <h2 className="text-2xl font-bold">Les services à la maison</h2>

      <div className="flex flex-row flex-wrap justify-start items-center gap-6">
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
      </div>

      <div></div>
    </section>
  );
};

export default Facilities;
