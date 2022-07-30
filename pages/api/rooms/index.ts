import nc from "next-connect";
import { getAllRooms, newRoom } from "../../../controllers/room.controller";
import dbConnect from "../../../config/dbConnect";

const handler = nc();

handler.get(getAllRooms);
handler.post(newRoom);

dbConnect();

export default handler;
