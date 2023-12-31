import { Router } from "express";
import UserRoutes from "./user.routes";
const route = Router();

route.use("/users", UserRoutes);
export default route;
