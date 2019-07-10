(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList;
  }

  NoteListView.prototype.display = function () {
    if (this.list.notes.length === 0) {
      var htmlList = `<ul></ul>`
    } else {
      var htmlList = `${this.list.currentNotes().map(note => note.content()).join(`</div></li><li><div>`)}`
    }
    return htmlList;
  };


  exports.NoteListView = NoteListView;
})(this);
