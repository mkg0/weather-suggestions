import { WindSuggestion } from './constants'

export default function windSugestionGenerator(forecasts, userData, suggestion) {
  const isWindy = Math.max(...forecasts.map((forecast) => forecast.wind.speed)) > 3
  const isCold = suggestion.warnings.some((warning) => warning.key === 'COLD/COLD')
  const plantsAvailable = userData.options.includes('plants')
  const warnings = []
  if (!isCold && isWindy) {
    warnings.push(WindSuggestion.LightCoat)
  }
  if (isWindy && plantsAvailable) {
    warnings.push(WindSuggestion.SensitivePlants)
  }

  return {
    ...suggestion,
    warnings: [...suggestion.warnings, ...warnings],
  }
}
