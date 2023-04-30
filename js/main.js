function getWeatherData(city) {
    const apiKey = 'bbbe1b2b85796a25e6d804a7059756e3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        if (data && data.main && data.main.temp && data.main.temp_max && data.main.temp_min && data.weather && data.weather[0] && data.weather[0].description && data.main.humidity) {
          const temp = data.main.temp;
          const tempMax = data.main.temp_max;
          const tempMin = data.main.temp_min;
          const forecast = data.weather[0].description;
          const humidity = data.main.humidity;
  
      
          document.getElementById('temp').textContent = `${temp}°F`;
          document.getElementById('temp-max').textContent = `${tempMax}°F`;
          document.getElementById('temp-min').textContent = `${tempMin}°F`;
          document.getElementById('forecast').textContent = forecast;
          document.getElementById('humidity').textContent = `${humidity}%`;
        } else {
          console.log('Error: Unexpected data format');
        }
      })
      .catch(error => console.log('Error:', error));
  }
  
 
  const button = document.getElementById('submit-btn');
  button.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city);
  });
  