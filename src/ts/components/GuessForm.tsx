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

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (cityValue !== null) {
            const features = await getCityFeatures(cityValue.label);
            dispatch(addNewGuess({
                cityName: cityValue.label,
                score: [features.region === answerCity?.region,
                features.oblast === answerCity?.oblast,
                features.population === answerCity?.population,
                features.railway === answerCity?.railway,
                features.altitude === answerCity?.altitude],
                guessAttributes: [features.region, features.oblast, features.population.toString(), features.railway.toString(), features.altitude.toString()]
            }));
            selectCity(null);
            // Select the first city as the correct one for testing purposes
            if (cityValue.id === 1) {
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
