if (localStorage.getItem("notes")) {
    var notes = JSON.parse(localStorage.getItem("notes"));
    display(notes);
} else {
    notes = [];
}

function CreateNote(text) {
    this.inputText = $('input').val();

}

function display(notes) {
    for (var i = 0; i < notes.length; i++) {
        var text = ``;
        text = `
        <br>
        <div class="panel panel-default">
        <div class="panel-heading">To do: ${i+1}</div>
        <div class="panel-body">` + notes[i].inputText + `</div>
        <div class="panel-footer" id="footer"><button type="button" name="button" class="btn btn-danger" id="del" data-num="` + i + `">Delete</button></div>
        </div>
      `;
        $(text).appendTo('#toDo')
    }

    $('button' + '#del').on('click', function() {
        notes.splice($(this).data('num'), 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        $('#toDo').empty();
        display(notes);
    })
}


$('#add').on('click', function() {

    var newNote = new CreateNote();
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    $('input').val('');
    $('#toDo').empty();
    display(notes);
})