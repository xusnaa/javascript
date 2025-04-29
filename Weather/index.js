let debounceTimer;
const rapidKey = "3a5241315amsh478d4394adde39bp1c53b8jsn69df6c75e7ed";
const citysearch = (event) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const city = event.target.value;
    if (city.length < 2) return;
    const rapidUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}&limit=5`;
    fetch(rapidUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": rapidKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const results = data.data;
        const ul = document.getElementById("results");
        ul.innerHTML = "";
        results.forEach((city) => {
          const li = document.createElement("li");
          li.textContent = `${city.name}, ${city.countryCode}`;

          li.onclick = () => getWeather(city.latitude, city.longitude);
          ul.appendChild(li);
        });
      }, 400);
  });
};

const apikey = "8ca54f8f7c7dc0c429249622fb161dd9";
function getWeather(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherDescription = document.getElementById("tempreature");
      weatherDescription.textContent = `<div>${data.main.temp} ${data.weather[0].description}</div>`;
      //   document.body.innerHTML = `<h2>${data.name}</h2><p>Humidity : ${data.weather[0].description}</p> <p>lon : ${data.coord.lon}</p> <p>lat : ${data.coord.lat}</p>`;
    });
}
document.getElementById("city").addEventListener("input", citysearch);
