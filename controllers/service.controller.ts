import type { NextApiRequest, NextApiResponse } from "next";

import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import Service from "../models/service";

/**
 * Get all the services
 * @access public
 * @route GET /api/services
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getAllServices = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const services = await Service.find();

      res.status(200).json({
        success: true,
        count: services.length,
        services,
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
 * Create a new service
 * @access public
 * @route POST /api/services
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const newService = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const service = await Service.create(req.body);

      res.status(200).json({
        success: true,
        service,
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
 * Get service detail
 * @access public
 * @route POST /api/services/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const getSingleService = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      const service = await Service.findById(req.query.id);

      if (!service) {
        return next(new ErrorHandler("service not found with this id", 404));
      }

      res.status(200).json({
        success: true,
        service,
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
 * Update service detail
 * @access private
 * @route PUT /api/services/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const updateService = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      let service = await Service.findById(req.query.id);

      if (!service) {
        return next(new ErrorHandler("service not found with this id", 404));
      }

      service = await service.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        service,
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
 * Delete service
 * @access private
 * @route DELETE /api/services/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const deleteService = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    try {
      const service = await Service.findById(req.query.id);

      if (!service) {
        return next(new ErrorHandler("service not found with this id", 404));
      }

      await service.remove();

      res.status(200).json({
        success: true,
        message: "service is deleted.",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: (err as Error).message,
      });
    }
  }
);

export {
  getAllServices,
  newService,
  getSingleService,
  updateService,
  deleteService,
};
