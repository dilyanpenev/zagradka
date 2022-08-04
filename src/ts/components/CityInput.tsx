import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { BulgarianCities } from '../constants/city-names';

const CityInput = () => {
    return (
        <div className="city-input-wrapper">
            <Autocomplete
                disablePortal
                id="city-input-box"
                options={BulgarianCities}
                renderInput={(params) => <TextField {...params} label="Въведи БГ град" />}
            />
        </div>
    );
}

export default CityInput;
