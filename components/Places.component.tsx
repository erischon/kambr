import PlaceCard from "./PlaceCard.component";
import More from "./More.component";

const Around = ({ places }: any) => {
  return (
    <section className="my-8 mx-4" id="environs">
      <h2 className="text-2xl font-bold">Aux alentours</h2>

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
