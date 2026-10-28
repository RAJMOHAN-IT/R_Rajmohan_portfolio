// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. NAVBAR ACTIVE LINK
    // ==========================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    // ==========================================
    // 2. HIRE ME BUTTON
    // ==========================================

    const hireButton = document.querySelector(".left button");

    if (hireButton) {

        hireButton.addEventListener("click", () => {

            const contactSection = document.querySelector("#contact");

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // ==========================================
    // 3. CONTACT FORM
    // ==========================================

    const contactForm = document.querySelector("#contact form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = this.querySelector(
                'input[placeholder="your name"]'
            ).value.trim();

            const email = this.querySelector(
                'input[placeholder="your mail"]'
            ).value.trim();

            const message = this.querySelector("textarea").value.trim();


            // Check empty fields
            if (name === "" || email === "" || message === "") {

                alert("Please fill in all the fields.");

                return;
            }


            // Basic email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;
            }


            // Success message
            alert(
                "Thank you " +
                name +
                "! Your message has been prepared successfully."
            );


            // Open user's email application
            const subject =
                encodeURIComponent(
                    "Portfolio Contact from " + name
                );

            const body =
                encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );


            window.location.href =
                `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;


            // Clear form
            this.reset();

        });

    }


    // ==========================================
    // 4. PROJECT CARD CLICK EFFECT
    // ==========================================

    const projectCards =
        document.querySelectorAll(".projectcard");

    projectCards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("selected");

        });

    });


    // ==========================================
    // 5. LET'S CONNECT BUTTONS
    // ==========================================

    const connectButtons =
        document.querySelectorAll(".connect-btn");

    connectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const link = button.getAttribute("data-link");

            if (link) {
                window.open(link, "_blank");
            }

        });

    });


    // ==========================================
    // 6. COPY EMAIL BUTTON
    // ==========================================

    const emailButton =
        document.querySelector(".email-copy");

    if (emailButton) {

        emailButton.addEventListener("click", async () => {

            const email =
                emailButton.getAttribute("data-email");

            try {

                await navigator.clipboard.writeText(email);

                alert("Email copied: " + email);

            } catch (error) {

                alert("Unable to copy email.");

            }

        });

    }


    // ==========================================
    // 7. SCROLL REVEAL ANIMATION
    // ==========================================

    const sections =
        document.querySelectorAll(
            "#about, #projects, #contact"
        );

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-section"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });


    // ==========================================
    // 8. CURRENT YEAR IN FOOTER
    // ==========================================

    const year =
        document.querySelector("#currentYear");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // ==========================================
    // 9. SCROLL TO TOP BUTTON
    // ==========================================

    const topButton =
        document.querySelector("#scrollTop");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        });


        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ==========================================
    // 10. NAVBAR SCROLL EFFECT
    // ==========================================

    const navbar =
        document.querySelector("nav");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("navbar-scrolled");

            } else {

                navbar.classList.remove("navbar-scrolled");

            }

        });

    }

});