import jwt from "jsonwebtoken";
import env from "@/env";
export const createUserToken = (data: { id: string }) =>
  jwt.sign(data, env.TOKEN_KEY);
export const verifyUserToken = (token: string) =>
  jwt.verify(token, env.TOKEN_KEY);
