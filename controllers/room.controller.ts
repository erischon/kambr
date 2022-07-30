import type { NextApiRequest, NextApiResponse } from "next";
import Room from "../models/room";

/**
 * Get all the rooms
 * @access public
 * @route GET /api/rooms
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getAllRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: (err as Error).message,
    });
  }
};

/**
 * Create a new room
 * @access public
 * @route POST /api/rooms
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: (err as Error).message,
    });
  }
};

export { getAllRooms, newRoom };
