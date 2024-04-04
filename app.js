const title = document.querySelector(".title");
const dots1 = document.querySelector(".dots1");
const dots2 = document.querySelector(".dots2");
const wavy1 = document.querySelector(".wavy1");
const table = document.querySelector(".table");
const wavy2 = document.querySelector(".wavy2");
const woman = document.querySelector(".woman");

document.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log(value)
  title.style.marginTop = value * 1.1 + "px";

  dots1.style.marginLeft = -value + "px";
  dots2.style.marginLeft = value + "px";

  woman.style.marginBottom = -value + "px";
  woman.style.marginLeft = -value + "px";

  wavy1.style.marginBottom = -value * 1.5 + "px";
  table.style.marginBottom = -value * 1.2 + "px";
});

// document.addEventListener("resize", function() {
//   let value = window.
// })
