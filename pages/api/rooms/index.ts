import nc from "next-connect";
import { getAllRooms } from "../../../controllers/room.controller";
import connectDB from "../../../config/dbConnect";

const handler = nc();

handler.get(getAllRooms);

const db = connectDB();
console.log(db);

export default handler;
