import RoomCard from "./RoomCard.component";

const Rooms = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-evenly sm:flex-wrap items-center my-8 mx-4 sm:gap-4">
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </section>
  );
};

export default Rooms;
