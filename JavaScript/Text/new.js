const insText = document.querySelector(".text");
const btn = document.querySelector(".active");
const listContainer = document.querySelector(".para");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = insText.value;

  const span = document.createElement("span");
  span.textContent = "x";

  li.appendChild(span);

  listContainer.appendChild(li);
  insText.value = "";
  saveData();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});

function saveData() {
  localStorage.setItem("loc", listContainer.innerHTML);
}

const getData = () => {
  listContainer.innerHTML = localStorage.getItem("loc");
};

getData();
