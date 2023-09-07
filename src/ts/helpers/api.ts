import Axios from 'axios';
import type { ICityRecord, IFeatures } from '../types/general-interfaces';

const buildRequestUrl = (endpoint: string) => {
    // eslint-disable-next-line no-restricted-globals
    return `${location.origin}/city-api/${endpoint}`;
}

export const getTodaysCity = async (): Promise<ICityRecord> => {
    const response = await Axios.get(buildRequestUrl('getTodaysCity'));
    return response.data;
}

export const getCityFeatures = async (cityName: string): Promise<IFeatures> => {
    const response = await Axios.get(buildRequestUrl(`getCityFeatures?cityName=${cityName}`));
    return response.data;
}