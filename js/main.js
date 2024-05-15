// start mode 
let mode=document.querySelector(".dark-mode i")
if(window.localStorage.getItem("darkMode")==="true"&& window.localStorage.getItem("classMode")==="true"){
    document.body.classList.add("dark")
    mode.classList.remove("fa-moon")
    mode.classList.add("fa-sun")
}
mode.onclick=function () {
    document.body.classList.toggle("dark")
    mode.classList.toggle("fa-moon")
    mode.classList.toggle("fa-sun")
    window.localStorage.setItem("darkMode",document.body.classList.contains("dark"))
    window.localStorage.setItem("classMode",mode.classList.contains("fa-sun"))

}
// end mode
// header sticky---------------------------------
function stickyNav() {
    var headerHeight = document.querySelector("#about").offsetHeight / 2;
    var navbar = document.querySelector("header");
    var scrollValue = window.scrollY;
    
    if (scrollValue > headerHeight) {
        navbar.classList.add("header-sticky");
    } else if (scrollValue < headerHeight) {
        navbar.classList.remove("header-sticky");
    }
}
window.addEventListener("scroll", stickyNav);
// Active Link On Page Scroll

const sections = document.querySelectorAll("section[id]");
function scrollTracker() {
    const currentYScroll = window.scrollY;

sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`header .portfolio-menu a[href*="#${id}"]`);
    if (currentYScroll > sectionTop &&currentYScroll <= sectionTop + sectionHeight){
        currentNavLink.classList.add("active");
    } else {
        currentNavLink.classList.remove("active");
    }
});
}
window.addEventListener("scroll", scrollTracker);
// header start---------------------------------------
// show menu toggle in header
let btnMenuToggle=document.querySelector(".navbar-toggle")
let menuNavbar=document.querySelector('.portfolio-menu')
btnMenuToggle.addEventListener("click",function () {
        menuNavbar.classList.toggle("d-block")
})

// add class active when click on li
let listInMenuNavbar=document.querySelectorAll(".portfolio-menu ul li a")
for (let i = 0; i < listInMenuNavbar.length; i++) {
    listInMenuNavbar[i].onclick=function(){
        for (let i = 0; i < listInMenuNavbar.length; i++) {
            listInMenuNavbar[i].classList.remove("active")
        }
        listInMenuNavbar[i].classList.add("active")
    }
    
}
// header end------------------------------------------

// start about===========================================
// animation when enter about
let about=document.querySelector(".about")
let aboutContnet=document.querySelector(".about .about-content")
scrollElement(about,aboutContnet)
// btn about
let btnAbout=document.querySelectorAll(".about .btn-chooses ul li")
let education=document.querySelector(".about .right .btn-content .btn-education ")
let experience=document.querySelector(".about .right .btn-content .btn-experience")
let skills=document.querySelector(".about .right .btn-content .btn-skill")
changeContent(btnAbout);
function changeContent(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i].onclick=function(){
            for (let i = 0; i < arr.length; i++) {
                arr[i].classList.remove("btn-active")
            }
            arr[i].classList.add("btn-active")
            if(arr[i].innerHTML=="education"){
                education.style.display="block"
                experience.style.display="none"
                skills.style.display="none"
            }else if(arr[i].innerHTML=="experience"){
                education.style.display="none"
                experience.style.display="block"
                skills.style.display="none"

            }else if(arr[i].innerHTML=="skills"){
                education.style.display="none"
                experience.style.display="none"
                skills.style.display="block"
            }
        }
        
    }
}
// end about===========================================


// active recent work btn
let workActive=document.querySelectorAll(".recent-work .work-header .btn-chooses ul li")
let allImages=document.querySelectorAll(".recent-work .work-image .column .img-content")
for (let i = 0; i < workActive.length; i++) {
    workActive[i].onclick=function(){
    for (let i = 0; i < workActive.length; i++) {
        workActive[i].classList.remove("btn-active")
    }
    workActive[i].classList.add("btn-active")
    allImages.forEach(function(image){
        if(workActive[i].textContent=="All"){
            image.style.display="block"
        }else{
            if(workActive[i].textContent=="designs" && image.classList.contains("design")){
                image.style.display="block"
            }else{
                image.style.display="none"
            }
            if(workActive[i].textContent=="development" && image.classList.contains("development")){
                image.style.display="block"
            }

        }
    })
}
}
// scroll class contact
    let contact=document.querySelector(".contact")
    let contactAddress=document.querySelector(".contact .contact-address")
    // scrollElement(contact,contactAddress);

// scroll element
function scrollElement(section,element){
    window.onscroll=function(){
        if(this.scrollY >= section.offsetTop -400 ){
            element.classList.add("top")
        }
    }
}
let msg = document.querySelector(".form-message");

(function () {
    emailjs.init("Gj7lK8epeqOU_oI7V");
})();

window.onload = function () {
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector(".submit-control .loading").classList.add("show");
      // Replace With Your Email Service ID & Contact Form ID Which You Will Get After Registering With EmailJs
    emailjs.sendForm("service_cvo0vv5", "template_8cs7s0w", this).then(
        function () {
            document.getElementById("contact-form").reset();
            document.querySelector(".submit-control .loading").classList.remove("show");
            msg.innerHTML= "";
            msg.innerHTML= "<span class='success-msg'>Email Sent</span>";
            msg.classList.add("show");
                setTimeout(() => msg.classList.remove("show"), 2000);
            },
        function (error) {
            document.querySelector(".submit-control .loading").classList.toggle("show");
            msg.classList.add("show");
            msg.innerHTML += "<span class='error-msg'>Not Sent ! Sign Up with EmailJS.</span>";
        }
    );
    });
};

