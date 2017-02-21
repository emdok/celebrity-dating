$(document).ready(function(){
  $(".user-form").submit(function(event) {
    var someInput = $("input#user-input").val()

    event.preventDefault();
  });
});
