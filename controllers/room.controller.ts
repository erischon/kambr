import type { NextApiRequest, NextApiResponse } from "next";

import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import Room from "../models/room";

/**
 * Get all the rooms
 * @access public
 * @route GET /api/rooms
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getAllRooms = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
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
  }
);

/**
 * Create a new room
 * @access public
 * @route POST /api/rooms
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const newRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
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
  }
);

/**
 * Get room detail
 * @access public
 * @route POST /api/rooms/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getSingleRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      const room = await Room.findById(req.query.id);

      if (!room) {
        return next(new ErrorHandler("Room not found with this id", 404));
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
  }
);

/**
 * Update room detail
 * @access private
 * @route PUT /api/rooms/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const updateRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      let room = await Room.findById(req.query.id);

      if (!room) {
        return next(new ErrorHandler("Room not found with this id", 404));
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
  }
);

/**
 * Delete room
 * @access private
 * @route DELETE /api/rooms/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const deleteRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      const room = await Room.findById(req.query.id);

      if (!room) {
        return next(new ErrorHandler("Room not found with this id", 404));
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
  }
);

export { getAllRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
