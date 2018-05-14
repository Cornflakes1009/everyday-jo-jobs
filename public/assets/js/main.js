$(document).ready(function () {
    $('#loginModal').modal({backdrop: 'static', keyboard: false});

    $("#modal-sign-up").on("click", function() {
        window.location.href = "/signup";
    });

    var tr = $('<tr>');
    var $membersContainer = $(".table-body");
    var members = [];


    function initializeRows() {
        $membersContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < members.length; i++) {
          rowsToAdd.push(createNewRow(members[i]));
        }
        $membersContainer.append(rowsToAdd);
      }


    function getUsers() {
        $.get("/api/members", function(data) {
          members = data;
          initializeRows();
          console.log(members[0].name);
        });
      };

      function createNewRow(todo) {
        var $newInputRow = $(
          '<tr>'
        );
    
        // $newInputRow.find("button.delete").data("id", todo.id);
        // $newInputRow.find("input.edit").css("display", "none");
        // $newInputRow.data("todo", todo);
        // if (todo.complete) {
        //   $newInputRow.find("span").css("text-decoration", "line-through");
        // }
        // return $newInputRow;
      }

      getUsers();
}); // end of document ready func