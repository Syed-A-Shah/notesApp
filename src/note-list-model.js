(function(exports) {
function NoteList() {
  this.notes = []
}

NoteList.prototype.currentNotes = function() {
  return this.notes;
};

NoteList.prototype.createNote = function(text) {
  this.notes.push(new Note(text));
};

  exports.NoteList = NoteList;
})(this);
