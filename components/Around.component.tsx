import AroundCard from "./AroundCard.component";
import More from "./More.component";

const Around = () => {
  return (
    <section className="my-8 mx-4" id="environs">
      <h2 className="text-2xl font-bold">Around</h2>

      <div className="flex flex-row gap-4 flex-wrap justify-evenly mt-8">
        <AroundCard />
        <AroundCard />
        <AroundCard />
      </div>

      <More text="Autres lieux dans les environs" url="#" />
    </section>
  );
};

export default Around;
