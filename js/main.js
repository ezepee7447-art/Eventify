console.log("main.js loaded");

const tabs =
document.querySelectorAll(".tab[data-target]");
const panels =
document.querySelectorAll(".tab-panel");

tabs.forEach(function (tab) {
    tab.addEventListener ("click", function () 
{
    tabs.forEach(function (t){
        t.classList.remove ("active");});
panels.forEach(function (p) {p.hidden =true;});
tab.classList.add("active");

document.getElementById(tab.dataset.target). hidden = false;
  });
});



const banner =
document.getElementById("banner-upload");
if (banner) {
    banner.addEventListener("change", function (){
        const file = banner.files[0];
        if (file) {
            document.querySelector(".event-banner img").src =URL.createObjectURL(file);
        }
    });
}



const ticketFile=
document.getElementById("ticket-file");
if (ticketFile) {
    ticketFile.addEventListener("change", function () {
        if (ticketFile.files[0]) {
            document.querySelector("upload-box p").textContent = ticketFile.files[0].name;
        }
    });
}



