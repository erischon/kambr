import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Get all the rooms
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getAllRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

export { getAllRooms };
