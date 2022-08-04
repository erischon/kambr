import type { NextApiRequest, NextApiResponse } from "next";

import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import Place from "../models/place";

/**
 * Get all the Places
 * @route GET /api/places
 * @access public
 */
const getAllPlaces = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const places = await Place.find();

      res.status(200).json({
        success: true,
        count: places.length,
        places,
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
 * Create a new Place
 * @route POST /api/places
 * @access public
 */
const newPlace = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const place = await Place.create(req.body);

      res.status(200).json({
        success: true,
        place,
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
 * Get Place detail
 * @route POST /api/Places/:id
 * @access public
 */
const getSinglePlace = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      const place = await Place.findById(req.query.id);

      if (!place) {
        return next(new ErrorHandler("Place not found with this id", 404));
      }

      res.status(200).json({
        success: true,
        Place,
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
 * Update Place detail
 * @route PUT /api/places/:id
 * @access private
 */
const updatePlace = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      let place = await Place.findById(req.query.id);

      if (!place) {
        return next(new ErrorHandler("Place not found with this id", 404));
      }

      place = await Place.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        Place,
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
 * Delete Place
 * @route DELETE /api/Places/:id
 * @access private
 */
const deletePlace = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      const place = await Place.findById(req.query.id);

      if (!place) {
        return next(new ErrorHandler("Place not found with this id", 404));
      }

      await Place.remove();

      res.status(200).json({
        success: true,
        message: "Place is deleted.",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: (err as Error).message,
      });
    }
  }
);

export { getAllPlaces, newPlace, getSinglePlace, updatePlace, deletePlace };
