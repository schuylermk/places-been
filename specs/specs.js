describe ("place", function() {
  it("creates object for information about a specific place", function() {
    var myPlace = new place("North America", "Yellow Stone", "it was pretty");
    expect(myPlace.continent).to.equal("North America");
    expect(myPlace.landmark).to.equal("Yellow Stone");
    expect(myPlace.notes).to.equal('');
  });
});
