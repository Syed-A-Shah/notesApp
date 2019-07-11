function testNoteListView() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  assert.isTrue(noteListView.list === noteList, "TEST PASS: NoteListView is instantiated with a note list model");
}

testNoteListView();


function testEmptyDisplay() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  assert.isTrue(noteListView.display() === `<ul></ul>`, "TEST PASS: Display method works with empty array")
};

testEmptyDisplay();
