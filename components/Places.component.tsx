import PlaceCard from "./PlaceCard.component";
import More from "./More.component";

const Around = ({ places }: any) => {
  return (
    <section className="my-12 mx-4" id="environs">
      <div className="flex flex-col gap-2 sm:w-2/3 before:content[''] before:bg-orange-400 before:w-[200px] before:h-[3px]">
        <h2 className="text-2xl font-bold">Dans les environs</h2>
        <p className="text-sm">
          Nous savons que vous n&apos;allez pas vouloir sortir tellement vous
          serez bien, mais au cas où...
        </p>
      </div>

      <div className="flex flex-row gap-4 flex-wrap justify-evenly mt-8">
        {places.map((place: any) => (
          <PlaceCard key={place._id} place={place} />
        ))}
      </div>

      <More text="Autres lieux dans les environs" url="#environs" />
    </section>
  );
};

export default Around;
