import { Item, ColdSuggestion } from './constants'

export default function coldSugestionGenerator(forecasts, _, suggestion) {
  const degrees = forecasts.map((forecast) => forecast.main.feels_like).sort((a, b) => a - b)
  const average = degrees.reduce((a, b) => a + b, 0) / degrees.length
  const lowest = Math.min(...degrees)
  const baseDegree = (lowest + average) / 2
  if (baseDegree > 15) {
    return suggestion
  }

  const items = [Item.Coat]
  if (baseDegree <= 8) items.push(Item.Scarf)
  if (baseDegree <= 6) items.push(Item.Boots)
  if (baseDegree <= 4) items.push(Item.Gloves)
  if (baseDegree <= 2) items.push(Item.WarmSocks)

  const coldSuggestion = { ...ColdSuggestion.Cold, suggestedItems: items }
  return {
    ...suggestion,
    warnings: [...suggestion.warnings, coldSuggestion],
  }
}
