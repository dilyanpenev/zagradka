export interface IGuessItem {
    cityName: string,
    score: boolean[],
    guessAttributes: string[]
}

export interface ICity {
    label: string,
    id: number,
}

export interface IFeatures {
    oblast: string,
    region: string,
    population: number,
    railway: boolean,
    altitude: number,
}

export interface ICityRecord {
    label: string,
    oblast: string,
    region: string,
    population: number,
    railway: boolean,
    altitude: number,
}