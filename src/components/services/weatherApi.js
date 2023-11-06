const BASE_URL ='http://api.weatherapi.com/v1'
const API_KEY = 'fa91f11087f3486f9b0152206232510'

export const forecastApi = (name = "New York",value=7) => {
 return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${name}}&days=${value}`
  ).then(response =>{
    return response.json()
  }).catch(error =>{
    console.log(error)
  })
};
