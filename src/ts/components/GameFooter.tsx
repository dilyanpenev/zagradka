import React from 'react';
import { useAppSelector } from '../hooks/storeHooks';
import { selectIsCorrect } from '../reducers/guessSlice';
import GuessForm from './GuessForm';
import SuccessBanner from './SuccessBanner';

const GameFooter = () => {
    const isGameFinished = useAppSelector(selectIsCorrect)

    return (
        <div className="game-footer">
            {isGameFinished ? <SuccessBanner /> : <GuessForm />}
        </div >
    );
}

export default GameFooter;
