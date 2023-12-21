import app from "@/app";
import db from "@/database/db";
import { log } from "@/helpers/console";
app.listen(3000, async () => {
  console.clear();
  log("warring", "Data base loading..");
  await db.initialize();
  log("info", "Data base load");
  log("info", "server start in http://localhost:8080");
});
