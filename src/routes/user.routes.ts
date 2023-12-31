import { gettingUserController } from "@/controller/user.controller";
import { Router } from "express";

const router = Router();
router.get("/", gettingUserController);
export default router;
