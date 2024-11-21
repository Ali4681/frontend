const author = document.querySelector(".Author");
const quote = document.querySelector(".lorem");
const btn = document.querySelector(".btn1");
const apiLink = `https://api.quotable.io/quotes/random`;

async function generateQoutes() {
  const response = await fetch(apiLink);
  const data = await response.json();

  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

// btn.addEventListener("click", generateQoutes);
