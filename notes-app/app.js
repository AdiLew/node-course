const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
    command: "add",
    desc: "Add a new Note",
    builder: {
        title: {
            describe: "The title for your note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note content",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log(chalk.blue.underline('\n' + argv.title))
        console.log(argv.body + '\n\n')
    }
}
)



yargs.parse()