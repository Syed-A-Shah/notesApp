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

function testNoteListCreateNote() {
  var noteList = new NoteList();
  var text = "Testing Text";
  noteList.createNote(text);
  assert.isTrue(noteList.notes[0] === text, "TEST PASS: NoteList can push Note");
};

testNoteListCreateNote();
