import React, { FormEvent } from 'react';
import { Button, Box, Autocomplete, TextField } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { BulgarianCities } from '../constants/city-names';
import { useAppDispatch } from '../hooks/storeHooks';
import { addNewGuess, markSuccess } from '../reducers/guessSlice';
import type { ICity } from '../types/general-interfaces';

const GuessForm = () => {
    const dispatch = useAppDispatch()
    const [cityValue, selectCity] = React.useState<ICity | null>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (cityValue !== null) {
            dispatch(addNewGuess({ cityName: cityValue.label, score: [0, 0, 0, 0, 0], guessAttributes: ["edno", "dve", "tri", "chetiri", "pet"] }));
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
