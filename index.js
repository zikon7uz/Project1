const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const cadrs = document.getElementById("cards");
// for (let li of listitemlar) {2
//     li.addEventListener("click", () => li.classList.add('active'));
//     li.addEventListener("mouseleave", () => li.classList.remove('active'));
// };
image1.style.transition = "1.2s";
image2.style.transition = "1.2s";
image3.style.transition = "1.2s";
image4.style.transition = "1.2s";
image5.style.transition = "1.2s";
image1.addEventListener("click", (event) => {
    image1.style.width = "890px";
    image2.style.width = "80px";
    image3.style.width = "80px";
    image4.style.width = "80px";
    image5.style.width = "80px";
    cadrs.style.backgroundColor = "black";
});
image2.addEventListener("click", (event) => {
    image2.style.width = "890px";
    image1.style.width = "80px";
    image3.style.width = "80px";
    image4.style.width = "80px";
    image5.style.width = "80px";
    cadrs.style.backgroundColor = "rgb(5, 42, 64)";
});
image3.addEventListener("click", (event) => {
    image3.style.width = "890px";
    image1.style.width = "80px";
    image4.style.width = "80px";
    image2.style.width = "80px";
    image5.style.width = "80px";
    cadrs.style.backgroundColor = "rgba(40, 43, 46)";
});
image4.addEventListener("click", (event) => {
    image4.style.width = "890px";
    image1.style.width = "80px";
    image3.style.width = "80px";
    image2.style.width = "80px";
    image5.style.width = "80px";
    cadrs.style.backgroundColor = "rgb(240, 107, 58)";
});
image5.addEventListener("click", (event) => {
    image5.style.width = "890px";
    image1.style.width = "80px";
    image3.style.width = "80px";
    image4.style.width = "80px";
    image2.style.width = "80px";
    cadrs.style.backgroundColor = "rgba(218, 218, 218, 0.784)";
});