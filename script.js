/* =========================================
   CRAVEKART - HOME PAGE JAVASCRIPT
========================================= */


/* ================= SEARCH ================= */

function searchFood() {

    const input = document.getElementById("searchInput");

    const message = document.getElementById("searchMessage");

    const searchValue = input.value.trim();


    if (searchValue === "") {

        message.textContent =
            "Please enter a food or restaurant name.";

        return;
    }


    message.textContent =
        `Searching for "${searchValue}"...`;
}


/* ================= CATEGORY ================= */

function selectCategory(category) {

    const message = document.getElementById("searchMessage");

    message.textContent =
        `Showing delicious ${category} options for you!`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= OFFER ================= */

function claimOffer() {

    alert(
        "🎉 Offer claimed!\n\nUse code CRAVE40 at checkout to get 40% OFF your first order."
    );
}


/* ================= LOGIN ================= */

const loginButton = document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", function () {

        alert(
            "Login feature will be available soon!"
        );

    });

}