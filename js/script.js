const menu = document.getElementById('mobile-menu');
const ham = document.getElementById('hamburger');

ham.addEventListener('click', function() {
    menu.classList.toggle('show');
});    

const testimonials = document.querySelectorAll(".testimonial-card");
const buttons = document.querySelectorAll(".circle-button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    testimonials.forEach((t) => t.classList.remove("active"));
    buttons.forEach((b) => b.classList.remove("active"));
    testimonials[index].classList.add("active");
    btn.classList.add("active");
  });
});

document.getElementById('btn-go').addEventListener('click', function() {  
    ValiditeEmail();
    checkEmail();
});

function checkEmail() {
    const email = document.getElementById('email-submission');

    if (email.value.length === 0 || !email.checkValidity()) {
        document.getElementById("error-text").style.color = "#F33C3C";
        document.getElementById("email-submission").style.border = "2px solid #F33C3C";
        document.getElementById("error-text").innerText = "Please insert a valid email";
        document.getElementById("error-text").style.display = "block";
        document.getElementById('email-submission').style.color = "#F33C3C";
    } else {
        document.getElementById("error-text").innerText = "";
        document.getElementById("error-text").style.display = "none";
    }
}

function ValiditeEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}