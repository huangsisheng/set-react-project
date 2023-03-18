#!/usr/bin/env node

const { program } = require("commander")
program.version(require("../package.json").version)

program
  .command("set react project <name>")
  .description("set react project...")
  .action(require('../lib/index'))

program.parse(process.argv)  
