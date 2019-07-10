function testNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes.length === 0, "TEST PASS: NoteList has an empty list of notes");
};

testNoteList();

function testNoteListContent() {
  var noteList = new NoteList();
  assert.isTrue(noteList.currentNotes() === noteList.notes, "TEST PASS: NoteList Content");
};

testNoteListContent();

function testNoteListAddNote() {
  var noteList = new NoteList();
  var string = "string";
  noteList.addNote(string);
  assert.isTrue(noteList.notes[0] === string, "TEST PASS: NoteList can push Note");
};

testNoteListAddNote();
