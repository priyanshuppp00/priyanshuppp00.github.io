document.addEventListener("DOMContentLoaded", function () {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");

    // Add an event listener to detect scrolling
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        // Loop through sections to get height, top, and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 70; // Adjust for navbar height
            const sectionId = current.getAttribute("id");

            // If current scroll position enters the section, add .active class
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href*=${sectionId}]`).classList.add("active");
            } else {
                document.querySelector(`.nav-link[href*=${sectionId}]`).classList.remove("active");
            }
        });
    }

    // Handle navbar collapse on link click for mobile view
    const navbarLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
                collapseInstance.hide(); // Close the navbar
            }
        });
    });

    // Download button alert
    document.getElementById('download-btn').addEventListener('click', function () {
        alert('Your resume is being downloaded!');
    });

    // Contact form submission
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);

        const formData = new FormData(form);

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
                    form.reset();
                } else {
                    alert('Oops! Something went wrong, please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error! Please check your internet connection and try again.');
            });
    });

    // Inline contact form response
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formResponse.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;
            formResponse.style.color = 'green';
            form.reset();
        } else {
            formResponse.innerHTML = '<p>Please fill in all the fields.</p>';
            formResponse.style.color = 'red';
        }
    });
});
