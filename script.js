// Event listener to accommodate for the shrinking screen and the navbar menu toggle for visual consistency
document.querySelector(".smallNavBtn").addEventListener("click", navButtonToggle);

//For loop to add click event listeners to every button in the buying section
for (var i = 0; i< document.querySelectorAll(".checkoutBtn").length; i++) {
    document.querySelectorAll(".checkoutBtn")[i].addEventListener("click", function (){
        alert("Sorry we're sold out, try again later");
    });
};

// This section will make sure the navbar small menu contents stay within the div of the navbar
var navBtnState = false;

function navButtonToggle() {
    if (navBtnState === false) {
        document.querySelector(".navbar").style.height = "280px";
        navBtnState = true;
    }
    else {
        setTimeout(function () {document.querySelector(".navbar").style.height = "90px"},150);
        navBtnState = false;
    }

}