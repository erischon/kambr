import AroundCard from "./AroundCard.component";
import More from "./More.component";

const Around = () => {
  return (
    <section className="my-8 mx-4">
      <h2 className="text-2xl font-bold">Around</h2>

      <div className="flex flex-row gap-4 flex-wrap justify-evenly mt-8">
        <AroundCard />
        <AroundCard />
        <AroundCard />
      </div>

      <More text="Autres lieux dans les environs" />
    </section>
  );
};

export default Around;