import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

const FacilityCard = ({ service }: any) => {
  return (
    <article className="grid grid-cols-8 shadow-sm bg-orange-100 rounded-md">
      <div className="col-span-1 flex items-center justify-center font-semibold text-green-600">
        <FiCheckCircle />
      </div>
      <h3 className="p-2 h-full col-span-7 truncate text-sm">{service.name}</h3>
    </article>
  );
};

export default FacilityCard;
