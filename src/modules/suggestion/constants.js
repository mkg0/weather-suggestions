export const Item = {
  Coat: 'Coat',
  Scarf: 'Scarf',
  Boots: 'Boots',
  Gloves: 'Gloves',
  SwimmingSuit: 'Swimming Suit',
  Pijama: 'Pijama',
  WarmSocks: 'Warm Socks',
  Socks: 'Socks',
  Shorts: 'Shorts',
  Tshirt: 'Tshirt',
  Underwear: 'Underwear',
  SunGlasses: 'Sun Glasses',
  SunScreen: 'Sun Screen',
}
export const SuggestionOptions = [
  { label: 'I have plants at home', value: 'plants' },
  { label: 'I ll swim', value: 'swim' },
  { label: 'This is a biking trip', value: 'bike' },
  { label: 'I’ll do sport activities', value: 'sport', disabled: true },
  { label: 'Compact packing(minimal goods)', value: 'compact' },
]

export const RainSuggestion = {
  Umbrella: {
    type: 'rainSuggestion',
    key: 'RAIN/UMBRELLA',
    desc: 'There is perception of rain. Get an umbrella or raining coat.',
    suggestedItems: ['Umbrella or Raining Coat'],
  },
  PlantsHydrated: {
    type: 'rainSuggestion',
    key: 'RAIN/PLANTS_HYDRATED',
    desc: 'Your plants will stay hydrated while you’re away. Weather is rainy',
    suggestedItems: [],
  },
  PlantsDry: {
    type: 'rainSuggestion',
    key: 'RAIN/DRY',
    desc: 'Weather is too dry and there is no rain. Irrigate your plants before leaving.',
    suggestedItems: [],
  },
  PlantsDryLong: {
    type: 'rainSuggestion',
    key: 'RAIN/DRY',
    desc:
      'Interval is too long for leaving your plants without irrigating. Leave your house key to one of your friends to irrigate your plants.',
    suggestedItems: [],
  },
}

export const WindSuggestion = {
  SensitivePlants: {
    type: 'windSuggestion',
    key: 'WIND/SENSITIVE_PLANTS',
    desc:
      'Weather is too windy. It might be dangerous for sensitive plants. Move them inside if you have any at the balcony.',
    suggestedItems: [],
  },
  LightCoat: {
    type: 'windSuggestion',
    key: 'WIND/LIGHT_COAT',
    desc: 'You should consider to get a jacket to protect from wind.',
    suggestedItems: ['Jacket'],
  },
}

export const ColdSuggestion = {
  Cold: {
    type: 'coldSuggestion',
    key: 'COLD/COLD',
    desc: 'Weather is cold. Here there are clothing suggestions for keeping yourself warm',
    suggestedItems: [],
  },
}

export const WarmSuggestion = {
  Warm: {
    type: 'warmSuggestion',
    key: 'WARM/WARM',
    desc: 'Weather is so warm. Consider to wear light clothes and keep yourself hydraided.',
    suggestedItems: [],
  },
  Sunny: {
    type: 'warmSuggestion',
    key: 'WARM/SUNNY',
    desc: 'Weather is so sunny, don’t forget your sun screen.',
    suggestedItems: [Item.SunGlasses, Item.SunScreen],
  },
}
