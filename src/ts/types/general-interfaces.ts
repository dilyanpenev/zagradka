export interface IGuessItem {
    cityName: string,
    score: number[],
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
    name: string,
    oblast: string,
    region: string,
    population: number,
    railway: boolean,
    altitude: number,
}