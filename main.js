const isMobileDevice = window.navigator.userAgent
  .toLowerCase()
  .includes("mobi");

if (isMobileDevice) {
  const links = document.querySelectorAll("a");
  links.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(el.href, "_blank", "location=yes");
    });
  });
}

const logo = document.querySelector(".logo");
const comingFrom = document.querySelector(".coming-from");
const cancelButton = document.querySelector(".cancel-btn");

cancelButton.addEventListener("click", () => {
  // console.log(redirectTimer);
  clearTimeout(redirectTimer);
  clearTimeout(incTimer);
});

// check for linkedin
if (document.referrer.includes("linked")) {
  logo.setAttribute("src", "./social_icons/linkedin.svg");
  comingFrom.innerText = "LinkedIn";
}
let incTimer;
const time = document.querySelector("time");
const timeCounter = () => {
  incTimer = setTimeout(() => {
    const val = +time.innerText - 1;
    console.log(val);
    time.innerText = val;
    if (val > 0) {
      timeCounter();
    }
  }, 1000);
};
timeCounter();
