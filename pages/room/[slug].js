import RoomDetail from "../../components/room/RoomDetail";
import { client } from "../../lib/client";

const RoomDetailPage = ({ rooms, room }) => {
  console.log("Props", rooms);
  return (
    <div>
      <RoomDetail room={room} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "room"] {
        slug {
            current
        }
    }`;

  const rooms = await client.fetch(query);

  const paths = rooms.map((room) => ({
    params: {
      slug: room.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "room" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "room"]';

  const room = await client.fetch(query);
  const rooms = await client.fetch(productsQuery);

  return {
    props: { rooms, room },
  };
};

export default RoomDetailPage;
