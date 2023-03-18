const chalk = require("chalk")
const clear = require("clear")
const { promisify } = require("util")
const figlet = promisify(require("figlet"))

const log = (content: string, color = "orange") => console.log(chalk[color](content))

module.exports = async (name: string) => {
  clear()
  const txt: string = await figlet(`WELCOME USING SRP`)
  log(txt)

  log(`Set react project: ${name}`)
}