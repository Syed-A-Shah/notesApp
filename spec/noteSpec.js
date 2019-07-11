  function testNoteText() {
    var text = "Hello there";
    var note = new Note(text);
    assert.isTrue(note.text = text, "TEST PASS: Note is instantiated with text");
};

testNoteText();

function testNoteNotes() {
  var note = new Note();
  assert.isTrue(note.content() === note.text, "TEST PASS: Note's method content returns text");
};

testNoteNotes();
