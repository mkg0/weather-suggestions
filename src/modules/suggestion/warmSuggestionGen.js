import { WarmSuggestion } from './constants'

export default function warmSugestionGenerator(forecasts, _, suggestion) {
  const degrees = forecasts.map((forecast) => forecast.main.feels_like).sort((a, b) => b - a)
  const isSunny = forecasts.some(forecast=> forecast.weather.find(weather => weather.main === 'Clear'))

  if (isSunny) {
    return suggestion
  }
  const warnings = []
  if(degrees[2] < 25){
    warnings.push(WarmSuggestion.Warm)
  }
  if(degrees[degrees.length] > 25 && isSunny){
    warnings.push(WarmSuggestion.Sunny)
  }

  return {
    ...suggestion,
    warnings: [...suggestion.warnings, ...warnings],
  }
}
