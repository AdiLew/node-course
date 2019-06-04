const fs = require('fs');
const chalk = require('chalk');

const filePath = './notes.json';

const getNotes = () => {
    return 'Your notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title);

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

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note)=> note.title !== title)

    if (notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse(`${title} removed!`))
    }
    else {
        console.log(chalk.red.inverse(`${title} was not found`))
    }
  
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.cyan.underline('Your notes:'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync(filePath);
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);
    }
    catch (e) { 
        return [];
    }

}
const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync(filePath, notesJSON);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};