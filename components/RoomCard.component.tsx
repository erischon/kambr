import Image from "next/image";

import { BsPerson } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const RoomCard = ({ room }: any) => {
  return (
    <article className="shadow-md w-full md:w-64 mb-8 rounded-xl">
      <div className="h-64 md:h-44 w-auto relative">
        <Image
          src={room.images[0].url}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="flex justify-between items-center md:items-start my-4 mx-4 md:flex-col md:gap-4">
        <div className="">
          <h2 className="font-semibold text-lg mb-2">{room.name}</h2>
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{room.guestCapacity}</span>
              <span className="text-sm">
                <BsPerson />
              </span>
            </div>
            <p>{room.pricePerNight}€ p/nuit</p>
          </div>
        </div>

        <div className="">
          <div className="py-2 px-5 bg-amber-500 rounded-lg flex  items-center gap-2 cursor-pointer align-middle">
            <span className="inline-block font-semibold align-middle">
              Réserver{" "}
            </span>
            <span className="inline-block font-semibold text-lg align-inline">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
