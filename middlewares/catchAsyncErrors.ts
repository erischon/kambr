import type { NextApiRequest, NextApiResponse } from "next";

/**
 *
 * @param func
 * @returns
 */
export const catchAsyncErrors =
  (func: any) => (req: NextApiRequest, res: NextApiResponse, next: any) =>
    Promise.resolve(func(req, res, next)).catch(next);
