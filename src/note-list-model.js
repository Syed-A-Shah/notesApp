(function(exports) {
function NoteList() {
  this.notes = []
}

NoteList.prototype.currentNotes = function() {
  return this.notes;
};

NoteList.prototype.addNote = function(string) {
  this.notes.push(string);
};

  exports.NoteList = NoteList;
})(this);
