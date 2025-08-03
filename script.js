/* For Side Menu*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/*For Google Form*/ 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyJMJLHa4uExdaIjIAII9_UDUeEDmaV8K6vj3-joX4gIQXKkL_lmezb5zNEQQD3kyI6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Thank You, Message Sent Succesfully'
            setTimeout(() => {
                msg.innerHTML = '';
            }, 3000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


/*  Small Screen   */ 
if (window.matchMedia("(max-width: 600px)").matches) {
    const sections = ["header", "about", "services", "portfolio", "contact"];
    sections.forEach(function(section) {
        document.querySelectorAll(`#sidemenu a[href="#${section}"]`).forEach(function(link) {
            link.addEventListener("click", function () {
                closemenu(); // Close menu on link click
            });
        });
    });
}
