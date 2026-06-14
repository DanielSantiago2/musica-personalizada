document.addEventListener("DOMContentLoaded", function () {

    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {

        reveals.forEach(function(element) {

            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealElements);

    revealElements();

});
