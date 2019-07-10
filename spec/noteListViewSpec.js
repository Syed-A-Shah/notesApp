function testNoteListView() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  assert.isTrue(noteListView.list === noteList, "TEST PASS: NoteListView is instantiated with a note list model");
}

testNoteListView();
