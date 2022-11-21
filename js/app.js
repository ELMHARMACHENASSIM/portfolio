let toggleMenu = document.querySelector(".toggle-menu");
let menuList = document.querySelector(".menu-list");
let btnMenu = document.querySelectorAll(".btnMenu");
toggleMenu.onclick = () => {
  menuList.classList.toggle("active");
  toggleMenu.classList.toggle("active");
};

btnMenu.forEach(btn => {
btn.onclick = () => {
  menuList.classList.toggle("active");
  toggleMenu.classList.toggle("active");
};
})


body = document.querySelector("body");
cyrcleBtn = document.querySelector(".cyrcle");

cyrcleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  cyrcleBtn.classList.toggle("light");
});

var lastScrollTop = 0;
header = document.getElementById("header");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-90px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

const fname = document.getElementById("toName");
const email = document.getElementById("toEmail");
const message = document.getElementById("toMsg");
const submit = document.getElementsByClassName("form-contact")[0];
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  let ebody = `
<b> Name : </b>${fname.value}
<br>
<b> Email : </b>${email.value}
<br>
<b> Message : </b>${message.value}
`;
  Email.send({
    SecureToken: "44cdacae-cf18-46d1-b3a9-0c3054ee9d2f",
    To: "nassimelmharmache3@gmail.com",
    From: "nassimelmharmache3@gmail.com",
    Subject: "testing email from" + email.value,
    Body: ebody,
  }).then((message) => alert(message));
});

/*let loader = document.getElementById("loading");
window.addEventListener("load", function(){
body.style.overflow="auto";
loader.style.display = "none";
})*/
