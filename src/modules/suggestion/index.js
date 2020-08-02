import { message } from 'antd'
import { isBefore, isAfter } from 'date-fns'
import rainSuggestionGen from './rainSuggestionGen'
import windSuggestionGen from './windSuggestionGen'
import coldSuggestionGen from './coldSuggestionGen'
import warmSuggestionGen from './warmSuggestionGen'
import clothSuggestionGen from './clothSuggestionGen'

export function fetchForecast({ lat, long }) {
  return fetch(
    `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&lon=${long}&units=metric`,
  ).then((resp) => {
    if(!resp.ok) throw new Error(resp.status + ': '+ resp.statusText)
    return resp.json()
  }).catch(error => {
    message.error('Api data fetching has failed: '+ error.message)
    return Promise.reject(error)
  })
}

export async function analyse(userData) {
  const forecast = await fetchForecast({lat: userData.location.latitude, long: userData.location.longitude})
  const inDateForecasts = forecast.list.filter((item) => {
    const date = new Date(item.dt_txt)
    return isBefore(date, userData.endDate) && isAfter(date, userData.startDate)
  })

  const suggestionGens = [
    coldSuggestionGen,
    rainSuggestionGen,
    windSuggestionGen,
    warmSuggestionGen,
    clothSuggestionGen
  ]

  return suggestionGens.reduce(
    (suggestion, suggestionGenerator) => {
      return suggestionGenerator(inDateForecasts, userData, suggestion)
    },
    { warnings: [], items: [] },
  )
}
