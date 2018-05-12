// pulls data from signup page

$(document).ready(function () {
    var skillsList = [];
    var hourlyWage = 0;
    var email;
    var password;
    var name;
    var phoneNumber;
    var city;
    var state;
    var completelyFilledOut = false;

    
    function checkFormFields() {
        email = $('#signup-email').val().trim();
        password = $('#signup-password').val().trim();
        name = $('#signup-name').val().trim();
        phoneNumber = $('#signup-phone').val().trim();
        city = $('#inputCity').val().trim();
        state = $('#inputState').val().trim();


        // evaluating each field in the form for data
        if (email.length === 0) {
            console.log('please fill in the email box');
        } else if (password.length === 0) {
            console.log('please fill in the password box');
        } else if (name.length === 0) {
            console.log('please fill in the name box');
        } else if (phoneNumber.length === 0) {
            console.log('please fill in the phone number box');
        } else if (city.length === 0) {
            console.log('please fill in the city box');
        } else if (state.length === 0) {
            console.log('please fill in the state box');
        } else {
            console.log('all filled in');
            completelyFilledOut = true;
        }
    } // end of checkFormFields function

    // checking hourly wage box
    function checkHourlyWage() {
        if ($('#signup-amt').val() > 0) {
            hourlyWage = $('#signup-amt').val();
        } else {
            console.log('Please enter an amount higher than 0.0');
        }
    }


    // check skills boxes
    function checkSkillsBoxes() {
        var skillsCount = 0;

        if ($('#inlineCheckbox1').is(":checked")) {
            skillsCount++;
            skillsList.push('Babysitting');
        }
        if ($('#inlineCheckbox2').is(":checked")) {
            skillsCount++;
            skillsList.push('Car Detailing');
        }
        if ($('#inlineCheckbox3').is(":checked")) {
            skillsCount++;
            skillsList.push('Car Washing');
        }
        if ($('#inlineCheckbox4').is(":checked")) {
            skillsCount++;
            skillsList.push('Dog Grooming');
        }
        if ($('#inlineCheckbox5').is(":checked")) {
            skillsCount++;
            skillsList.push('Dog Walking');
        }
        if ($('#inlineCheckbox6').is(":checked")) {
            skillsCount++;
            skillsList.push('Dog Watching');
        }
        if ($('#inlineCheckbox7').is(":checked")) {
            skillsCount++;
            skillsList.push('Fence Install/Repair');
        }
        if ($('#inlineCheckbox8').is(":checked")) {
            skillsCount++;
            skillsList.push('Guitar Lessons');
        }
        if ($('#inlineCheckbox9').is(":checked")) {
            skillsCount++;
            skillsList.push('Gutter Cleaning');
        }
        if ($('#inlineCheckbox10').is(":checked")) {
            skillsCount++;
            skillsList.push('Handyman');
        }
        if ($('#inlineCheckbox11').is(":checked")) {
            skillsCount++;
            skillsList.push('House Cleaning');
        }
        if ($('#inlineCheckbox12').is(":checked")) {
            skillsCount++;
            skillsList.push('Landscaping');
        }
        if ($('#inlineCheckbox13').is(":checked")) {
            skillsCount++;
            skillsList.push('Lawn Care');
        }
        if ($('#inlineCheckbox14').is(":checked")) {
            skillsCount++;
            skillsList.push('Moving Assistance');
        }
        if ($('#inlineCheckbox15').is(":checked")) {
            skillsCount++;
            skillsList.push('Moving Assistance (with truck)');
        }
        if ($('#inlineCheckbox16').is(":checked")) {
            skillsCount++;
            skillsList.push('Painting - Artistic');
        }
        if ($('#inlineCheckbox17').is(":checked")) {
            skillsCount++;
            skillsList.push('Painting - General');
        }
        if ($('#inlineCheckbox18').is(":checked")) {
            skillsCount++;
            skillsList.push('Pest Removal');
        }
        if ($('#inlineCheckbox19').is(":checked")) {
            skillsCount++;
            skillsList.push('Photographer');
        }
        if ($('#inlineCheckbox20').is(":checked")) {
            skillsCount++;
            skillsList.push('Sewing');
        }
        if ($('#inlineCheckbox21').is(":checked")) {
            skillsCount++;
            skillsList.push('Upholstery Repair');
        }

        if (skillsCount === 0) {
            console.log('Please check some skills');
        }
    }

    // This function inserts a new member into our database and then updates the view
    // function addMember(event) {
    //     event.preventDefault();
    //     var member = {
    //         text: $newItemInput.val().trim(),
    //         complete: false
    //     };

    //     $.post("/api/members", todo, getMembers);

    // }




    function createMember(User) {
        console.log("createMember func ran");
        $.post("/api/posts/", User, function() {
            // put create logic here ?
            var newUser = {
                name: name,
                email: email,
                password : password,
                // skillsList: skillsList,
                phoneNumber: phoneNumber,
                city: city,
                state: state,
                hourlyWage: hourlyWage
            };
            window.location.href = "/profile"; // untested redirect
        });
      };



    $('#signup-submit').on('click', function () {
        event.preventDefault();
        checkFormFields();
        checkSkillsBoxes();
        console.log(skillsList);
        checkHourlyWage();
        if(completelyFilledOut === true) {
            createMember();
        }
        
    }); // end of submit button clicked




}); // end of document ready function