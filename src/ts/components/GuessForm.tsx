import React, { FormEvent } from 'react';
import { Button, Box, Autocomplete, TextField } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { BulgarianCities } from '../constants/city-names';
import { useAppSelector, useAppDispatch } from '../hooks/storeHooks';
import { getCityFeatures } from '../helpers/api';
import { selectAnswerId } from '../reducers/answerSlice';
import { addNewGuess, markSuccess } from '../reducers/guessSlice';
import type { ICity } from '../types/general-interfaces';

const GuessForm = () => {
    const dispatch = useAppDispatch()
    const [cityValue, selectCity] = React.useState<ICity | null>(null);
    const answerCity = useAppSelector(selectAnswerId)

    const compareValues = (answer: any, guess: any, valueType: string) => {
        switch (valueType) {
            case "NAME":
            case "REGION":
            case "OBLAST":
            case "RAILWAY":
                return guess === answer ? 1 : 0;
            case "POPULATION":
            case "ALTITUDE":
                if (guess === answer) {
                    return 1;
                }
                else if (guess >= 0.8 * answer && guess <= 1.2 * answer) {
                    return 2;
                }
                else {
                    return 0;
                }
            default:
                return 0;
        }
    }

    const prepareStringValues = (feature: any, valueType: string) => {
        switch (valueType) {
            case "REGION":
            case "OBLAST":
                return feature;
            case "RAILWAY":
                return feature ? "има" : "няма";
            case "POPULATION":
            case "ALTITUDE":
                return feature.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            default:
                return feature;
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (cityValue !== null) {
            const features = await getCityFeatures(cityValue.label);
            dispatch(addNewGuess({
                cityName: cityValue.label,
                score: [compareValues(answerCity?.region, features.region, "REGION"),
                compareValues(answerCity?.oblast, features.oblast, "OBLAST"),
                compareValues(answerCity?.population, features.population, "POPULATION"),
                compareValues(answerCity?.railway, features.railway, "RAILWAY"),
                compareValues(answerCity?.altitude, features.altitude, "ALTITUDE")],
                guessAttributes: [prepareStringValues(features.region, "REGION"),
                prepareStringValues(features.oblast, "OBLAST"),
                prepareStringValues(features.population, "POPULATION"),
                prepareStringValues(features.railway, "RAILWAY"),
                prepareStringValues(features.altitude, "ALTITUDE")]
            }));
            selectCity(null);
            if (compareValues(answerCity?.name, cityValue.label, "NAME") === 1) {
                dispatch(markSuccess());
            }
        }
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit}>
            <div className="city-input-wrapper">
                <Autocomplete
                    disablePortal
                    id="city-input-box"
                    value={cityValue}
                    onChange={(_event: any, newValue: ICity | null) => {
                        selectCity(newValue);
                    }}
                    options={BulgarianCities}
                    renderInput={(params) => <TextField {...params} label="Въведи БГ град" />}
                />
            </div>
            <Button variant="contained" color="success" className="enter-button" type="submit" disabled={cityValue === null}>
                <KeyboardReturnIcon />
            </Button>
        </Box>
    );
}

export default GuessForm;
