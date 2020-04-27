const isMobileDevice = window.navigator.userAgent
  .toLowerCase()
  .includes("mobi");

if (isMobileDevice) {
  const links = document.querySelectorAll("a");
  links.forEach((el) => {
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        window.open(el.href, '_blank', 'location=yes')
    })
  });
}
