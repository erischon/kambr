import RoomCard from "./RoomCard.component";

const Rooms = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-evenly lg:flex-wrap items-center my-8 px-2 lg:gap-4">
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </section>
  );
};

export default Rooms;
