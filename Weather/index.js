let debounceTimer;
const rapidKey = "3a5241315amsh478d4394adde39bp1c53b8jsn69df6c75e7ed";
const apikey = "f8455688a12beff3eb0cdb594f057bcd";
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

function getWeather(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const weatherDescription = document.getElementById("description");
      weatherDescription.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
      <div>${data.main.temp} °K - ${data.weather[0].description}</div>
      
    `;
      getForecast(data.coord.lat, data.coord.lon);
    });
}

function getForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current,alerts&units=metric&appid=${apikey}`;
  console.log("Fetching forecast:", url); // Debug line

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const forecast = document.getElementById("forecast");
      forecast.innerHTML = "";

      data.daily.slice(0, 7).forEach((day) => {
        const date = new Date(day.dt * 1000).toDateString();
        const icon = day.weather[0].icon;
        forecast.innerHTML += `
          <div>
            <h4>${date}</h4>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${day.weather[0].description}">
            <p>${day.weather[0].description}</p>
            <p>Day Temp: ${day.temp.day} °C</p>
          </div>
        `;
      });
    });
}

document.getElementById("city").addEventListener("input", citysearch);
