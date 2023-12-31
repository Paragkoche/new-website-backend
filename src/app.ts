import Express from "express";
import v1Routes from "@/routes";
const app = Express();
app.use("/api/v1/", v1Routes);
export default app;
