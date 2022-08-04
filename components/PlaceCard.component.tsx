import Image from "next/image";

const AroundCard = ({ place }: any) => {
  return (
    <article className="flex w-full shadow-md sm:max-w-[300px] rounded-md">
      <div className="relative w-44 h-auto min-h-[170px] flex-1 min-w-[100px]">
        <Image
          src={place.imageUrl}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-tl-md rounded-bl-md"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-sm font-semibold">{place.title}</h3>
        <p className="text-sm text-gray-600">{place.description}</p>
      </div>
    </article>
  );
};

export default AroundCard;
