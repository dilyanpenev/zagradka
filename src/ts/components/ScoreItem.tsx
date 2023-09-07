import React, { FC } from 'react';
import { ScoreItemProps } from '../types/props-interfaces';

const ScoreItem: FC<ScoreItemProps> = ({ title, isCorrect }) => {
    let classColour = "";
    if (isCorrect === 2) {
        classColour = "nearly";
    }
    else if (isCorrect === 1) {
        classColour = "correct";
    }

    return (
        <div className={`score-item-wrapper ${classColour}`}>
            <span>{title.toUpperCase()}</span>
        </div>
    );
}

export default ScoreItem;
