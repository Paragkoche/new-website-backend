import { Router } from "express";
import UserRoute from "./users.routes";
import ProgramRoute from "./program.routes";
const router = Router();

router.use("/users", UserRoute);
router.use("/program", ProgramRoute);
export default router;
