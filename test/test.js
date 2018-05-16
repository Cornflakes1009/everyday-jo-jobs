var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleize("cameron mullins")).to.equal("Cameron Mullins");
  });

  it("to not change properly cased strings", function() {
    expect(titleize("Cameron Mullins")).to.equal("Cameron Mullins");
  });

  it("to properly case mixed case strings", function() {
    expect(titleize("CAMERON MullINs")).to.equal("Cameron Mullins");
  });
});