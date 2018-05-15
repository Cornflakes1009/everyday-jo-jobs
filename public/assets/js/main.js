$(document).ready(function () {
  $('#loginModal').modal({ backdrop: 'static', keyboard: false });

  $("#modal-sign-up").on("click", function () {
    window.location.href = "/signup";
  });

  var tr = $('<tr>');
  var $membersContainer = $(".table-body");
  var members = [];

  function getUsers() {
    $.get("/api/members", function (data) {
      $membersContainer.empty();
      members = data;
      console.log(members);
      var rowsToAdd = [];
      for (var i = 0; i < members.length; i++) {
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

    });
  };

  getUsers();
}); // end of document ready func
