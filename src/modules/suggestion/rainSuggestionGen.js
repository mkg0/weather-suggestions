import { RainSuggestion } from './constants'
import { differenceInDays } from 'date-fns'

export default function rainSugestionGenerator(forecasts, userData, suggestion){
  const warnings = []
  const items = []
  const isRainy = forecasts.some(forecast=> forecast.weather.find(weather => weather.main === 'Rain'))
  const plantsAvailable = userData.options.includes('plants') 
  const duration = differenceInDays(userData.endDate, userData.startDate)
  if(isRainy){
    warnings.push(RainSuggestion.Umbrella)
    if(plantsAvailable){
      warnings.push(RainSuggestion.PlantsHydrated)
    }
  }
  
  if(!isRainy && plantsAvailable && duration > 2){
    warnings.push(duration > 3 ? RainSuggestion.PlantsDryLong : RainSuggestion.PlantsDry)
  }
  return {
    warnings: [...suggestion.warnings, ...warnings],
    items: [...suggestion.items, ...items],
  }
}