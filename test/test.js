var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Login", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(20000);

  it("should sign in and go to the main page", function(done) {
    new Nightmare({ show: true })
      .goto("https://everyday-jo-jobs.herokuapp.com/")
      // Enter username.
      .wait("#modal-password")
      .wait(2000)
      .type("#modal-email", "test@test.com")
      // Enter password.
      .type("#modal-password", "dummy*password")
      // Click the login button
      .click("#modal-submit")
      // Evaluate the following selector
      .wait("#sign-out")
      .wait(3000)
      
      .evaluate(function() {
        return document.title;
      })
      .end()
      .then(function(title) {
        expect(title).to.equal("Everyday Jo Jobs");
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  it("should go to the sign up page and get nav bar title", function(done) {
    new Nightmare({ show: true })
      .goto("https://everyday-jo-jobs.herokuapp.com/")
      // Click the sign up button
      .wait("#modal-sign-up")
      .click("#modal-sign-up")
      // Evaluate the following selector
      .wait("#signup-title")
      .wait(3000)
      .evaluate(function() {
        //return document.querySelector("#signup-title");
        return document.title;
      })
      .end()
      .then(function(title) {
        expect(title).to.equal("Everyday Jo Jobs");
        done();
      })
      .catch(function(err) {
        console.log(err);
      })
  });

  it("should go to the sign up page, click submit and get an error", function(done) {
    new Nightmare({ show: true })
      .goto("https://everyday-jo-jobs.herokuapp.com/")
      // Click the sign up button
      .wait("#modal-sign-up")
      .click("#modal-sign-up")
      .wait("#signup-title")
      .type("#signup-email", "test1@test.com")
      .type("#signup-password", "testPassword")
      .type("#signup-name", "John Smith")
      .type("#signup-phone", "816-123-4567")
      .type("#inputCity", "KC")
      .type("#inputState", "MO")
      .type("#inputUrl", "testurl")
      .select('.skillOne', "Babysitting")
      .type("#wageOne", 1)
      .select('.skillTwo', "Car Washing")
      .type("#wageTwo", 12)
      .click("#signup-submit")
      .wait("#error-modal-title")
      .evaluate(function() {
        // Assert the "signup title" link can be found
        return document.querySelector("#error-msg");
      })
      .wait(3000)
      .end()
      .then(result => { done() })
        .catch(done) 
  })

});