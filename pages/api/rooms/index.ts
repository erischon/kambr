import nc from "next-connect";

import { onError } from "../../../middlewares/errors";
import { getAllRooms, newRoom } from "../../../controllers/room.controller";
import dbConnect from "../../../config/dbConnect";

const handler = nc({ onError });

handler.get(getAllRooms);
handler.post(newRoom);

dbConnect();

export default handler;
