const location = 'Buenos Aires,ar';
const api_key = 'e4a3ac5e27bea2497bd2c957f0216d94';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
