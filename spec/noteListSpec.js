function testNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes = []);
};

testNoteList();

function testNoteListContent() {
  var noteList = new NoteList();
  assert.isTrue(noteList.currentNotes() === this.notes);
};

testNoteListContent();
