export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  species: Species;
  sprites: Sprites;
  stats: any[];
  types: any[];
  past_types: any[];
}

type Species = {
  name: string;
  url: string;
}

type Sprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    },
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    },
    official_artwork: {
      front_default: string;
    }
  };
}