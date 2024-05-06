document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector(".search-box input");
    const images = document.querySelectorAll(".image-box");

    // Event listener for filtering images based on search input
    search.addEventListener("input", e => {
        const searchValue = e.target.value.trim().toLowerCase();
        images.forEach(image => {
            const dataName = image.getAttribute("data-name").toLowerCase();
            if (dataName.includes(searchValue)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    });

    // Toggle footer navigation visibility on menu button click
    const navToggle = document.getElementById('navToggle');
    const footerNav = document.querySelector('.footer-nav');

    navToggle.addEventListener('click', () => {
        footerNav.classList.toggle('show');
    });
});
function confirmExit() {
            if (confirm("Are you really leaving?")) {
                // If the user confirms, exit the system
                alert("I HATE YOU!!!");
                window.close();
            } else {
              alert("Yehey!! Thank You!");
                // If the user cancels, do nothing
            }
        }