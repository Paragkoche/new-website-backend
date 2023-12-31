import chalk from "ansi-colors";
import { logFunction } from "@/types/console";
import util from "util";
import fs from "fs";
import path from "path";

const outputLog = fs.createWriteStream(path.join(".", "log", "info.log"), {
  flags: "a",
});
const errorLog = fs.createWriteStream(path.join(".", "log", "error.log"), {
  flags: "a",
});

export const log: logFunction = (level, message, ...op) => {
  if (level.toLocaleLowerCase() == "info") {
    outputLog.write(
      util.format(
        `💁 [${level.toUpperCase()}]\t` +
          "[" +
          new Date().toLocaleString() +
          "] " +
          message +
          op +
          "\n"
      )
    );
    // outputLog.write(util.format(message) + " ");
    // outputLog.write(util.format(...op) + "\n");
  } else {
    errorLog.write(
      util.format(
        `[${level.toUpperCase()}]\t` +
          "[" +
          new Date().toLocaleString() +
          "] " +
          message +
          op +
          "\n"
      )
    );
  }
  switch (level.toLocaleLowerCase()) {
    case "info":
      return console.log(
        chalk.green("💁 [INFO]\t"),
        chalk.blueBright("[" + new Date().toLocaleString() + "] "),
        chalk.blue(message),
        ...op
      );
    case "error":
      return console.log(
        chalk.red("🛑 [ERROR]\t"),
        chalk.blueBright("[" + new Date().toLocaleString() + "] "),
        chalk.red(message),
        ...op
      );
    case "warring":
      return console.log(
        chalk.yellow("⚠️ [WARRING]\t"),
        chalk.blueBright("[" + new Date().toLocaleString() + "] "),
        chalk.yellow(message),
        ...op
      );
  }
};
