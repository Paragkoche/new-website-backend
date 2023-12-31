import { UserRepo } from "@/database/repo";
import { log } from "@/helpers/console";
import { gettingUserControllerFunctionTypes } from "@/types/user.controller";

export const gettingUserController: gettingUserControllerFunctionTypes = async (
  req,
  res
) => {
  try {
    log("info", `Api hit on ${req.url}`);
    const start = parseInt((req.query.start as string) || "1") - 1;
    const end = parseInt((req.query.end as string) || "10");
    if (start > end) {
      log("warring", "Invalid rage enter");

      log("info", `${req.url} Api respond with 201 server code`);
      return res.status(201).json({
        message: `[error] you enter wrong numbers ${start} start ${end} end`,
      });
    }
    const data = await UserRepo.find({ skip: start, take: end });
    log("info", `${req.url} Api respond with 200 server code`);
    return res.json({
      message: "[data] successfully data find",
      data: data.map((userData) => ({
        ...userData,
        password: undefined,
      })),
    });
  } catch (e) {
    log("error", `${req.url} Api respond with 500 server code`);
    console.warn("Error :", e);

    return res.status(500).json({
      message: "[error] " + e.toString(),
    });
  }
};
