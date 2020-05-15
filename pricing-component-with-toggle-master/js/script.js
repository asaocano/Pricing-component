$(document).ready(function () {
  $("#switch").change(function () {
    if (this.checked) {
      $("#basic").text("$199.99");
      $("#pro").text("$249.99");
      $("#master").text("$399.99");
    } else {
      $("#basic").text("$19.99");
      $("#pro").text("$24.99");
      $("#master").text("$39.99");
    }
  });
});
