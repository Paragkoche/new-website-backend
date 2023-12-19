import type { Response, Request, NextFunction } from "express";
type dataValidateFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => any;
