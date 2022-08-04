import { Button } from '@mui/material';
import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import CityInput from './CityInput';

const GuessFooter = () => {
    return (
        <div className="guess-footer">
            <CityInput />
            <Button variant="contained" color="success" className="enter-button">
                <KeyboardReturnIcon />
            </Button>
        </div>
    );
}

export default GuessFooter;
