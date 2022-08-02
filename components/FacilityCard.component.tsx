import Image from "next/image";

const FacilityCard = () => {
  return (
    <article className="flex flex-col justify-center items-center w-36 shadow-md rounded-full p-8">
      <span className="relative w-24 h-24">
        <Image
          src="/images/streamlinehq-croissant-food-400.PNG"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </span>
      <h3 className="text-sm font-semibold">Petit Déjeuner</h3>
    </article>
  );
};

export default FacilityCard;
