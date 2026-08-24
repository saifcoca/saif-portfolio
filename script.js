/* ================= MOBILE NAVIGATION ================= */

const nav = document.querySelector(".nav");
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelectorAll("#navMenu a");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {

        menuButton.textContent = "×";

    } else {

        menuButton.textContent = "☰";

    }

});


/* Close menu after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.textContent = "☰";

    });

});


/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.borderBottomColor =
            "rgba(124, 92, 255, 0.15)";

    } else {

        nav.style.borderBottomColor =
            "rgba(255, 255, 255, 0.03)";

    }

});


/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(
        ".project, .skill-card, .certificate, .timeline-item, .stat-card"
    );


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("main section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});