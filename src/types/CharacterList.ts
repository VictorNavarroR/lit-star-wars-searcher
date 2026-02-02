export interface CharacterList {
  count: number
  next: unknown
  previous: unknown
  results: Character[]
}

export interface Character {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: unknown[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}
