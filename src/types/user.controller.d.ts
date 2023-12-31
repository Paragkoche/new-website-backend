import { User } from "@/database/entity/User.entity";
import type { Response, Request } from "express";
type gettingUserControllerFunctionTypes = (
  req: Request,
  res: Response
) => Promise<Response>;

interface UserAuthRequest extends Request {
  UserObject: User;
}
