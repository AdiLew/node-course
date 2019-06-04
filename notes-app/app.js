const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "Add a new Note",
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
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title:{
            describe:"The title of the note to remove",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("\nRemoving "+chalk.italic(argv.title)+'\n')
    }
})



yargs.parse()