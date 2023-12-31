import { verifyUserToken } from "@/helpers/token.helper";
import { Request, Response, NextFunction } from "express";
import { log } from "./console";
export const AuthUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      log("info", "UnAuthorized", {
        originalUrl: req.originalUrl,
        ips: req.ips,
        url: req.url,
        origin: req.headers.origin,
        headers: req.headers,
      });
      return res.status(401).json({
        message: "UnAuthorized",
      });
    }
    const JWT_TOKEN = token.split(" ").at(-1);
    if (!JWT_TOKEN) {
      log("info", "UnAuthorized", {
        originalUrl: req.originalUrl,
        ips: req.ips,
        url: req.url,
        origin: req.headers.origin,
        headers: req.headers,
      });

      return res.status(401).json({
        message: "UnAuthorized",
      });
    }
    const verify = verifyUserToken(JWT_TOKEN);
    if (!verify) {
      log("info", "UnAuthorized", {
        originalUrl: req.originalUrl,
        ips: req.ips,
        url: req.url,
        origin: req.headers.origin,
        headers: req.headers,
      });
      return res.status(401).json({
        message: "UnAuthorized",
      });
    }
    log("info", "GO TO NEXT ->");
    return next();
  } catch (err) {
    log("error", err);
    return res.status(501).json({
      message: "[error] Internal server error",
      error: err,
    });
  }
};
