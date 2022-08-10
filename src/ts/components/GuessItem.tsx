import React, { FC } from 'react';
import ScoreItem from './ScoreItem';
import { IGuessItem } from '../types/general-interfaces';

interface IElement {
    guessIndex: number
}

const GuessItem: FC<IElement & IGuessItem> = ({ guessIndex, cityName, score, guessAttributes }) => {
    return (
        <div className="guess-item">
            <span className="guess-item__title">{guessIndex}. {cityName}</span>
            <div className="guess-item__score-list">
                {score.map((scoreValue, index) => {
                    return <ScoreItem key={index} title={guessAttributes[index]} isCorrect={scoreValue} />
                })}
            </div>
        </div>
    );
}

export default GuessItem;
