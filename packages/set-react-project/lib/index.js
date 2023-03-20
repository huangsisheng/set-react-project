const chalk = require("chalk");
const clear = require("clear");
const { promisify } = require("util");
const figlet = promisify(require("figlet"));

const log = (content, color = "orange") =>
  console.log(chalk[color](content));

module.exports = async (name) => {
  clear();
  const txt = await figlet(`WELCOME USING SRP`);
  log(txt);

  log(`Set react project: ${name}`);
};
