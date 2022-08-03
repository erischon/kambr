import Image from "next/image";
import servicesImg from "../assets/images/streamlinehq-double-bed-room-hotel-spa-400.PNG";

const FacilityCard = () => {
  return (
    <article>
      <div className="relative w-28 h-28">
        <Image src={servicesImg} alt="" layout="fill" objectFit="cover" />
      </div>

      <ul>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>
    </article>
  );
};

export default FacilityCard;
