import RoomCard from "./RoomCard.component";

const Rooms = ({ rooms }: any) => {
  return (
    <section
      className="flex flex-col sm:flex-row sm:justify-evenly sm:flex-wrap items-center my-8 mx-4 sm:gap-4"
      id="chambres"
    >
      {rooms.map((room: any) => (
        <RoomCard room={room} key={room._id} />
      ))}
    </section>
  );
};

export default Rooms;
