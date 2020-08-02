import { differenceInDays } from 'date-fns'
import { Item } from './constants'

export default function clothSugestionGenerator(_, userData, suggestion) {
  const warnings = []
  const items = []
  const swimAvailable = userData.options.includes('swim')
  const compactAvailable = userData.options.includes('compact')
  const duration = differenceInDays(userData.endDate, userData.startDate)
  const isCold = suggestion.warnings.some((warning) => warning.key === 'COLD/COLD')

  if (swimAvailable) {
    items.push({ type: Item.SwimmingSuit, count: 1 })
  }

  if (duration > 1) {
    items.push({ type: Item.Pijama, count: 1 })
    if (isCold) {
      items.push({ type: Item.WarmSocks, count: duration })
    } else {
      items.push({ type: Item.Socks, count: duration })
    }
    const factor = compactAvailable ? 3.1 : 2.5
    items.push({ type: Item.Shorts, count: Math.min(3, Math.max(1, Math.floor(duration / factor))) })
    items.push({ type: Item.Tshirt, count: duration })
    items.push({ type: Item.Underwear, count: duration })
  }

  return {
    warnings: [...suggestion.warnings, ...warnings],
    items: [...suggestion.items, ...items],
  }
}
