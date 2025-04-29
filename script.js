async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "dc7c95230f4dc857cf6a704e1632a44a";
  
    if (!city) {
      document.getElementById("weatherUpdate").innerText = "Please enter a city name";
      return;
    }
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
      );
  
      if (!response.ok) {
        throw new Error("City not found");
      }
  
      const data = await response.json();
  
      document.getElementById("weatherUpdate").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
      `;
  
      //document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  
    } catch (error) {
      document.getElementById("weatherUpdate").innerText = error.message;
    }
  }
  