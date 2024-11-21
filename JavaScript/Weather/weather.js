const api_key = "c9ba6e3acb09bd4a531c5f4bca42de50";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}");

const weather1 = document.querySelector(".search1");
const button = document.querySelector(".search-btn");
const degre = document.querySelector(".p1");
const city = document.querySelector(".p2");
const humidity = document.querySelector(".humidity-val");
const wind = document.querySelector(".wind-val");











async function dousearch() {
  const res = await fetch(
    api_url + `&q=${weather1.value}` + `&appid=${api_key}`
  );
  const data = await res.json();
  console.log(data.name);







  
  city.innerHTML = data.name;
  degre.innerHTML = data.main.temp;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
}










button.addEventListener("click", dousearch);
