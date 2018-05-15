$(document).ready(function () {
  $('#loginModal').modal({ backdrop: 'static', keyboard: false });

  var tr = $('<tr>');
  var $membersContainer = $(".table-body");
  var members = [];


  // function initializeRows() {
  //   $membersContainer.empty();
  //   var rowsToAdd = [];
  //   for (var i = 0; i < members.length; i++) {
  //     rowsToAdd.push(createNewRow(members[i]));
  //   }
  //   $membersContainer.append(rowsToAdd);
  // }


  function getUsers() {
    $.get("/api/members", function (data) {
      $membersContainer.empty();
      members = data;
      console.log(members);
      var rowsToAdd = [];
      for (var i = 0; i < members.length ; i++) {
        rowsToAdd.push(
          '<tr>',
          `<td>${members[i].name}</td>`,
          `<td>${members[i].skillOne}</td>`,
          `<td>${members[i].wageOne}</td>`,
          `<td>${members[i].skillTwo}</td>`,
          `<td>${members[i].wageTwo}</td>`,
          `<td>${members[i].skillThree}</td>`,
          `<td>${members[i].wageThree}</td>`,
          `<td>${members[i].email}</td>`,
          `<td>${members[i].phoneNumber}</td>`,
          '</tr>'
        );
      }
      $membersContainer.append(rowsToAdd);
      // initializeRows();
      // console.log(members[0].name);
    });
  };

  // function createNewRow(todo) {
  //   var $newInputRow = $(
  //     '<tr>'
  //   );

    // $newInputRow.find("button.delete").data("id", todo.id);
    // $newInputRow.find("input.edit").css("display", "none");
    // $newInputRow.data("todo", todo);
    // if (todo.complete) {
    //   $newInputRow.find("span").css("text-decoration", "line-through");
    // }
    // return $newInputRow;
  //}

  getUsers();
}); // end of document ready func
