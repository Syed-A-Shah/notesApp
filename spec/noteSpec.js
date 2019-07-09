  function testNoteText() {
  var note = new Note();
  assert.isTrue(note.text = "My favourite language is Javascript");
};

testNoteText();

function testNoteNotes() {
  var note = new Note();
  assert.isTrue(note.content() === note.text);
};

testNoteNotes();
