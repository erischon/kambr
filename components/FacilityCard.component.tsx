import Image from "next/image";

const FacilityCard = ({ service }: any) => {
  return (
    <article>
      <h3 className="text-lg font-semibold">{service.name}</h3>
      <p className="text-sm">{service.description}</p>
    </article>
  );
};

export default FacilityCard;
