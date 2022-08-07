import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

const FacilityCard = ({ service }: any) => {
  return (
    <article className="grid grid-cols-8 shadow-md  rounded-md">
      <div className="col-span-2 flex items-center justify-center font-semibold text-green-600">
        <FiCheckCircle />
      </div>
      <h3 className="p-2 h-full col-span-6 truncate text-sm">{service.name}</h3>
    </article>
  );
};

export default FacilityCard;
