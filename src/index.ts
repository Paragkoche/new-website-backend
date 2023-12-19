/**
 * index.ts
 *
 * This file is specifically designed for connecting to the database and starting/listening to the server.
 * It imports the Express application from the 'app' module and initiates the server on port 8080.
 */
import app from "@/app";
import db from "./database/db";
import { log } from "./helpers/console";
app.listen(8080, async () => {
  console.clear();
  log("warring", "Data base loading..");
  await db.initialize();
  log("info", "Data base load");
  log("info", "server start in http://localhost:8080");
});
