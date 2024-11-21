let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let btn = document.querySelector(".btn");
let d1 = document.querySelector(".date");
let para = document.querySelector(".para");
let birth = document.querySelector(".birth");
let age1 = document.querySelector(".para span");

btn.addEventListener("click", () => {
  let date = new Date();
  let d22 = birth.value.slice(0, 4);
  let y1 = date.getFullYear();

  let age = y1 - d22;
  age1.innerHTML = age;
  console.log(typeof d22);
});
