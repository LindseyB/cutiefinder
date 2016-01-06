$("#header").fitText();

$(document).ready(function(){
  $("#filestyle-0").change(function(){
    $('#result').removeClass('hidden');
    $(":file").filestyle('buttonText', 'UPLOAD ANOTHER');
    $("#cutierating").empty();
    readImage(this);
    setRating();
  });
});

function readImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#cutie').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function setRating() {
  $('#cutierating').goalProgress({
    goalAmount: 100,
    currentAmount: 100,
    speed: 3000,
    textAfter: '% CUTIE'
  });
}
