document.addEventListener("DOMContentLoaded", function () {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    

    // Add an event listener to detect scrolling
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        // Now we loop through sections to get height, top, and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 70; // Adjust for navbar height
            sectionId = current.getAttribute("id");

            // If our current scroll position enters the space where the current section is on screen, add the .active class to the corresponding nav link, else remove it
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav-link[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".nav-link[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }
});

document.getElementById('download-btn').addEventListener('click', function() {
    alert('Your resume is being downloaded!');
});

// Get the form element
const form = document.getElementById("contact-form");

// Listen for the form submission
form.addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form submission from reloading the page

    // Collect form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a custom alert using the form's name field
    alert(`Thank you for your message, ${name}! We'll get back to you soon.`);

    // Collect form data for submission
    const formData = new FormData(form);

    // Submit the form data via Fetch API to Getform
    fetch("https://getform.io/f/azylxorb", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you! Your message has been sent successfully.');
            form.reset();  // Clear form inputs after successful submission
        } else {
            alert('Oops! Something went wrong, please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error! Please check your internet connection and try again.');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const formResponse = document.getElementById('form-response');

  // Simple form validation and response message
  if (name && email && message) {
      formResponse.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;
      formResponse.style.color = 'green';
      document.getElementById('contact-form').reset();
  } else {
      formResponse.innerHTML = '<p>Please fill in all the fields.</p>';
      formResponse.style.color = 'red';
  }
});


// JavaScript to dynamically update the year
function updateYear() {
    var yearElement = document.getElementById('year');
    var currentYear = new Date().getFullYear(); // Get the current year
    yearElement.textContent = currentYear;      // Update the year in the span
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateYear);

                