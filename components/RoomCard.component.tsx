import Image from "next/image";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const RoomCard = () => {
  return (
    <article className="shadow-md w-full md:w-64 mb-8 rounded-xl">
      <div className="h-64 md:h-44 w-auto relative">
        <Image
          src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="flex justify-between items-center md:items-start my-4 mx-4 md:flex-col md:gap-4">
        <div className="">
          <h2 className="font-semibold text-lg mb-2">Nom de la chambre</h2>
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-semibold">2</span>
              <span className="text-sm">
                <PersonOutlineIcon />
              </span>
            </div>
            <p>35€ p/nuit</p>
          </div>
        </div>

        <div className="">
          <div className="py-2 px-5 bg-amber-500 rounded-lg flex items-center gap-2 cursor-pointer">
            <span className="font-semibold">Réserver</span>
            <span className="text-amber-700">
              <ArrowCircleRightOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
