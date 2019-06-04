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
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'test',
    handler:function(){
        notes.addNote('Rule 1', "Don't pick up the phone, you know he's only calling cause he's drunk and alone")
        notes.addNote("Rule 2", "Don't let him in, you'll have to kick him out again")
        notes.removeNote("Rule 3")
    }
})

yargs.parse()