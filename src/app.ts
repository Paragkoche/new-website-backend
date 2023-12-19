/**
 * app.ts
 *
 * This file is responsible for creating a server using Express, connecting routers, and adding middleware.
 *
 * Dependencies:
 * - Express: A web application framework for Node.js
 */

import Express from "express";
import { log } from "./helpers/console";
import router from "./router";
const app = Express();
app.use(Express.json());
app.use("/api/v1", router);
app.get("/", (req, res) => {
  log("info", "Api hit on '/'");
  res.json({
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    ping: "pong",
    message: "Api Running...",
  });
});
export default app;
