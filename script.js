document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeCard = document.getElementById("resume-card");
    form.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault(); // Prevent the form from submitting normally
        // Fetch form values
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        // Get checked experiences
        var experiences = Array.from(document.querySelectorAll("input[name='experience']:checked"))
            .map(function (exp) { return exp.value; });
        // Get profile picture
        var profilePictureInput = document.getElementById("profile-picture");
        var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        // Create an image element for profile picture
        var profilePicHTML = '';
        if (profilePicture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var imgSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                profilePicHTML = "<img src=\"".concat(imgSrc, "\" alt=\"Profile Picture\" class=\"profile-pic\"/>");
                generateCard(); // Call generateCard after profile picture is loaded
            };
            reader.readAsDataURL(profilePicture);
        }
        else {
            generateCard(); // If no picture, generate card immediately
        }
        function generateCard() {
            // Populate the resume card with form data
            resumeCard.innerHTML = "\n          ".concat(profilePicHTML, "\n          <h2>").concat(firstName, " ").concat(lastName, "</h2>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Phone:</strong> ").concat(phone, "</p>\n          <p><strong>Education:</strong> ").concat(education, "</p>\n          <p><strong>Skills:</strong> ").concat(skills, "</p>\n          <p><strong>Experience:</strong> ").concat(experiences.join(', '), "</p>\n        ");
            // Display the card
            resumeCard.style.display = 'block';
        }
    });
});
