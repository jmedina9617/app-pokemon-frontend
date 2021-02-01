export interface Pokemon {
    type: string[];
    id: string;
    pokemonID: string;
    name: Name;
    base: Base;
    img: string;
}

export interface Base {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}

export interface Name {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
}