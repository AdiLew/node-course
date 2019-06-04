const fs = require('fs');
const chalk = require('chalk');

const filePath = './notes.json';

function getNotes() {
    console.log('Your notes')
};

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green(`The note ${title} was added!`))
    }
    else {
        console.log(chalk.red(`The title ${title} is taken!`))
    }
    
}

const removeNote = function(title){
    const notes = loadNotes();
    const newNotes = notes.filter(function(note){
        return note.title !== title
    })

    if (notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse(`${title} removed!`))
    }
    else {
        console.log(chalk.red.inverse(`${title} was not found`))
    }
  
    
}


const loadNotes = function () {
    try {
        const notesBuffer = fs.readFileSync(filePath);
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);
    }
    catch (e) { 
        return [];
    }

}
const saveNotes = function(notes){
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync(filePath, notesJSON);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};