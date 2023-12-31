import type { Response, Request } from "express";
type gettingUserControllerFunctionTypes = (
  req: Request,
  res: Response
) => Promise<Response>;
