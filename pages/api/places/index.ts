import nc from "next-connect";

import { onError } from "../../../middlewares/errors";
import { getAllPlaces, newPlace } from "../../../controllers/place.controller";
import dbConnect from "../../../config/dbConnect";

const handler = nc({ onError });

handler.get(getAllPlaces);
handler.post(newPlace);

dbConnect();

export default handler;
