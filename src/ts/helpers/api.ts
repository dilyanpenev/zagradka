import Axios from 'axios';
import type { ICity } from '../types/general-interfaces';

const buildRequestUrl = (endpoint: string) => {
    // eslint-disable-next-line no-restricted-globals
    return `${location.origin}/city-api/${endpoint}`;
}

export const getTodaysCity = async (): Promise<ICity> => {
    const response = await Axios.get(buildRequestUrl('getTodaysCity'));
    return response.data;
}