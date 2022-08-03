import nc from "next-connect";

import { onError } from "../../../middlewares/errors";
import {
  getAllServices,
  newService,
} from "../../../controllers/service.controller";
import dbConnect from "../../../config/dbConnect";

const handler = nc({ onError });

handler.get(getAllServices);
handler.post(newService);

dbConnect();

export default handler;
