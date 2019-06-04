const fs = require('fs');

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
        console.log('New note added!')
    }
    else {
        console.log('Note title Taken!')
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
    addNote: addNote
};