var place = function(continent, landmark, notes) {
  this.continent = continent;
  this.landmark = landmark;
  this.notes = '';
}


$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedContinent = $("input#new-continent").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedNotes = $("input#new-notes").val();

    var inputtedPlace = new place(inputtedContinent, inputtedLandmark, inputtedNotes);

    $("ul#landmark").append( "<li><span class='place'>" + inputtedLandmark + "</span></li>" )

    $("input#new-continent").val('');//These reset fields after being submitted
    $("input#new-landmark").val('');
    $("input#new-notes").val('');

    $(".place").last().click(function() {
      $("#output").show();
      $(".continent").text(inputtedPlace.continent);
      $(".landmark").text(inputtedPlace.landmark);
      $(".notes").text(inputtedPlace.notes);
    });
  });
});
