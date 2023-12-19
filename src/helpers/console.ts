import chalk from "ansi-colors";

type logFunction = (
  level: "info" | "error" | "warring",
  message: string,
  ...op: string[]
) => void;
export const log: logFunction = (level, message, ...op) => {
  switch (level.toLocaleLowerCase()) {
    case "info":
      return console.log(
        chalk.green("💁 [INFO]\t"),
        chalk.blueBright("[" + new Date().toUTCString() + "] "),
        chalk.blue(message)
      );
    case "error":
      return console.log(
        chalk.red("🛑 [ERROR]\t"),
        chalk.blueBright("[" + new Date().toUTCString() + "] "),
        chalk.red(message)
      );
    case "warring":
      return console.log(
        chalk.yellow("⚠️ [WARRING]\t"),
        chalk.blueBright("[" + new Date().toUTCString() + "] "),
        chalk.yellow(message)
      );
  }
};
