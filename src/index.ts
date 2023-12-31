import app from "@/app";
import db from "@/database/db";
import { log } from "@/helpers/console";
import env from "./env";
const PORT = env.PORT;
app.listen(PORT, async () => {
  console.clear();
  log("warring", "Data base loading..");
  await db.initialize();
  log("info", "Data base load");
  log("info", "server start in http://localhost:" + PORT);
});
