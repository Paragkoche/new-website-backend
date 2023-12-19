import {
  PostInternshipControllerFunction,
  gettingInternshipControllerFunction,
} from "@/controller";
import { InternShipProgramPostingData } from "@/helpers/dataVaibate";
import { Router } from "express";

const router = Router();

router.get("/", gettingInternshipControllerFunction);
router.post(
  "/",
  InternShipProgramPostingData,
  PostInternshipControllerFunction
);

export default router;
