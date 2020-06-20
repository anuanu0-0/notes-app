const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note!",
  handler: function () {
    console.log(chalk.blue("Adding a new note!!"));
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note!",
  handler: function () {
    console.log(chalk.red("Removing a note!!"));
  },
});

// Create read notes command
yargs.command({
  command: "read",
  describe: "Read a note!",
  handler: function () {
    console.log("Reading a note!!");
  },
});

// Create list notes command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("List all notes!!");
  },
});

// Commands: Add, Remove, Read, Listen
console.log(yargs.argv);
