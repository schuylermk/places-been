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
    
  });
});
