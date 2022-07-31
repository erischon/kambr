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

/**
 * Get room detail
 * @access public
 * @route POST /api/rooms/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getSingleRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id",
      });
    }

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

/**
 * Update room detail
 * @access private
 * @route PUT /api/rooms/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const updateRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id",
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

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

/**
 * Delete room
 * @access private
 * @route DELETE /api/rooms/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const deleteRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id",
      });
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room is deleted.",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: (err as Error).message,
    });
  }
};

export { getAllRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
