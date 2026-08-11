var menuBtn = document.getElementById("menu-btn");
var closeSidebar = document.getElementById("close-sidebar");
var sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click", function () {
    sidebar.classList.add("show");
});


closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("show");
});


  var assignmentFilters = document.querySelectorAll(".assignment-filter");
var assignmentCards = document.querySelectorAll(".assignment-card");


assignmentFilters.forEach(function (button) {

    button.addEventListener("click", function () {

        assignmentFilters.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");


        var selectedFilter = button.getAttribute("data-filter");


        assignmentCards.forEach(function (card) {

            var status = card.getAttribute("data-status");


            if (selectedFilter === "all") {

                card.style.display = "flex";

            } else if (selectedFilter === status) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});


  var payButton = document.querySelector(".pay-btn");

if (payButton) {

    payButton.addEventListener("click", function () {

        alert("Payment gateway will be connected here.");

    });

}
