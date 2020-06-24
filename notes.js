const chalk = require("chalk");
const fs = require("fs");
const { stringify } = require("querystring");
const { boolean } = require("yargs");

const getNotes = (string) => "Hello " + string;

// Add Note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

// Remove Note
const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!!"));
  }
};

//  List all notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your notes!!"));
  notes.forEach((note) => {
    console.log(note.title + ":  " + note.body);
  });
};

//  Save note to JSON
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//  Load note from JSON and parse it.
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    //  if no note present return empty array.
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
