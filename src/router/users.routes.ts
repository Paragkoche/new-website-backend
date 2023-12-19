import { Router } from "express";
import { gettingUserController } from "@/controller";
const router = Router();

// getting user by starting and ending page
router.get("/", gettingUserController);

export default router;
